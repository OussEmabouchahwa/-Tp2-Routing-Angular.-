import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AutreComponent } from './autre/autre.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfilComponent } from './profil/profil.component';
export const routes: Routes = [
{ path: '', component: AccueilComponent },
{ path: 'autre/:id', component: AutreComponent },
{ path: 'profil', component: ProfilComponent },
{ path: '**', component: NotFoundComponent },
];