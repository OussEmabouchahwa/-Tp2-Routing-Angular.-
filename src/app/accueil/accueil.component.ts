import { Component } from '@angular/core';
import  {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {
nom !: string;
prenom !: string;
dateNaissance !: string;
image !: string;
constructor(private router: Router) {}
afficherProfil() {
  this.router.navigate(['/profil'], 
    { queryParams: {
       nom: this.nom,
        prenom: this.prenom,
         dateNaissance: this.dateNaissance,
          image: this.image
         } });
}}
