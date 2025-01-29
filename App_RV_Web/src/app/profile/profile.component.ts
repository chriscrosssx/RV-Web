import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Redvelvet } from '../redvelvet/redvelvet';
import { REDVELVET } from '../redvelvet/redvelvetlists';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  redvelvet = REDVELVET;

  selectedRedvelvet?: Redvelvet;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');
    this.selectedRedvelvet = REDVELVET.find(selectedRedvelvet => selectedRedvelvet.name == id);
  }

}
