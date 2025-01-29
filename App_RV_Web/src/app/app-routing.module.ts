import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RedvelvetComponent } from './redvelvet/redvelvet.component';
//import { AlbumsComponent } from './albums/albums.component';
import { AboutComponent } from './about/about.component';
import { DiscographyComponent } from './discography/discography.component';
import { ProfileComponent } from './profile/profile.component';
import { AlbumDetailsComponent } from './albums/album-details/album-details.component';
import { AlbumListComponent } from './albums/album-list/album-list.component';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';
import { AccountModule } from './Accounts/account.module';
import { AlbumsModule } from './albums/albums.modules';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'redvelvet', component: RedvelvetComponent},
  //{path: 'albums', component: AlbumListComponent},
  {path: 'about', component: AboutComponent},
  {path: 'discography', component: DiscographyComponent},
  {path: 'profile/:id', component: ProfileComponent},
  //{path: 'albumdetails', component: AlbumDetailsComponent},
  //{path: 'albumdetails/:id', component: AlbumDetailsComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
       routes,
        {
      enableTracing: false, //for debugging
      preloadingStrategy: SelectivePreloadingStrategyService,
  }
)
],
  exports: [RouterModule]
})
export class AppRoutingModule { }