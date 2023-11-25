import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',

})
export class DynamicPageComponent {

  public  myFor2: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Metal Gear',[Validators.required]],
      ['DeathPool',[Validators.required]],
    ])
  })


  constructor( private fb: FormBuilder){}

  onSubmit():void{
      if(this.myFor2.invalid){
        this.myFor2.markAllAsTouched();
        return;
      }

      console.log(this.myFor2.value);

  }

}
