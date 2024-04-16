import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotificationType, NotificationsService } from 'angular2-notifications';
import { CONNECTION } from '../global';
import { map } from 'rxjs/operators';
import { OPTIONS } from '../../models/ConfigNotification';

@Injectable({
  providedIn: 'root'
})
export class RestOrderService {

  public uri: string;
  public token: any;
  public user:any;
  
  public httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  public httpOptionsAuth = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    })
  }
  
  private extractData(res:Response){
    let body = res;
    return body || [] || {};
  }

  public getToken(){
    let token = localStorage.getItem("token");
    
    if(token != null || token != undefined){
      let tokenR = token.replace(/['"]+/g,'');
      this.token = "bearer "+tokenR;
    }else{
      this.token = null;
    }

    return this.token;
  }

  public getUser(){
    let user = JSON.parse(localStorage.getItem("user"));
    if(user != null || user != undefined){
      this.user = user;
    }else{
      this.user = null;
    }

    return this.user;
  }
  constructor(private http:HttpClient, private notification:NotificationsService) { 
    
    this.uri = CONNECTION.URI;
    this.token  = "";
  }



  get(){

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    });

    this.uri = CONNECTION.URI;
    return this.http.get(this.uri+"getAccount",{headers:headers})
    .pipe(map(this.extractData));
  }


  getById(id){

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    });

    this.uri = CONNECTION.URI;
    return this.http.get(this.uri+"getAccount/"+id,{headers:headers})
    .pipe(map(this.extractData));
  }


  getOrderDish(id){

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    });

    this.uri = CONNECTION.URI;
    return this.http.get(this.uri+"getOrderDish/"+id,{headers:headers})
    .pipe(map(this.extractData));
  }


  getOrderDrink(id){

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    });

    this.uri = CONNECTION.URI;
    return this.http.get(this.uri+"getOrderDrink/"+id,{headers:headers})
    .pipe(map(this.extractData));
  }



  open(account){

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    });

    let params = JSON.stringify(account);

    this.uri = CONNECTION.URI;
    return this.http.post(this.uri+"openAccount", params,{headers:headers})
    .pipe(map(this.extractData));
  }


  close(id){

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    });


    this.uri = CONNECTION.URI;
    return this.http.put(this.uri+"closeAccount/"+id, {},{headers:headers})
    .pipe(map(this.extractData));
  }


  saveOrderPlato(order){

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    });

    let params = JSON.stringify(order);

    this.uri = CONNECTION.URI;
    return this.http.post(this.uri+"saveOrderPlato", params,{headers:headers})
    .pipe(map(this.extractData));
  }


  saveOrderBebida(order){

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    });

    let params = JSON.stringify(order);

    this.uri = CONNECTION.URI;
    return this.http.post(this.uri+"saveOrderBebida", params,{headers:headers})
    .pipe(map(this.extractData));
  }


  







  public handleErrors(error: any) {
    console.log("error");
    if (error.status === 422) { // Errores de validación
      for (let key in error.error.errors) {
        //this.messageService.add({ severity: 'error', summary: 'Validation Error', detail: error.error.errors[key][0] });
        this.notification.create("Validation Error",error.error.errors[key][0],NotificationType.Error,  OPTIONS,"");
      }
    } else { // Otros errores HTTP
      //this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Server error occurred.' });
      this.notification.create("Error general","Server error occurred.",NotificationType.Error,  OPTIONS,"");
    }
  }
}
