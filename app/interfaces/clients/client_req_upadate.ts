export default interface ClientRequestUpdate {
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
  phones: { phoneId: number; number: string }[]
}
