import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-caratula',
  templateUrl: './caratula.component.html',
  styles: [],
})

export class CaratulaComponent implements OnInit {
  @ViewChild("element") element: ElementRef;

  constructor ( private renderer: Renderer2 ) {
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.writing('Wendy Tamara Quispe Quispe')
  }

  writing (str) {
    let arrFromStr = str.split('');
    let i = 0;
    let name = this.element.nativeElement
    let printStr = setInterval(function() {
      if (arrFromStr[i] === ' ') {
        name.innerHTML += arrFromStr[i] 
        name.innerHTML += arrFromStr[i + 1];
        i += 2;
      } else {
        name.innerHTML += arrFromStr[i];
        i++;
      }
      if (i === arrFromStr.length) {
        clearInterval(printStr);
        name.style.color = 'rgb(197, 129, 154)';
      }
    }, 200);
  };
}

