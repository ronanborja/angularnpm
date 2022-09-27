import { Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { NxRonan1205xyLibService } from './nx-ronan1205xy-lib.service';

@Component({
  selector: 'nx-nx-ronan1205xy-lib',
  template: `
    <img *ngIf="postUrl$ | async as src" [src]="src"/>
    
  `,
  styles: [
  ]
})
export class NxRonan1205xyLibComponent implements OnInit {
 

  constructor(private service:NxRonan1205xyLibService) { }

  @Input() id:number | any
  
  postUrl$:Observable<string>|any

  ngOnInit(): void {

    this.postUrl$ = this.service.getShow(this.id ?? 0).pipe(
      map((show:any) => show.image.medium)
    )
    
  }

}
