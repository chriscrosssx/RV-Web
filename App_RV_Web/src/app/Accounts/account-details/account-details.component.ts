// Import required modules and services
import { Component, Input, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AccountService } from '../account.service';
import { AccountMain } from '../account';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  // Declare class properties
  AccountMain: AccountMain | undefined; // Store the AccountMain object
  selectedFile: File | null = null; // Store the selected image file

  editedAccount!: AccountMain;
  originalAccount: AccountMain = { 
    id: 0,
    fname: '',
    lname: '',
    email: '',
    mobile: '',
    gender: '',
    marital: '',
    dateb: '',
    imgPath: ''};
  formDirty = false;

  // Constructor for the component
  constructor( private route: ActivatedRoute, private router: Router, private accountService: AccountService ) {
  }

  // Lifecycle hook called after component initialization
  ngOnInit(): void {
    // Get the account ID from the route parameters and load the corresponding account details
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.AccountMain = this.accountService.getACCOUNTSAMP(id);
    if (this.AccountMain) {
      // Create a copy of the AccountMain for editing
      this.editedAccount = { ...this.AccountMain };
      this.originalAccount = { ...this.AccountMain };
    }
  }

  // Save the changes made to the account details
  saveChanges(): void {
    if (this.AccountMain) {
      // Update the original AccountMain with the edited values
      //this.AccountMain.id = this.editedAccount.id;
      this.AccountMain.fname = this.editedAccount.fname;
      this.AccountMain.lname = this.editedAccount.lname;
      this.AccountMain.email = this.editedAccount.email;
      this.AccountMain.mobile = this.editedAccount.mobile;
      this.AccountMain.gender = this.editedAccount.gender;
      this.AccountMain.marital = this.editedAccount.marital;
      this.AccountMain.dateb = this.editedAccount.dateb;
      //this.AccountMain.imgPath = this.editedAccount.imgPath;

      // Check if the image has been selected
      if (this.selectedFile) {
        // Perform the image upload and update the image path
        const reader = new FileReader();
        reader.onload = (event: any) => {
          this.AccountMain!.imgPath = event.target.result;
          this.accountService.updateACCOUNTSAMP(this.AccountMain!);
          console.log('Changes saved:', this.AccountMain);
          this.router.navigate(['/accounts']);
        };
        reader.readAsDataURL(this.selectedFile);
      } else {
        // No image selected, update the account details directly
      this.accountService.updateACCOUNTSAMP(this.AccountMain);
      console.log('Changes saved:', this.AccountMain);
      this.router.navigate(['/accounts']);
      }
      // Save the changes using the service or any other logic
        //lines 63 - 66 newly added
      //this.accountService.updateACCOUNTSAMP(this.AccountMain);
      //console.log('Changes saved:', this.AccountMain);
      //this.router.navigate(['/accounts']);
      //this.router.navigate(['/accounts']);

      /*
      this.componentService.updateACCOUNTSAMP(this.AccountMain);
      console.log('Changes saved:', this.AccountMain);
      this.router.navigate(['/accounts']);*/
    }
  }

  // Navigate back to the previous page
  goBack(): void{
    this.router.navigate(['/accounts']);
  }
  
  discardChanges(): void {
    if (this.AccountMain) {
      // Revert the editedComponentItem to the original componentItem values
      this.editedAccount = { ...this.originalAccount };
      this.formDirty = false;
      
      // Reset the image path to the original value
      //this.AccountMain.imgPath = this.originalAccount.imgPath;
      this.AccountMain.imgPath = this.originalAccount.imgPath;
      this.discardImageChanges();
      this.router.navigate(['/accounts']);
    }
  }
  
  //Discards the changes made to the image path and reverts it to the original value.
  discardImageChanges(): void {
    if (this.AccountMain && this.originalAccount) {
      this.AccountMain.imgPath = this.originalAccount.imgPath;
    }
  }

  @HostListener('window:popstate')
    onPopState(): void {
      // This function is called when the user navigates back in the browser history
      // It discards any unsaved changes and reverts the form to the original component item
      this.discardChanges();
    }
    
    onFormChange(): void {
      this.formDirty = true;
    }
    
  // Handle the file selection event and upload the image
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    this.uploadImage();
  }

  // Upload the selected image file to the server
  uploadImage(): void {
    if (this.AccountMain && this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.AccountMain!.imgPath = event.target.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
}

/* Unused code
@Input()account?:AccountMain;
accounts:AccountMain[]=[];
selectAccount?:AccountMain;

// Handle the selection of an account
onSelect(account:AccountMain):void{
  this.selectAccount=account;
}

// Constructor for the component
constructor(
  private route:ActivatedRoute,
  private service:AccountService,
  private location:Location
) {}

// Lifecycle hook called after component initialization
ngOnInit(): void {
  // this.getAccount();
}

// Navigate back to the previous page
goBack():void{
  this.location.back();
}

// Add a new account
add(email:string):void{
  email=email.trim();
  if(!email){return;}
  this.service.addAccountMain({ email } as unknown as AccountMain)
  .subscribe(account=>{
    this.accounts.push(account);
  });
}

// Save the changes made to the account details
save(): void {
  if(this.account){
    this.service.updateAccountMain(this.account)
    .subscribe(() =>this.goBack());
  }
}

// Get the account details from the server
getAccount():void{
  const id=Number(this.route.snapshot.paramMap.get('id'));
  this.service.getAccountMain(id).subscribe(account =>this.account=account)
}
*/