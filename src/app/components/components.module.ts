import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {YouTubePlayerModule} from '@angular/youtube-player';
import {MatIconModule} from '@angular/material/icon';
import { InputComponent } from './input/input.component';
import { AnimeCardComponent } from './anime-card/anime-card.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { PaginationComponent } from './pagination/pagination.component';



@NgModule({
  declarations: [
    InputComponent,
    AnimeCardComponent,
    VideoPlayerComponent,
    PaginationComponent,
    
  ],
  imports: [
    CommonModule,
    MatIconModule,
    YouTubePlayerModule
  ],
  exports:[
    InputComponent,
    AnimeCardComponent,
    VideoPlayerComponent,
    PaginationComponent
  ]
})
export class ComponentsModule { }
