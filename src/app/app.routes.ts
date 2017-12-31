
/**
 * Created by ObadaDarwish on 09/04/2017.
 */
import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {MissingComponent} from './missing/missing.component';
import {LandingComponent} from './landing/landing.component';
import {customPorgramsComponent} from './custom-programs/custom-programs.component';
import {MakkahComponent} from './custom-programs/makkah/makkah.component';
import {MaddinahComponent} from './custom-programs/madinah/maddinah.component';
import {ManarProgramComponent} from './manar-program/manar-program.component';
import {ProgramProfileComponent} from './program-profile/program-profile.component';

const MainRoute: Routes = [
  {path: '', component:LandingComponent},
  {path: 'custom-programs/:id', component:customPorgramsComponent},
  {path:'manar-programs',component:ManarProgramComponent},
  {path:'manar-program/:code/:id',component:ProgramProfileComponent},
    /* Missing */
    {path: '**', redirectTo: '404', pathMatch: 'full'},
    {path: '404', component: MissingComponent},
];
export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(MainRoute);
