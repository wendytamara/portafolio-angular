import { Component, OnInit } from '@angular/core';
import { DataService, Contacto } from '../../servicios/data.service'

@Component({
  selector: 'app-contactame',
  templateUrl: './contactame.component.html',
  styleUrls: ['./contactame.component.css']
})
export class ContactameComponent implements OnInit {
  contactos: Contacto[] = []
  constructor( private _dataSerive: DataService ) { }

  ngOnInit() {
    this.contactos = this._dataSerive.getContacto()
    console.log(this.contactos, 'this.contactos')
  }

}
