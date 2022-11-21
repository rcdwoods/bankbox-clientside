import { ToastrService } from 'ngx-toastr';
import { BankAccount } from './../resources/models/BankAccount';
import { BanksService } from './../resources/services/banks.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-banks-confirm',
  templateUrl: './banks-confirm.component.html',
  styleUrls: ['./banks-confirm.component.css']
})
export class BanksConfirmComponent implements OnInit {

  bank?: BankAccount
  constructor(private banksService: BanksService, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  addBank() {
    this.bank = this.banksService.selectedBank
    this.banksService.addBank().subscribe(
      (data) => {
        this.router.navigateByUrl('')
        this.toastrService.success('Conta adicionada com sucesso!')
      },
      (error) => this.toastrService.error('Você já possui uma conta desse banco adicionada!')
    )
  }

}
