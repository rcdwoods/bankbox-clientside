import { ToastrService } from 'ngx-toastr';
import { BankAccount } from './../resources/models/BankAccount';
import { TransferenceService } from './../resources/services/transference.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transference-beneficiary',
  templateUrl: './transference-beneficiary.component.html',
  styleUrls: ['./transference-beneficiary.component.css']
})
export class TransferenceBeneficiaryComponent implements OnInit {

  value: string = ''
  agency: string = ''
  account: string = ''
  banks = [
    {name: 'Banco do Brasil', code: 'BANCO_DO_BRASIL'},
    {name: 'Bradesco', code: 'BRADESCO'},
    {name: 'Itau', code: 'ITAU'},
    {name: 'Nubank', code: 'NUBANK'},
    {name: 'Santander', code: 'SANTANDER'}
  ]
  selectedBank = []

  constructor(private router: Router, private transferenceService: TransferenceService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.value = this.transferenceService.transactionTotalValue
    if (this.value == '1') this.router.navigateByUrl('transference')
  }

  validateIsNumber(event: KeyboardEvent) {
    console.log(Number(this.value?.replace(',', '.')))
    const pattern = /[0-9,]/
    if (!pattern.test(event.key))
      event.preventDefault()
  }

  setBeneficiary() {
    this.transferenceService.getBeneficiary(this.agency!!, this.account!!).subscribe(
      (data) => {
        this.transferenceService.beneficiary = Object.assign(new BankAccount(), data[0])
        this.router.navigateByUrl('transference-summary', { skipLocationChange: true })
      },
      (erro) => this.toastrService.error('Conta não encontrada :(')
    )
  }

}
