import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  
{
  title = 'LoadingAssignment';
  arr=  Array(20);
  len:number=20;
  Loaders: boolean = false;
  constructor() { } 
  @HostListener('window:scroll', ['$event']) scrollEvent(event) 
  {
    if((window.innerHeight+ document.documentElement.scrollTop)>=document.documentElement.offsetHeight)
    {
      this.Loaders = true;      
      setTimeout(() => 
      {
        this.Loaders = false;
        this.arr.length+=10;
         console.log("data add")
         console.log(this.arr.length)
      }, 5000);
    }
  }
}