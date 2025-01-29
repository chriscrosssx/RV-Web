// Import required modules and services
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AccountListComponent } from './account-list/account-list.component';

// Define routes for the account module
const accountRoutes: Routes = [
      { path: 'account', redirectTo: '/account' }, // Redirect to /account
      // { path: 'account-details/:id', redirectTo: '/accounts/:id' }, // Redirect to /accounts/:id
      { path: 'accounts', component: AccountListComponent }, // Route to AccountListComponent
      { path: 'account-details/:id', component: AccountDetailsComponent } // Route to AccountDetailsComponent with parameter :id
];

@NgModule({
// Import the routes and export the RouterModule
imports: [
  RouterModule.forChild(accountRoutes)],
    exports: [
    RouterModule,]
  }
)

// Define the AccountRoutingModule module
export class AccountRoutingModule { }