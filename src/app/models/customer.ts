export class Customer {
  address: string
  name: string
  cellphone: string

  constructor(name: string, address: string, cellphone: string) {
    this.name = name
    this.address = address
    this.cellphone = cellphone
  }
}
