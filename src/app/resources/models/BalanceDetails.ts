export class BalanceDetails {
  public user_id?: number
  public total_balance?: string
  public checking_balance?: string
  public savings_balance?: string

  getFormattedTotalBalance() {
    let totalBalance = new String(this.total_balance)
    return `${totalBalance.replace('.', ',')}`
  }

  getFormattedCheckingBalance() {
    let checkingBalance = new String(this.checking_balance)
    return `${checkingBalance.replace('.', ',')}`
  }

  getFormattedSavingsBalance() {
    let savingsBalance = new String(this.savings_balance)
    return `${savingsBalance.replace('.', ',')}`
  }
}
