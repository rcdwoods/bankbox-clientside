import { ToastrService } from 'ngx-toastr';
import { TransferenceService } from './../resources/services/transference.service';
import { CostumerService } from './../resources/services/costumer.service';
import { BanksService } from './../resources/services/banks.service';
import { BalanceDetails } from './../resources/models/BalanceDetails';
import { BankAccount } from './../resources/models/BankAccount';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pix-select',
  templateUrl: './pix-select.component.html',
  styleUrls: ['./pix-select.component.css']
})
export class PixSelectComponent implements OnInit {

  banks: BankAccount[] = []
  balanceDetails: BalanceDetails = new BalanceDetails()

  constructor(
    private banksService: BanksService,
    private costumerService: CostumerService,
    private transferenceService: TransferenceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.banksService.getBanks().subscribe(
      (data) => {
        this.banks = data
        .filter(bank => bank.pix_key)
        .map(bank => Object.assign(new BankAccount(), bank))
      },
      (erro) => console.log('Erro ao obter bancos')
    )

    this.costumerService.getBalanceDetails().subscribe(
      (data) => {
        this.balanceDetails = Object.assign(new BalanceDetails, data)
      },
      (erro) => console.log('Erro ao obter bancos')
    )
  }

  getBanksByAccountType(type: string) {
    return this.banks.filter(bank => bank.bank_account_type === type)
  }

  initTransaction(from: BankAccount[]) {
    this.transferenceService.initTransaction(from)
    this.router.navigateByUrl('pix-value', { skipLocationChange: true })
  }

  getBankNames() {
    if ( this.banks.length == 0) return ''
    if (this.banks.length == 1) return this.banks[0].bank?.formatted_name
    let formattedNames = new String(this.banks.map(bank => bank.bank?.formatted_name))
    return formattedNames.split(',').join(', ')
  }
}
