import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
selector: 'app-profil',
standalone: true,
templateUrl: './profil.component.html',

styleUrl: './profil.component.scss'
})
export class ProfilComponent {
nom!: string;
prenom!: string;
dateNaissance!: string;
image!: string;
constructor(private route: ActivatedRoute) {}

ngOnInit() {
this.route.queryParams.subscribe(params => {
this.nom = params['nom'];
this.prenom = params['prenom'];
this.dateNaissance = params['date'];
this.image = params['image'];
});
}
}