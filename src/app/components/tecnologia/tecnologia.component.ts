import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.css']
})
export class TecnologiaComponent implements OnInit {
   @Input() item:any = {}
  //  @Input() index: number;
  //  @Output() heroeSeleccionado: EventEmitter<number>
   constructor ( private router: Router ) {
      // this.heroeSeleccionado = new EventEmitter()
  }

  ngOnInit() {
  }



}
