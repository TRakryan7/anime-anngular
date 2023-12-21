import { Component, OnInit,OnChanges, DoCheck, AfterContentChecked } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit	{

  keyword!:string;
  api!:any[];
  title!:string;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,){

    }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.keyword = params.get('keyword') || '';
      this.title = `Pencarian untuk ${decodeURI(this.keyword)}`;
      this.getDataAnime(this.keyword);
    })
  }


  getDataAnime(param:string){
    this.apiService.getDataApi(`/anime?q=${this.keyword}`,).subscribe(
      (res)=>{
        this.api = res.data;
      }
    )
  }
  
}
