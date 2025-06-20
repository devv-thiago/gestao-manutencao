export class Customer {
  id: string
  address: string
  name: string
  cellphone: string

  constructor(id: string, name: string, address: string, cellphone: string) {
    this.id = id
    this.name = name
    this.address = address
    this.cellphone = cellphone
  }
}
