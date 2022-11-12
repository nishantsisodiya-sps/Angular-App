import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input ()myValue = ""

  ngOnInit(): void {
    
  }
  clearBtn(){
    const input = document.getElementById('myInput') as HTMLInputElement;
    input.value = "" 
    this.myValue = ""
  }
}
  

  
