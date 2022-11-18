import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banks-choose',
  templateUrl: './banks-choose.component.html',
  styleUrls: ['./banks-choose.component.css']
})
export class BanksChooseComponent implements OnInit {

  banks = [
    {
      name: 'Banco Itaú Unibanco S/A',
      imgUrl: '../../assets/imgs/banks/itau.png',
      accountType: 'Conta corrente',
      agency: '0134',
      accountNumber: '1242-3',
      balance: 'R$ 13,24'
    },
    {
      name: 'Nubank S/A',
      imgUrl: '../../assets/imgs/banks/nubank.png',
      accountType: 'Conta poupança',
      agency: '1759',
      accountNumber: '8255-7',
      balance: 'R$ 100,00'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
