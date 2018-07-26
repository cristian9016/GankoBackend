import { Component } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Vacuna } from '../../shared/models/vaccine.model';
import { BaseListComponent } from '../../util/base-list-component';
import { VaccinesService } from '../services/vaccines.service';

@Component({
  selector: 'app-list-vaccines',
  templateUrl: './list-vaccines.component.html',
  styleUrls: ['./list-vaccines.component.scss']
})
export class ListVaccinesComponent extends BaseListComponent<Vacuna> {

  constructor(service: VaccinesService, snack: MatSnackBar, dialog: MatDialog,
    router: Router, route: ActivatedRoute) {
    super(service, dialog, router, route, snack);
  }

}
