import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.auth.signUpUser(form.value).subscribe(res => {
      alert('user registered successfully');
      console.log("response is ", res);
      this.resetForm(form)
    },
    err => {
      if(err){
        console.log("some error",err);
        
      }
    })
  }

  resetForm(form: NgForm) {
    this.auth.selectedUser = {
      First_name: '',
      Last_name: '',
      email: '',
      password: '',
      mobileNumber: '' 
    };
    form.resetForm();
  }

}
