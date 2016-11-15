import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: 'home', loadChildren: './views/home/home.module#HomeModule'},
    {path: 'about', loadChildren: './views/about/about.module#AboutModule'},
    {path: 'material-examples', loadChildren: './views/material-examples/material-examples.module#MaterialExamplesModule'},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
];

export const routing = RouterModule.forRoot(routes);
