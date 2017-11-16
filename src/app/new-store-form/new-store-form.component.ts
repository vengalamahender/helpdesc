import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-new-store-form',
  templateUrl: './new-store-form.component.html',
  styleUrls: ['./new-store-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewStoreFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
RegisterUser(store){

  console.log(store);
  
  
 
}

}
