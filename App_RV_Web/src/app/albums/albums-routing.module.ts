import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AlbumDetailsComponent } from "./album-details/album-details.component";
import { AlbumListComponent } from "./album-list/album-list.component";

const albumRoutes: Routes=[
    //{path: 'album', redirectTo: '/album'},
    //{path: 'albums/:id', redirectTo: '/albums/:id'},
    {path: 'albums', component: AlbumListComponent},
    {path: 'album-details/:id', component: AlbumDetailsComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(albumRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class AlbumRoutingModule {}