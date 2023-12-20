import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, } from '@angular/router';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrl: './anime.component.css'
})
export class AnimeComponent implements OnInit {
  response!:any;
  id!:string;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
  ){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id') || '';
      this.getDataAnime(this.id);
    }) 
  }

  getDataAnime(param:string){
    this.apiService.getDataApi(`/anime/${param}`,).subscribe(
      (res)=>{
        this.response = res.data;
        console.log(this.response);
      }
    )
  }
}
