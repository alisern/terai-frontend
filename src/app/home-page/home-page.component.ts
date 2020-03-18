
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Copyright} from '../copyright';
import {copyrigthList} from './listOfItems'


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  @ViewChild('nextElement', {static: false}) searchElement: ElementRef;

  copyrightList: Copyright[];


  constructor() { }
  
  showOne: boolean = false;
  showBlock: boolean = false;
  copyrightLimit = 1;
 
  ngOnInit() { 
    this.copyrightList = copyrigthList;
  }


   scroll() {
      this.showOne = true;
      this.showBlock = true;
      this.searchElement.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  ngAfterViewChecked() {
    if(this.showBlock){
      this.searchElement.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      this.showBlock = false;
    } 
  }

  

  
}
