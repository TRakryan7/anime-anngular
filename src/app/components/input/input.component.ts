import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  keyword!:string;

  constructor(private router: Router){}

  onSearch(event:any){
    this.keyword = event.target.value;
    if(!this.keyword || this.keyword.trim()=="") return

    if (event.key === 'Enter' || event.type === 'click'){
      this.router.navigate([`/search/${this.keyword}`]);
    }
  }
}

