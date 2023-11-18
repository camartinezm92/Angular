import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const infoStart = {
  name: 'RTX 5090',
  price: 2500,
  inStorage: 6
}

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})



export class BasicPageComponent implements OnInit {

  // Una forma de establercer un formulario
  // public myForm: FormGroup = new FormGroup ({
  //   //name: new FormControl( '' , [] , [] ),  '' = Valor por defecto , [] = Validaciones sincronas, [] = Validaciones asincornas
  //   name:       new FormControl ( '' ),
  //   price:      new FormControl ( 0 ),
  //   inStorage:  new FormControl ( 0 ),
  // })

  // otra forma de establecer un formulario

  public myForm : FormGroup = this.fb.group({
    name:       [ '', [Validators.required, Validators.minLength(3)]  ],
    price:      [ 0,  [Validators.required, Validators.min(0)]        ],
    inStorage:  [ 0,  [Validators.required, Validators.min(0)]        ],
  })


  constructor( private fb: FormBuilder){}


  ngOnInit(): void {

    this.myForm.reset()

  }


  onSave():void {

    if(this.myForm.invalid){
      this.myForm.markAllAsTouched;
      return};

    console.log(this.myForm.value)

    this.myForm.reset(infoStart)
  }





}

