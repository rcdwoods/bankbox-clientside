export class CostumerRegister {
  public name?: string
  public cpf?: string
  public password?: string

  constructor(name: string, cpf: string, password: string) {
    this.name = name
    this.cpf = cpf
    this.password = password
  }
}
