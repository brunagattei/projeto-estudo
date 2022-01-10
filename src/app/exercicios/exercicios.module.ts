import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercicioUmComponent } from './exercicio-um/exercicio-um.component';



@NgModule({
  declarations: [
    ExercicioUmComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExercicioUmComponent
  ]
})
export class ExerciciosModule { }
