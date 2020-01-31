import { Component, OnInit } from '@angular/core';
import { DataService, Proyecto } from '../../servicios/data.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
})

export class ProyectosComponent implements OnInit {
  proyectos:Proyecto[] = []
  constructor ( private _dataSerive: DataService ) {
  }

  ngOnInit () {
    this.proyectos = this._dataSerive.getProyectos();
    console.log(this.proyectos, 'this.proyectos')
  }
}
