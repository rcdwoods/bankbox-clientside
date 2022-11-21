export class BalanceDetails {
  public user_id?: number
  public total_balance?: string
  public checking_balance?: string
  public savings_balance?: string

  getFormattedTotalBalance() {
    let totalBalance = new String(this.total_balance)
    return `R$ ${totalBalance.replace('.', ',')}`
  }
}
