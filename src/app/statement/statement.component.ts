import { BalanceDetails } from './../resources/models/BalanceDetails';
import { CostumerService } from './../resources/services/costumer.service';
import { BankAccount } from './../resources/models/BankAccount';
import { Bank } from './../resources/models/Bank';
import { BanksService } from './../resources/services/banks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {

  month?: {name: string, code: string}[] = [{name: 'Novembro', code: '2022-11'}]
  bank?: {name: string, code: string}[] = [{name: 'Todos', code: 'ALL'}]
  banks = [
    {name: 'Todos', code: 'ALL'},
    {name: 'Banco do Brasil', code: 'BANCO_DO_BRASIL'},
    {name: 'Bradesco', code: 'BRADESCO'},
    {name: 'Itau', code: 'ITAU'},
    {name: 'Nubank', code: 'NUBANK'},
    {name: 'Santander', code: 'SANTANDER'}
  ]
  months = [
    {name: 'Dezembro', code: '2022-12'},
    {name: 'Novembro', code: '2022-11'}
  ]
  customerBanks: BankAccount[] = []
  balanceDetails?: BalanceDetails;

  constructor(private banksService: BanksService, private costumerService: CostumerService) { }

  ngOnInit(): void {
    this.banksService.getBanks().subscribe(
      (data) => this.customerBanks = data.map(bank => Object.assign(new BankAccount(), bank))
    )
    this.costumerService.getBalanceDetails().subscribe(
      (data) => this.balanceDetails = Object.assign(new BalanceDetails(), data)
    )
  }

}
