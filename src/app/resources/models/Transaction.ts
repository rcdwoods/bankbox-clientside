import { Bank } from './Bank';
import { BankAccountBasic } from './BankAccountBasic';
export class Transaction {
  public source?: BankAccountBasic
  public source_id?: number
  public beneficiary?: BankAccountBasic
  public beneficiary_id?: number
  public type?: string
  public value?: string
  public performed_at?: string
  public flow?: string

  public constructor(source_id?: number, beneficiary_id?: number, type?: string, value?: string) {
    this.source_id = source_id
    this.beneficiary_id = beneficiary_id
    this.type = type
    this.value = value
  }

  getValueFormatted() {
    let value = new String(this.value!!)
    return value?.replace('.', ',')
  }
}
