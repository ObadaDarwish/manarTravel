/**
 * Created by ObadaDarwish on 01/01/2018.
 */
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'iteration',
  pure: false
})

export class limitIteration implements PipeTransform {
  transform(value: any, number: number): any {
    let programs: Array<any>=[];
    for (let program = 0; program < number; program++) {
      programs.push(value[program]);
    }
    return programs;
  }
}
