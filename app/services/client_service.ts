import Client from '#models/client'
import { ServiceResponse } from '../interfaces/service_response.js'

export default class ClientService {
  constructor(private clientModel = Client) {}

  async index(): Promise<ServiceResponse<Client[]>> {
    try {
      const clients = await this.clientModel.query().orderBy('id', 'asc').exec()

      return { status: 'SUCCESSFUL', data: clients }
    } catch (error) {
      return this.handleError(error)
    }
  }

  async show(clientId: number): Promise<ServiceResponse<Client>> {
    try {
      const client = await this.clientModel.query().where('id', clientId).preload('sales').first()

      if (!client) {
        return this.notFound('Client not found')
      }

      return { status: 'SUCCESSFUL', data: client }
    } catch (error) {
      return this.handleError(error)
    }
  }

  async store(name: string, taxId: string): Promise<ServiceResponse<{ id: number }>> {
    try {
      if (!name || !taxId) {
        return this.badRequest('Name and taxId are required')
      }

      const clientExists = await this.clientModel.findBy('taxId', taxId)

      if (clientExists) {
        return { status: 'CONFLICT', data: { message: 'Client already exists' } }
      }

      const client = await this.clientModel.create({ name, taxId })

      return { status: 'SUCCESSFUL', data: { id: client.id } }
    } catch (error) {
      return this.handleError(error)
    }
  }

  async update(
    id: number,
    name?: string,
    taxId?: string
  ): Promise<ServiceResponse<{ message: string }>> {
    try {
      const client = await this.clientModel.find(id)

      if (!client) {
        return this.notFound('Client not found')
      }

      if (taxId && client.taxId !== taxId) {
        const clientExists = await this.clientModel.findBy('taxId', taxId)

        if (clientExists) {
          return { status: 'CONFLICT', data: { message: 'Client already exists' } }
        }
        client.taxId = taxId
      }

      if (name) {
        client.name = name
      }

      await client.save()

      return { status: 'SUCCESSFUL', data: { message: 'Client updated' } }
    } catch (error) {
      return this.handleError(error)
    }
  }

  async destroy(id: number): Promise<ServiceResponse<{ message: string }>> {
    try {
      const client = await this.clientModel.find(id)

      if (!client) {
        return this.notFound('Client not found')
      }

      await client.delete()

      return { status: 'SUCCESSFUL', data: { message: 'Client deleted' } }
    } catch (error) {
      return this.handleError(error)
    }
  }

  private handleError(error: any): ServiceResponse<any> {
    const message = error instanceof Error ? error.message : 'Unknown error occurred'
    return { status: 'INTERNAL_SERVER_ERROR', data: { message } }
  }

  private notFound(message: string): ServiceResponse<any> {
    return { status: 'NOT_FOUND', data: { message } }
  }

  private badRequest(message: string): ServiceResponse<any> {
    return { status: 'BAD_REQUEST', data: { message } }
  }
}
