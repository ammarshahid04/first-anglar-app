import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstapp';

number1:number=50;
number2:number=60;
result:number=0;


calculator()
{
  this.result=this.number1+this.number1;
  
}

}
