import { BanksService } from './../resources/services/banks.service';
import { ToastrService } from 'ngx-toastr';
import { BankAccount } from './../resources/models/BankAccount';
import { TransferenceService } from './../resources/services/transference.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pix-beneficiary',
  templateUrl: './pix-beneficiary.component.html',
  styleUrls: ['./pix-beneficiary.component.css']
})
export class PixBeneficiaryComponent implements OnInit {

  value: string = ''
  pix_key: string = ''
  account: string = ''
  banks = [
    {name: 'Banco do Brasil', code: 'BANCO_DO_BRASIL'},
    {name: 'Bradesco', code: 'BRADESCO'},
    {name: 'Itau', code: 'ITAU'},
    {name: 'Nubank', code: 'NUBANK'},
    {name: 'Santander', code: 'SANTANDER'}
  ]
  selectedBank: {name: string, code: string}[] = []
  myAccounts: BankAccount[] = []

  constructor(
    private router: Router,
    private transferenceService: TransferenceService,
    private toastrService: ToastrService,
    private banksService: BanksService
    ) { }

  ngOnInit(): void {
    this.value = this.transferenceService.transactionTotalValue
    //if (this.value == '0') this.router.navigateByUrl('pix')
    this.banksService.getBanks().subscribe(
      (data) => {
        this.myAccounts = data.map(bank => Object.assign(new BankAccount(), bank))
      },
      (erro) => console.log('Erro ao obter bancos')
    )
  }

  getMyAccountsWithPix() {
    return this.myAccounts.filter(account => account.pix_key)
  }

  validateIsNumber(event: KeyboardEvent) {
    const pattern = /[0-9,]/
    if (!pattern.test(event.key))
      event.preventDefault()
  }

  setBeneficiary() {
    this.transferenceService.getBeneficiaryByPix(this.pix_key).subscribe(
      (data) => {
        this.transferenceService.beneficiary = Object.assign(new BankAccount(), data[0])
        this.router.navigateByUrl('pix-summary', { skipLocationChange: true })
      },
      (erro) => this.toastrService.error('Chave PIX não encontrada :(')
    )
  }

  setAccountAsBeneficiary(bankAccount: BankAccount) {
    this.transferenceService.getBeneficiaryByPix(bankAccount.pix_key!!).subscribe(
      (data) => {
        this.transferenceService.beneficiary = Object.assign(new BankAccount(), data[0])
        this.router.navigateByUrl('pix-summary', { skipLocationChange: true })
      },
      (erro) => this.toastrService.error('Chave PIX não encontrada :(')
    )
  }
}
