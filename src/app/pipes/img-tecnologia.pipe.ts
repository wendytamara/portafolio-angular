import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgTecnologia'
})
export class ImgTecnologiaPipe implements PipeTransform {

  transform(item:string): string {
    let newItem = `assets/icons/${item}.png`
    return newItem;
  }
}
