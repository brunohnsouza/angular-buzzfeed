import { Component } from '@angular/core';

import { data } from "../../../assets/data/data";
import { Data } from "../../../assets/data/dataModel";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css', './index.component.responsive.css']
})
export class IndexComponent {
  database: Data[] = data;
}
