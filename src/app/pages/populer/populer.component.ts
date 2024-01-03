import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-populer',
  templateUrl: './populer.component.html',
  styleUrl: './populer.component.css'
})
export class PopulerComponent implements OnInit,OnChanges {

  page:any = 1;
  dataAnime:any;

  constructor(private apiService:ApiService){}

  ngOnInit(): void {
      this.getDataAnime();
  }

  ngOnChanges(): void {

  }

  goToNext(value:number){
      this.page = this.page + value;
      this.getDataAnime();

  }

  goToPrev(value:number){
      this.page = this.page - value;
      this.getDataAnime();
  }

  async getDataAnime(){
    this.apiService.getDataApi(`/top/anime?page=${this.page}`).subscribe(
      (res)=>{
          this.dataAnime = res;
          console.log;(this.dataAnime)
        }
      )
  }
}
