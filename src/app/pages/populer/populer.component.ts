import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-populer',
  templateUrl: './populer.component.html',
  styleUrl: './populer.component.css'
})
export class PopulerComponent implements OnInit {

  page:number = 1;
  dataAnime:any;

  constructor(private apiService:ApiService){}

  ngOnInit(): void {
      
  }

  async getDataAnime(){
    this.apiService.getDataApi(`top/anime?page=${this.page}`).subscribe(
      (res)=>{
          this.dataAnime = res.data;
        }
      )
  }
}
