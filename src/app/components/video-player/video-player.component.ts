import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {YouTubePlayer} from '@angular/youtube-player';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.css'
})
export class VideoPlayerComponent implements OnChanges, OnInit  {
  @Input() videoId!: string;
  isOpen:boolean = true;

  ngOnInit(): void {
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

  ngOnChanges(): void {
      // console.log(this.videoId);
  }

  handleOpen(){
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }

}
