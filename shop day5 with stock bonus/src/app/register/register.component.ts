import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  register: FormGroup;

  constructor(private fb:FormBuilder){
    this.register=this.fb.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.pattern]],
      username:['',[Validators.required,Validators.pattern]],
      password:['',[Validators.required,Validators.pattern]],
        // repassword:['',[Validators.required]]
    //   passwords: this.fb.group({
        
    // },{Validators:this.matchPass}),
      
  })
  }

  submitRegister(){
    console.log(this.register);
    // console.log(this.register.controls['passwords'].get('password'));
    
    
  }
  
  // matchPass(c: AbstractControl) {
  //   if (c.get('passwords')?.get('password')?.value !== c.get('passwords')?.get('repassword')?.value) {
  //       return {invalid: true};
  //   }
  //   return {invalid: false};
  // }

}
