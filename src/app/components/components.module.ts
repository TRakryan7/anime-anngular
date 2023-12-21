import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { InputComponent } from './input/input.component';
import { AnimeCardComponent } from './anime-card/anime-card.component';
import { VideoPlayerComponent } from './video-player/video-player.component';



@NgModule({
  declarations: [
    InputComponent,
    AnimeCardComponent,
    VideoPlayerComponent
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
