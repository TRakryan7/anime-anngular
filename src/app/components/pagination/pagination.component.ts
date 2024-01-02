import { Component, Output, Input,EventEmitter, OnChanges, OnInit, SimpleChanges  } from '@angular/core';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent implements OnInit, OnChanges{
  @Input() page!:number;
  @Input() lastPage!:number;
  @Output() handleNext = new EventEmitter<number>();
  @Output() handlePrev = new EventEmitter<number>();


  ngOnInit(): void {
      
  }

  ngOnChanges(changes: SimpleChanges): void {
      
  }


  scrollTop(){
    scrollTo({
      behavior:'smooth',
      top:0
  })
  }

  goToNext(){
    // console.log(value);
    this.handleNext.emit(1)
  }

  goToPrev(value:number){
    console.log(value);
  }
}
