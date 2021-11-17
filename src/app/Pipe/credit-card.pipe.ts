import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard'
})
export class CreditCardPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let number=""
    if(value.length !==16)return value;
    for(let i =0; i<16; i=i+4){
    number +=value.slice(i,i+4);
    if(i!=12) number+="-";     
    }
    
    
    return number;
  }

}
