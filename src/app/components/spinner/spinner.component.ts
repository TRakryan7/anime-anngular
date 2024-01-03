import { Component, ViewEncapsulation } from '@angular/core';
import { LoaderService } from '../../shared/services/loader/loader.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SpinnerComponent {
  constructor(public loader:LoaderService){}
}
