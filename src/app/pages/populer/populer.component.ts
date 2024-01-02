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
      this.page.subscribe((key:number)=>{
        this.getDataAnime();
      });
  }

  ngOnChanges(): void {

  }

  goToNext(value:number){
    this.page = this.page + value;
    console.log(this.page);
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
