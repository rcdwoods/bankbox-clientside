export class CreditCard {
  public id?: Number
  public owner?: string
  public number?: string
  public last_numbers?: string
  public expiration?: string
  public security_number?: number
  public type?: string
  public brand?: string

  public getImgUrl() {
    let brand = this.brand?.toLowerCase()
    return `../../assets/imgs/cards/${brand}.png`
  }
}
