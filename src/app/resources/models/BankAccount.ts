import { Bank } from "./Bank"

export class BankAccount {
  public id?: number
  public costumer_id?: number
  public agency?: string
  public account?: string
  public balance?: string
  public bank?: Bank
  public bank_account_type?: string
  public pix_key?: string

  getAccountType(): string {
    if (this.bank_account_type === 'CHECKING') return 'Conta corrente'
    else return 'Conta poupança'
  }

  getAccountTypeTranslated(): string {
    if (this.bank_account_type === 'CHECKING') return 'Corrente'
    else return 'Poupança'
  }

  getStyle() {
    let styles = {
      'background-color': this.bank!!.background_color
    }
    return styles
  }

  getFormattedBalance(): string {
    let balance = new String(this.balance!!)
    return `${balance!!.replace('.', ',')}`
  }
}
