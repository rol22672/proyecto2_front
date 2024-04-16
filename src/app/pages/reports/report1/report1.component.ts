import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { RestDishService } from '../../../services/restDish/rest-dish.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-report1',
  
  templateUrl: './report1.component.html',
  styleUrls: ['./report1.component.scss']
})
export class Report1Component implements OnInit {
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  public dishes:[];
  constructor( private restDish:RestDishService, private notification:NotificationsService) { }

  ngOnInit(): void {
  }

  generate(){
    const startDate = this.range.value.start;
    const startFormatted = moment(startDate).format('YYYY-MM-DD');
    console.log(startFormatted);

    const endDate = this.range.value.end;
    const endFormatted = moment(endDate).format('YYYY-MM-DD');
    console.log(endFormatted);
    
    let dates = {
      "datestart":startFormatted,
      "dateend":endFormatted
    }

    this.restDish.getreport1(dates).subscribe((res:any)=>{
      if(res.dish){
        this.dishes = res.dish;
        console.log(this.dishes)
      }else{
        this.dishes=[];
      }
    }, error =>{
      this.restDish.handleErrors(error);
    })

  }


    

}
