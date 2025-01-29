import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AlbumMain } from '../album';
import { ALBUM } from '../albumlists';
import { AlbumsService } from '../albums.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css'],
  //providers:[AlbumsService]
})
export class AlbumListComponent implements OnInit {
  title = "ALBUM LIST";
  ALBUM: AlbumMain[]=[]
  
  albumForm: FormGroup;

  @Input() album?: AlbumMain;
  selectedalbum?:AlbumMain;
  
  constructor(private route: ActivatedRoute, private location:Location, private router: Router, private albumsService: AlbumsService, private formBuilder: FormBuilder) {
    this.albumForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.ALBUM = this.albumsService.getALBUM();
  }
  
  viewAlbum(id: number): void {
    this.router.navigate(['album-details', id]);
  }

  deleteAlbum(id: number): void {
    const confirmation = confirm('Are you sure you want to delete this album?'); 
    if (confirmation) {
      this.albumsService.deleteAlbum(id);
      this.ALBUM = this.albumsService.getALBUM();
    }
  }
  
  
  
  
  
  
  
  
  
  
  /*album: AlbumMain[] = [];
  albums!: any[];
  @Input() ALBUM?: AlbumMain;
  selectedalbum?: AlbumMain;

  constructor(
    private service: AlbumsService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAlbum();
    
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if(this.albums){
      //this.service.updateAccountMain(this.albums).subscribe(() =>this.goBack());
    }
  }
  

  getAlbum(): void {
    this.service.getAlbums().subscribe((albums: any) => {
      this.album = albums;
    });
  }
  
  /*add(email: string): void {
    email = email.trim();
    if (!email) {
      return;
    }
    this.service.addAlbumMain({ email } as unknown as AlbumMain).subscribe((album: AlbumMain) => {
      this.album.push(album);
    });
  }*/
/*
  delete(album: AlbumMain): void {
    this.confirmDelete();
    this.album = this.album.filter((i) => i !== album);
    //this.service.deleteAlbumMain(album.id).subscribe();
  }

  confirmDelete(): void {
    alert('Are you sure you want to delete this Item?');
  }

  get(){
    return this.album;
  }*/
}
