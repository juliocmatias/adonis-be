import Address from '#models/address'
import Client from '#models/client'
import Phone from '#models/phone'
import ClientRequestUpdate from '../interfaces/clients/client_req_upadate.js'
import ClientRequest from '../interfaces/clients/client_request.js'
import ClientResponse from '../interfaces/clients/client_response.js'
import { ServiceResponse } from '../interfaces/service_response.js'

export default class ClientService {
  constructor(
    private clientModel = Client,
    private addressModel = Address,
    private phoneModel = Phone
  ) {}

  async index(): Promise<ServiceResponse<Client[]>> {
    try {
      const clients = await this.clientModel.query().orderBy('id', 'asc')

      return { status: 'SUCCESSFUL', data: clients }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error occurred'
      return { status: 'INTERNAL_SERVER_ERROR', data: { message } }
    }
  }

  async store(client: ClientRequest): Promise<ServiceResponse<ClientResponse>> {
    try {
      const { address, phones, ...clientData } = client

      const clientExists = await this.clientModel.findBy('taxId', client.taxId)

      if (clientExists) {
        return { status: 'CONFLICT', data: { message: 'Client already exists' } }
      }

      const newClient = await this.clientModel.create({ ...clientData })

      const newAddress = await this.addressModel.create({ ...address, clientId: newClient.id })

      const newPhones: number[] = []

      for (const phone of phones) {
        const newPhone = await this.phoneModel.create({
          number: phone,
          clientId: newClient.id,
        })
        newPhones.push(newPhone.id)
      }

      return {
        status: 'CREATED',
        data: {
          id: newClient.id,
          name: newClient.name,
          addressId: newAddress.id,
          phonesIds: newPhones,
        },
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error occurred'
      return { status: 'INTERNAL_SERVER_ERROR', data: { message } }
    }
  }

  async update(
    id: string,
    client: ClientRequestUpdate
  ): Promise<ServiceResponse<{ message: 'Client updated' }>> {
    try {
      const { address, phones, ...clientData } = client

      const clientExists = await this.clientModel.find(id)

      if (!clientExists) {
        return { status: 'NOT_FOUND', data: { message: 'Client not found' } }
      }

      const clientWithTaxId = await this.clientModel.findBy('taxId', clientData.taxId)

      if (clientWithTaxId && clientWithTaxId.id !== clientExists.id) {
        return { status: 'CONFLICT', data: { message: 'Client already exists' } }
      }

      if (clientData.name || clientData.taxId) {
        clientExists.merge(clientData)
        await clientExists.save()
      }

      if (address) {
        const clientAddress = await this.addressModel.findBy('clientId', id)

        if (clientAddress) {
          clientAddress.merge(address)
          await clientAddress.save()
        }
      }

      if (phones) {
        for (const phone of phones) {
          const clientPhone = await this.phoneModel.find(phone.phoneId)

          if (clientPhone) {
            clientPhone.merge({ number: phone.number })
            await clientPhone.save()
          }
        }
      }
      return { status: 'SUCCESSFUL', data: { message: 'Client updated' } }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error occurred'
      return { status: 'INTERNAL_SERVER_ERROR', data: { message } }
    }
  }
}
