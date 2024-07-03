import Sale from '#models/sale'

export default interface ClientSales {
  id: number
  name: string
  taxId: string
  sales: (typeof Sale)[]
}
