import { Component, OnInit, Input } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { DataService, Proyecto } from '../../servicios/data.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styles: []
})
export class ProyectoComponent implements OnInit {
  @Input() proyecto:any = {}
  // proyecto:any = {};
  constructor(  private _dataService: DataService  ) { 
    // this.activatedRoute.params.subscribe(params =>  {
    //   console.log(params['id'], 'params[id]')
    //   this.heroe = this._heroesService.getHeroe(params['id'])
    // })
    // console.log(this.heroe)
  }

  ngOnInit() {
  }

}
