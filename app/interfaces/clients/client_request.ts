export default interface ClientRequest {
  name: string
  taxId: string
  address: {
    street: string
    number: string
    city: string
    state: string
    country: string
    zip: string
  }
  phones: string[]
}
