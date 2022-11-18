import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit {

  selectedBank = {};
  selectedOption = 'corrente';
  banks = [
    {
      name: 'ITAU',
      imgUrl: '../../assets/imgs/banks/itau.png',
      color: '#EF761C',
      accountType: 'Conta corrente',
      agency: '0134',
      accountNumber: '1242-3',
      balance: 'R$ 13,24'
    },
    {
      name: 'NUBANK',
      imgUrl: '../../assets/imgs/banks/nubank.png',
      color: '#781BC9',
      accountType: 'Conta poupança',
      agency: '1759',
      accountNumber: '8255-7',
      balance: 'R$ 100,00'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  getStyle(bank: any) {
    let styles = {
      'background-color': bank.color
    }
    return styles
  }

  selectOption(option: string) {
    this.selectedOption = option
  }

  selectBank(bank: any) {
    console.log(this.banks)
    let index = this.banks.indexOf(bank)
    let lastValue = this.banks[this.banks.length - 1]
    this.banks[index] = lastValue
    this.banks[this.banks.length - 1] = bank
  }
}
