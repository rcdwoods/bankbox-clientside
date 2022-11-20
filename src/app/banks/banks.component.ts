import { Bank } from './../resources/models/Bank';
import { BanksService } from './../resources/services/banks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit {

  selectedBank = {};
  selectedOption = 'corrente';
  banks: Bank[] = []

  constructor(private banksService: BanksService) { }

  ngOnInit(): void {
    this.banksService.getBanks().subscribe(
      (data) => {
        console.log(data)
        this.banks = data
      },
      (erro) => console.log('Erro ao obter bancos')
    )
  }

  getBankColor(bank: Bank) {
    if (bank.bank_name === 'ITAU') return '#EF761C'
    else return '#781BC9'
  }

  getImgUrl(bank: Bank) {
    if (bank.bank_name === 'ITAU') return '../../assets/imgs/banks/itau.png'
    else return '../../assets/imgs/banks/nubank.png'
  }

  getAccountType(bank: Bank) {
    if (bank.bank_account_type === 'CHECKING') return 'Conta corrente'
    else return 'Conta poupança'
  }

  getStyle(bank: any) {
    let styles = {
      'background-color': this.getBankColor(bank)
    }
    return styles
  }

  selectOption(option: string) {
    this.selectedOption = option
  }

  selectBank(bank: any) {
    let index = this.banks.indexOf(bank)
    let lastValue = this.banks[this.banks.length - 1]
    this.banks[index] = lastValue
    this.banks[this.banks.length - 1] = bank
  }
}
