import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {
  moyene:number=0;
  somme:number=0;
  nbr:number=0;
enfants=["hamza","hamza1","hamza2"];
  constructor() { }

  ngOnInit(): void {
  }
  compteAVG(note:number){
    console.log(note);
    
  this.somme+=note;
  this.nbr++;
  this.moyene=this.somme/this.nbr;
  }
}
