import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes: string[] =['Spiderman','Iroman','Hulk','Thor','Capitán América']
  heroeBorrado:string|undefined ="";
  BorrarHeroe():void
  {
     console.log('Borrando');
     this.heroeBorrado =this.heroes.shift()||'';
     console.log(this.heroeBorrado);
  }

}


