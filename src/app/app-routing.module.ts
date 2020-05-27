import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { OdontologiaComponent } from './components/odontologia/odontologia.component';

const routes: Routes = [{path:'odontologia', component: OdontologiaComponent}]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}