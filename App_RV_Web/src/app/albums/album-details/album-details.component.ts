import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Location } from '@angular/common';
import { AlbumMain } from '../album';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  Album : AlbumMain | undefined;
  //originalAlbum: AlbumMain | undefined;
  originalAlbum: AlbumMain = { 
    id: 0,
    item:{
        name: '',
        description: '',
        unit_price: 0,
        qty: 0,
        img: ''
    }
  };
  constructor( 
    private route: ActivatedRoute, 
    private router: Router, 
    private albumService: AlbumsService 
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = Number(params['id']);
      this.fetchAlbumDetails(id);
      this.originalAlbum = {
        id: this.Album?.id || 0,
        item: {
          name: this.Album?.item?.name || '',
          description: this.Album?.item?.description || '',
          unit_price: this.Album?.item?.unit_price || 0,
          qty: this.Album?.item?.qty || 0,
          img: this.Album?.item?.img || ''
        }
      };
    });

    /*
    this.route.params.subscribe(params => {
      const id = Number(params['id']);
      this.fetchAlbumDetails(id);
      this.originalAlbum = {
        id: this.Album?.id || 0,
        item: { ...(this.Album?.item || {}) }
      };
    /*
     *const id = Number(this.route.snapshot.paramMap.get('id'));
     *this.Album = this.albumService.getALBUMS(id);
     */
   /* });*/
  }

  fetchAlbumDetails(id: number): void {
    this.Album = this.albumService.getALBUMS(id);
    // Make a copy of the original album to track changes
    (this.originalAlbum as AlbumMain) = { ...(this.Album as AlbumMain) };
  }

  saveChanges(): void {
    if (this.Album) {
      this.albumService.updateALBUMS(this.Album);
      console.log('Changes saved:', this.Album);
      this.router.navigate(['/albums']);
    }
  }

  goBack(): void{
    if (this.Album && this.originalAlbum) {
      // Reset the album object to the original values
      Object.assign(this.Album, this.originalAlbum);
    }
    this.router.navigate(['/albums']);
  }
  discardChanges() {
    // Restore the original state of the Album object
    this.Album = { ...this.originalAlbum };
  }

  /*
  @Input()album?: AlbumMain;
  albums:AlbumMain[]=[];
  selectAlbum?:AlbumMain;
  onSelect(album:AlbumMain):void{
    this.selectAlbum=album;
  }
  constructor(private route:ActivatedRoute,
  private service: AlbumsService,
  private location:Location ) {

  }
  ngOnInit(): void {
    this.getAlbum();
  }
  getAlbum() {
    throw new Error('Method not implemented.');
  }
/*
  goBack():void{
    this.location.back();
  }
  save(): void {
    if (this.album){
      this.service.updateAlbum(this.album).subscribe(() =>this.goBack());
    }
  }
  getOrder(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getAlbum(id).subscribe(album =>this.album=album)
  }*/
}