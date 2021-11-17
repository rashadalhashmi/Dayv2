import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nationalID'
})
export class NationalIDPipe implements PipeTransform {

  transform(value: string, arg:string):unknown{
    let firstTwoDigit = value[0]=="2"?"19":"20";


     switch(arg){
       case 'YY':    return  value.slice(1,3) ;
       case  'MM' : return value.slice(3,5) ;
       case  'DD' : return value.slice(5,7) ;
       case  'full' : return firstTwoDigit+value.slice(1,3)+"-"+value.slice(3,5 )+"-"+value.slice(5,7);

       

       default : return value ;

     }


  }

}
