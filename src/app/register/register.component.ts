import { ToastrService } from 'ngx-toastr';
import { RegisterService } from './../resources/services/register.service';
import { Component, OnInit } from '@angular/core';
import { CostumerRegister } from '../resources/models/CostumerRegister';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name = ""
  cpf = ""
  password = ""

  constructor(private registerService: RegisterService, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  register(name: string, cpf: string, password: string) {
    this.registerService.register(new CostumerRegister(name, cpf, password)).subscribe(
      (data) => {
        this.toastrService.success('Registrado com sucesso!')
        this.router.navigateByUrl('')
      },
      (error) => {
        let errorMessage = this.errorMessage(error)
        this.toastrService.error(errorMessage)
      }
    )
  }

  errorMessage(error: any): string {
    if (error.error.code == 'COSTUMER_ALREADY_EXISTS') return 'Esse usuário já existe!'
    return error.error.message
  }

  validateIsNotNumber(event: KeyboardEvent) {
    const pattern = /[0-9]/
    if (pattern.test(event.key))
      event.preventDefault()
  }

  validateIsNumber(event: KeyboardEvent) {
    const pattern = /[0-9]/
    if (!pattern.test(event.key))
      event.preventDefault()
  }

}
