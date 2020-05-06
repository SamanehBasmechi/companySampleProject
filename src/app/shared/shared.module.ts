import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from './pipes/translate.pipe';
import { LoadingComponent } from './components/loading/loading.component';



@NgModule({
  declarations: [TranslatePipe, LoadingComponent],
  imports: [
    CommonModule
  ],
  exports:[
    TranslatePipe,
    LoadingComponent
  ]
})
export class SharedModule { }
