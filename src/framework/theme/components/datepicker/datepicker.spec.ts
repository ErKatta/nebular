/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import {  Component, ViewChild } from '@angular/core';

import {  NbDatepickerDirective, NbDateTimePickerComponent } from '@nebular/theme';

import { NbDatepickerComponent, NbRangepickerComponent } from './datepicker.component';

@Component({
  selector: 'nb-datepicker-test',
  template: `
    <nb-layout>
      <nb-layout-column>
        <input [nbDatepicker]="datepicker">
        <nb-datepicker #datepicker></nb-datepicker>
      </nb-layout-column>
    </nb-layout>
  `,
})
export class NbDatepickerTestComponent {
  @ViewChild(NbDatepickerComponent,  {static: false}) datepicker: NbDatepickerComponent<Date>;
  @ViewChild(NbDatepickerDirective , {static: false}) datepickerDirective: NbDatepickerDirective<Date>;
}

@Component({
  selector: 'nb-rangepicker-test',
  template: `
    <nb-layout>
      <nb-layout-column>
        <input [nbDatepicker]="rangepicker">
        <nb-rangepicker #rangepicker></nb-rangepicker>
      </nb-layout-column>
    </nb-layout>
  `,
})
export class NbRangepickerTestComponent {
  @ViewChild(NbRangepickerComponent, {static: false}) rangepicker: NbRangepickerComponent<Date>;
  @ViewChild(NbDatepickerDirective,  {static: false}) datepickerDirective: NbDatepickerDirective<Date>;
}



@Component({
  selector: 'nb-date-timepicker-test',
  template: `
    <nb-layout>
      <nb-layout-column>
        <input [nbDatepicker]="rangepicker">
        <nb-date-timepicker #rangepicker></nb-date-timepicker>
      </nb-layout-column>
    </nb-layout>
  `,
})
export class NbDateTimepickerTestComponent {
  @ViewChild(NbDateTimePickerComponent , {static: false}) dateTimepicker: NbDateTimePickerComponent<Date>;
  @ViewChild(NbDatepickerDirective , {static: false}) datepickerDirective: NbDatepickerDirective<Date>;
}



