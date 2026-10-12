import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-autre',
  standalone: true,
  imports: [ ],
  templateUrl: './autre.component.html',
  styleUrl: './autre.component.scss'
})
export class AutreComponent {
id !: string;
private routeSub!: Subscription;
constructor(private route: ActivatedRoute) {}
ngOnInit() {
  this.routeSub = this.route.params.subscribe(params => {
  this.id = params['id'];
});
}
ngOnDestroy() {
this.routeSub.unsubscribe();
}
}
