import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-comfirm-daialog',
  templateUrl: './comfirm-daialog.component.html',
  styles: [
  ]
})
export class ComfirmDaialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ComfirmDaialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Hero,
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onConfirm():void{
    this.dialogRef.close(true);

  }

}
