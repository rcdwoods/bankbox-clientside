export class Transaction {
  public source_id?: number
  public beneficiary_id?: number
  public type?: string
  public value?: string

  public constructor(source_id?: number, beneficiary_id?: number, type?: string, value?: string) {
    this.source_id = source_id
    this.beneficiary_id = beneficiary_id
    this.type = type
    this.value = value
  }

  public getValueFormatted() {
    return this.value?.replace('.', ',')
  }
}
