
/**
 * Created by ObadaDarwish on 09/04/2017.
 */
import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {MissingComponent} from './missing/missing.component';
import {LandingComponent} from './landing/landing.component';
import {PorgramsComponent} from './programs/porgrams.component';
import {ContentComponent} from './programs/content/content.component';
import {IncludesComponent} from './programs/includes/includes.component';


const MainRoute: Routes = [
  {path: '', component:LandingComponent},
  {path: 'programs/:id', component:PorgramsComponent,children:[
    {path: '', redirectTo: 'makkah', pathMatch: 'full'},
    {path: 'makkah', component: ContentComponent},
    {path: 'madinah', component: IncludesComponent},
  ]},
    /* Missing */
    {path: '**', redirectTo: '404', pathMatch: 'full'},
    {path: '404', component: MissingComponent},
];
export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(MainRoute);
