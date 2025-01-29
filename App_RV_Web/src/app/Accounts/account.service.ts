import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError,tap } from "rxjs/operators";
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { MessageService } from './message.service';
import { AccountMain } from "./account";
import { ACCOUNTSAMP } from "./accounts";
import { AlbumMain } from "../albums/album";

@Injectable({
    providedIn: 'root'
})

export class AccountService {
  messageService: any;


  getAlbums() {
    throw new Error('Method not implemented.');
  }
  addAlbumMain(arg0: AccountMain) {
    throw new Error('Method not implemented.');
  }
    private accountsUrl='api/accounts';

httpOptions={
    headers: new HttpHeaders({'Content-Type':'application/json'})
};

ACCOUNTSAMP:AccountMain[]=[
  {
    id: 1,
    fname:'Kile',
    lname:'Avera',
    email:'Kile@gmail.com',
    mobile:'094631878316',
    gender:'Female',
    marital:'Married',
    dateb:'11/19/1985',
    imgPath: 'assets/account1.jpg',
},
{
    id: 2,
    fname:'Renatz',
    lname:'Bigboy',
    email:'Renatz@gmail.com',
    mobile:'094621471316',
    gender:'Male',
    marital:'Single',
    dateb:'01/19/2003',
    imgPath: 'assets/account2.jpg',
},
{
    id: 3,
    fname:'Chris',
    lname:'Ganda',
    email:'ChrisGanda@gmail.com',
    mobile:'094631878316',
    gender:'Female',
    marital:'Single',
    dateb:'08/30/2003',
    imgPath: 'assets/account3.JPG',
},
{
    id: 4,
    fname:'Jan',
    lname:'Leigh',
    email:'Lei@gmail.com',
    mobile:'094631878316',
    gender:'Male',
    marital:'Single',
    dateb:'01/1/1985',
    imgPath: 'assets/account4.jpg',
},
{
    id: 5,
    fname:'Chrysa',
    lname:'Gali',
    email:'chrysa@gmail.com',
    mobile:'094631878316',
    gender:'Female',
    marital:'Married',
    dateb:'04/02/1995',
    imgPath: 'assets/account5.jpg',
},
{
    id: 6,
    fname:'Angge',
    lname:'Pangilinan',
    email:'Angge@gmail.com',
    mobile:'094631878316',
    gender:'Female',
    marital:'Single',
    dateb:'04/02/1995',
    imgPath: 'assets/account6.jpg',
},
{
    id: 7,
    fname:'Zeus',
    lname:'Laureta',
    email:'zeus@gmail.com',
    mobile:'094631878316',
    gender:'Male',
    marital:'Married',
    dateb:'04/02/1995',
    imgPath: 'assets/account7.jpg',
},
{
    id: 8,
    fname:'Megs',
    lname:'Vlas',
    email:'Megs@gmail.com',
    mobile:'094631878316',
    gender:'Female',
    marital:'Married',
    dateb:'04/02/1995',
    imgPath: 'assets/account8.jpg',
}
]

constructor() {}

getACCOUNTSAMPS(): AccountMain[] {
  return this.ACCOUNTSAMP;
}

getACCOUNTSAMP(id: number): AccountMain | undefined {
  return this.ACCOUNTSAMP.find(item => item.id === id);
}


updateACCOUNTSAMP(updatedAccount: AccountMain): void {
  const index = this.ACCOUNTSAMP.findIndex(item => item.id === updatedAccount.id);
  if (index !== -1) {
    this.ACCOUNTSAMP[index] = updatedAccount;
  }
}

deleteComponentItem(id: number): void {
  const index = this.ACCOUNTSAMP.findIndex(item => item.id === id);
  if (index !== -1) {
    this.ACCOUNTSAMP.splice(index, 1);
  }
}

addComponent(component: AccountMain): void {
  this.ACCOUNTSAMP.push(component);
}

/* unused code */
/*
    getAccounts(): Observable<AccountMain[]>{
        //const orders=of(ORDERSAMP);
        return this.http.get<AccountMain[]>(this.accountsUrl)
        .pipe(
          tap(_=>this.log('Retrieved Orders')),
          catchError(this.handleError<AccountMain[]>('getOrders',[])));
        }
        private handleError<T>(operation = 'operation',result?:T){
          return (error:any):Observable<T>=>{
            console.error(error);
            this.log(`${operation}failed:${error.message}`);
            return of (result as T);
          }
        }
    
    getAccountMain(id:number): Observable<AccountMain>{
     const url=`${this.accountsUrl}/${id}`;
      return this.http.get<AccountMain>(url)
      .pipe(
        tap(_=>this.log(`fetched account id=${id}`)),
        catchError(this.handleError<AccountMain>(`getAccountMain id=${id}`))
      );
    }
    updateAccountMain(account: AccountMain):Observable<any> {
      return this.http.put(this.accountsUrl,account, this.httpOptions).pipe(
        tap(_=>this.log(`updated account id=${account.id}`)),
        catchError(this.handleError<any>('updateAccountMain'))
      )
    }
      addAccountMain(email:AccountMain):Observable<AccountMain>{
        return this.http.post<AccountMain>(this.accountsUrl, email,this.httpOptions).pipe(
          tap((newAccountMain:AccountMain)=>this.log(`added account w/ id=${newAccountMain.id}`)),
          catchError(this.handleError<AccountMain>('addAccountMain'))
        );
      }
    deleteAccountMain(id:number):Observable<AccountMain>{
      const url = `${this.accountsUrl}/${id}`;
      return this.http.delete<AccountMain>(url,this.httpOptions).pipe(
        tap(_=>this.log(`deleted account id=${id}`)),
        catchError(this.handleError<AccountMain>('deleteHero'))
      )
    }
*/

private log(message: string) {
    this.messageService.add(`AccountService:${message}`);
  }/*
  constructor(
    private http:HttpClient,
    private messageService:MessageService,
  ) { }

    } */
}