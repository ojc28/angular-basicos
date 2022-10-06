import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

export class ListadoComponent  {

 heroeBorrado:string='';
 heroes:string[] =['SpiderMan','IronMan','Hulk','Thor','Capitan América'];


 BorrarHeroe(){
 
  this.heroeBorrado= this.heroes.shift()||'';
 }

}
