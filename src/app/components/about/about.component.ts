
import { Component } from '@angular/core';


@Component ({
    selector: 'app-about',
    templateUrl: './about.component.html'
})
export class AboutComponent {
    mostrar: true;
    frase: any = {
        mensaje: 'un gran poder requiere de una gran responsabilidad',
        autor:'ben parker'

    };
    personajes: string[] = ['SpiderMan', 'Venom', 'Dr. Octopus']

}