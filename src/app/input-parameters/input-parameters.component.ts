import { Component, OnInit } from '@angular/core';
import {PrevalenceService} from '../services/prevalences.service';

@Component({
  selector: 'app-input-parameters',
  templateUrl: './input-parameters.component.html',
  styleUrls: ['./input-parameters.component.css']
})


export class InputParametersComponent
{

  amount: number = 0;
  prevalenceSelected2:number;

  Calc(){
    if( this.prevalenceSelected2 > 0)
    {
     this.amount=this.prevalenceSelected2;
    }
  }

  depression = [
  {
      "setting": "Primary care",
      "prevalence": 10
  },
  {
      "setting": "General population",
      "prevalence": 12
  },
  {
      "setting": "Perinatal care",
      "prevalence": 14
  },
  {
      "setting": "New fathers",
      "prevalence": 11
  },
  {
      "setting": "Cardiovascular disease",
      "prevalence": 13
  },
  {
      "setting": "Post heart-attack",
      "prevalence": 15
  },
  {
      "setting": "Cancer",
      "prevalence": 12
  },
  {
      "setting": "Diabetes",
      "prevalence": 20
  },
  {
      "setting": "Palliative care",
      "prevalence": 10
  }
]
}
