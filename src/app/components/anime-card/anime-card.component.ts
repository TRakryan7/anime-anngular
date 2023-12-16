import { Component,Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-anime-card',
  templateUrl: './anime-card.component.html',
  styleUrl: './anime-card.component.css'
})
export class AnimeCardComponent implements OnChanges{
  constructor(){};

  @Input() api? : any[] = [];
  @Input() title? :string;
  @Input() linkTitle?:string;
  @Input() linkHref?:string;

  ngOnChanges(): void {
      console.log(this.api);
  }
  
}
