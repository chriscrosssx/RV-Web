import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RedvelvetComponent } from './redvelvet/redvelvet.component';
//import { AlbumsComponent } from './albums/albums.component';
import { AboutComponent } from './about/about.component';
import { DiscographyComponent } from './discography/discography.component';
import { ProfileComponent } from './profile/profile.component';
import { AlbumDetailsComponent } from './albums/album-details/album-details.component';
import { AlbumListComponent } from './albums/album-list/album-list.component';
import { AccountDetailsComponent } from './Accounts/account-details/account-details.component';
import { AccountListComponent } from './Accounts/account-list/account-list.component';
import { AccountModule } from './Accounts/account.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule }from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AlbumsModule } from './albums/albums.modules';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    RedvelvetComponent,
    //AlbumsComponent,
    AboutComponent,
    DiscographyComponent,
    ProfileComponent,
    //AlbumDetailsComponent,
    //AlbumListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AccountModule,
    AlbumsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{dataEncapsulation:false}),
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
