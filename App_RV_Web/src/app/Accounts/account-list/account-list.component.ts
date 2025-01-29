import { Component,Input, OnInit } from '@angular/core'; // import necessary components from Angular
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AccountService} from '../account.service'; // import custom service
import { AccountMain} from '../account'; // import custom model
import { ACCOUNTSAMP } from '../accounts'; // import sample data
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({ // define the component with decorator
  selector: 'app-account-list', // specify the selector
  templateUrl: './account-list.component.html', // specify the template file
  styleUrls: ['./account-list.component.css'], // specify the style files
  //providers:[AccountService]
})
export class AccountListComponent implements OnInit {
  page_title="ACCOUNT LISTS"
  ACCOUNTSAMP:AccountMain[]=[] // initialize account data
  newComponent: AccountMain = // initialize new account object
    { 
      id: 0,
      fname:'',
      lname:'',
      email:'',
      mobile:'',
      gender:'',
      marital:'',
      dateb:'',
      imgPath: '', 
    };
  
  accountForm: FormGroup;
  @Input() account?: AccountMain;
  selectedaccount?:AccountMain;
  
  // constructor to inject dependencies
  constructor(private route: ActivatedRoute, private location:Location, private router: Router, private accountService: AccountService, private formBuilder: FormBuilder) {
    this.accountForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  ngOnInit(): void { // lifecycle hook to execute code on component initialization
    this.ACCOUNTSAMP = this.accountService.getACCOUNTSAMPS(); // get account data from the service
  }

  viewAccount(id: number): void { // method to navigate to account details page
    this.router.navigate(['account-details', id]);
  }

  deleteComponent(id: number): void { // method to delete account
    const confirmation = confirm('Are you sure you want to delete this account?'); // confirmation dialog
    if (confirmation) { // if user confirms deletion
      this.accountService.deleteComponentItem(id); // delete account from service
      this.ACCOUNTSAMP = this.accountService.getACCOUNTSAMPS(); // update account data
    }
  }

/*
  addComponent(): void { // method to add new account
    this.accountService.addComponent(this.newComponent); // add account to service
    this.newComponent = { 
      id: 0,
      fname:'',
      lname:'',
      email:'',
      mobile:'',
      gender:'',
      marital:'',
      dateb:'',
      imgPath: '.jpg, .jpeg, .png',  
    };
    this.ACCOUNTSAMP = this.accountService.getACCOUNTSAMPS();
  } 
}
*/

addComponent(): void { // method to add new account
  const name = this.accountForm.get('name')?.value;

  if (name && name.trim() !== '') {
    const newComponent: AccountMain = {
      id: this.ACCOUNTSAMP.length + 1,
      fname: name,
      lname:'',
      email:'',
      mobile:'',
      gender:'',
      marital:'',
      dateb:'',
    };

    this.ACCOUNTSAMP.push(newComponent);
    this.clearForm();
  }
}

clearForm(): void {
  this.accountForm.reset();
}
}

/* unused code */
  /*
    constructor(
    private service: AccountService,
    private location:Location,
    private route: ActivatedRoute,
    private router: Router){
    }  
    ngOnInit() : void {
      this.accounts=ACCOUNTSAMP;
    }
    
    goBack():void{
      this.location.back();
    }
    save(): void {
      if(this.account){
        this.accountService.updateAccountMain(this.account)
        .subscribe(() =>this.goBack());
      }
    }
    getAccount() {
      this.service.getAccounts().
      subscribe(accounts=>this.accounts=accounts);
        }
        add(email:string):void{
          email=email.trim();
          if(!email){return;}
          this.service.addAccountMain({ email } as unknown as AccountMain)
          .subscribe(account=>{
            this.accounts.push(account);
          });
        }
        delete(account:AccountMain): void{
          this.confirmDelete();
          this.accounts=this.accounts.filter(i=>i!==account);
          this.service.deleteAccountMain(account.id).subscribe();
        }
        confirmDelete(){
          alert('Are you sure you want to delete this Item?');
        }}
      */