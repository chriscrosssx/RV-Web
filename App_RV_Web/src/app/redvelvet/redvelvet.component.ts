import { Component, OnInit } from '@angular/core';
import { Redvelvet } from './redvelvet';
import { REDVELVET } from './redvelvetlists';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-redvelvet',
  templateUrl: './redvelvet.component.html',
  styleUrls: ['./redvelvet.component.css']
})
export class RedvelvetComponent implements OnInit {
  
  redvelvet: Redvelvet[] =[];

  constructor() { }

  ngOnInit(): void {
    this.redvelvet=REDVELVET;
  }

  

}