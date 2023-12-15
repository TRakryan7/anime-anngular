import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


  dataAnime:any[]=[];
  dataRecomAnime:any[]=[];
  title:string = 'Paling Populer';
  linkTitle:string='lihat semua';
  linkHref='/populer';

  constructor(
    private apiService: ApiService,
  ){}
 
  ngOnInit(): void {
      this.getDataAnime();
      this.getRecommedationAnime();
  }

  getDataAnime(){
    this.apiService.getDataApi(`/top/anime?limit=8`,).subscribe(
      (res)=>{
        this.dataAnime = res.data;
      }
    )
  }

  getRecommedationAnime(){
    this.apiService.getDataApi(`/recommendations/anime?entry`).subscribe(
      (res) => {
        const data = res.data;
        this.dataRecomAnime = this.apiService.reproduce(data.flatMap((item:any)=>item.entry),8).data;
      }
    )
  }
}
