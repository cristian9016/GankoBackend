import { Routes } from '@angular/router';
import { SelectBovineComponent } from '../core/pages/select-bovine/select-bovine.component';
import { SelectGroupComponent } from '../core/pages/select-group/select-group.component';
import { SelectedBovinesComponent } from '../core/pages/selected-bovines/selected-bovines.component';
import { AddVaccinesComponent } from './add-vaccines/add-vaccines.component';
import { ListVaccinesComponent } from './list-vaccines/list-vaccines.component';
import { ReApplyVaccinesComponent } from './re-apply-vaccines/re-apply-vaccines.component';
import { VaccinesComponent } from './vaccines.component';

export const vaccinesRoutes: Routes = [
    {
        path: 'vacunas', component: VaccinesComponent, children: [
            { path: '', component: ListVaccinesComponent },
            { path: 'agregar', component: AddVaccinesComponent },
            { path: 'agregar/editar', component: SelectedBovinesComponent },
            { path: ':id/aplicar/editar', component: SelectedBovinesComponent },
            { path: ':id/aplicar', component: ReApplyVaccinesComponent },
            { path: 'grupos', component: SelectGroupComponent },
            { path: 'bovinos', component: SelectBovineComponent },
            { path: ':id', component: SelectedBovinesComponent }
        ]
    }
];
