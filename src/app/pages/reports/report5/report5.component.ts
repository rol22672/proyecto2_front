import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestDishService } from '../../../services/restDish/rest-dish.service';
import { NotificationsService } from 'angular2-notifications';
import * as moment from 'moment';

@Component({
  selector: 'app-report5',
  templateUrl: './report5.component.html',
  styleUrls: ['./report5.component.scss']
})
export class Report5Component implements OnInit {

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

    this.restDish.getreport5(dates).subscribe((res:any)=>{
      if(res.horarios){
        this.dishes = res.horarios;
        console.log(this.dishes)
      }else{
        this.dishes=[];
      }
    }, error =>{
      this.restDish.handleErrors(error);
    })

  }
}
