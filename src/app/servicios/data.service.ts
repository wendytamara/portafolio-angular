
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  private proyectos:Proyecto[] = [
        {
          nombre: "SpotyApp",
          descripcion: "SpotiApp es una aplicación web de música online, en donde podrás escuchar los sencillos mas populares, posee un buscador que te permitirá buscar a tu artista favorito. Se desarrollo utilizando Angular y el Api de Spotify.",
          img: "https://user-images.githubusercontent.com/32303250/73552392-25100e80-4416-11ea-98f6-1cc4a97ff8de.png",
          tecnologias: [
            { codImg: "angular", title: "Angular 8" },
            { codImg: "spotyIcon", title: "Api de Spotify" },
            { codImg: "bootstrap", title: "Bootstrap 4" },
            { codImg: "jsSeis", title: "Ecmma Script 6" }
            ],
          informacion: [
            { name: "Código", href: "https://github.com/wendytamara/spotiApp", img: "github" },
            { name: "Demo", href: "https://wendytamara.github.io/spotiApp/#/search", img: "dark-eye"  }
          ]
        },
        {
          nombre: "Portafolio",
          descripcion: "Este portafolio es una página web se adapta a los distintos dispositivos móviles. Se realizó el diseño y posteriormente se implemento con angular 8, como framework.",
          img: "https://user-images.githubusercontent.com/32303250/73498091-45928700-438a-11ea-8660-6417b25bedc3.png",
          tecnologias: [
            { codImg: "angular", title: "Angular 8" },
            { codImg: "jsSeis", title: "Ecmma Script 6" },
            { codImg: "css", title: "CSS 3" },
            { codImg: "bootstrap", title: "Bootstrap 4" }
            ],        
            informacion: [
              { name: "Código", href: "https://github.com/wendytamara/portafolio-angular", img: "github" },
              { name: "Demo", href: "https://wendytamara.github.io/portafolio-angular/", img: "dark-eye"  }
            ]
        },
        {
          nombre: "Lyft",
          descripcion: "Lyft es una empresa que ofrece servicio de taxy exclusivamente a mujeres. Se realizo una pagina web adaptable tanto para desktop como para dispositivos móviles. La aplicación replica el registro de nuevos usuarios del sitio oficial.",
          img: "https://user-images.githubusercontent.com/32303250/73545024-6f8a8e80-4408-11ea-97b6-dc95d9f6076f.png",
          tecnologias: [
            { codImg: "js", title: "Vanilla Js" },
            { codImg: "jquery", title: "Jquery" },
            { codImg: "html", title: "Html5" },
            { codImg: "materialize", title: "Materialize" }
            ],         
          informacion: [
            { name: "Código", href: "https://github.com/wendytamara/lyft-materialize", img: "github" },
            { name: "Demo", href: "https://wendytamara.github.io/lyft-materialize/index.html", img: "dark-eye"  }
          ],
        },
        {
          nombre: "Lab-Car",
          descripcion: "Lab-Car es una aplicación que ofrece el servicio de taxis, la plataforma te permite: registrarte como nuevo usuario, conocer tu ubicación actual, calcular el trayecto, asi como la ruta que tomara el taxi para llegar a tu destino",
          img: "https://user-images.githubusercontent.com/32303250/73554231-5b9b5880-4419-11ea-9e78-cff76a2019fc.png",
          tecnologias: [
            { codImg: "js", title: "Vanilla Js" },
            { codImg: "html", title: "Html5" },
            { codImg: "bootstrap", title: "Bootstrap 4" },
            { codImg: "google-maps", title: "Api-google-maps" }
            ],
          informacion: [
            { name: "Código", href: "https://github.com/wendytamara/lab-car-boilerplate", img: "github" },
            { name: "Demo", href: "https://wendytamara.github.io/lab-car-boilerplate/", img: "dark-eye"  }
          ]
        },

  ];

  private contactame: Contacto[] =  [
    { name: "wendytamara811@gmail.com", img: "correo", href: "https://gmail.com/" },
    { name: "conoce todos mis proyectos", img: "github", href:"https://github.com/wendytamara"},
    { name: "visita mi perfil de linkedin", img: "linkedin", href: "https://www.linkedin.com/in/wendytamaraquispe/" }
  ]

  constructor () {
    console.log("servicio listo para usarse")
  }
  getProyectos () {
    return this.proyectos
  }

  getContacto () {
    return this.contactame
  }
}

export interface Proyecto {
  nombre: string;
  descripcion: string;
  img: string;
  tecnologias: object[],
  informacion: object[],
}

export interface Contacto {
  name: string;
  img: string;
  href: string;
}