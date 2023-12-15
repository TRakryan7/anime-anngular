import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { InputComponent } from './input/input.component';
import { AnimeCardComponent } from './anime-card/anime-card.component';



@NgModule({
  declarations: [
    InputComponent,
    AnimeCardComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[
    InputComponent,
    AnimeCardComponent,
  ]
})
export class ComponentsModule { }
