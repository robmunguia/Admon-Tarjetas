import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const Rutas: Routes = [
    {
        path: '',
        component: PagesComponent,
        // canActivate: [ AuthGuard ],
        children: [
             { path: 'home', component: DashboardComponent },
        //     { path: 'requis', component: RequisicionesComponent },
        //     { path: 'requis/add', component: RequisicionComponent },
        //     { path: 'users', component: UsuariosComponent },
        //     { path: 'users/:id', component: NuevoUsuarioComponent },
        //     { path: 'sucursales', component: SucursalesComponent },
        //     { path: 'nomina', component: TipoNominaComponent },
        //     { path: 'envio/:id', component: EnvioComponent },
        //     { path: 'proceso', component: ProcRequisicionComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot( Rutas, { useHash: true } )
    ],
    exports: [
        RouterModule
    ]
})
export class PagesRoutingModule { }
