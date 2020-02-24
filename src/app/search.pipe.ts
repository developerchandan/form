import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

transform(emp: object[], searchTerm: any, value: any): any {
  if (searchTerm== undefined){
    return emp;
  }
  else {
    if ('eno' === value) {
      return ( emp.filter(x => x['eno'].toString().indexOf(searchTerm) !== -1));
    }
    else if('salary' === value) {
      return ( emp.filter(x => x['salary'].toString().indexOf(searchTerm) !== -1));
    }
    else {
        return (emp.filter(x => ['name'].indexOf(searchTerm) !== -1));
    
    }
  }
}





//   transform(emp: object[], searchTerm: string): any
//    {
//    if (searchTerm == undefined) {
//      return emp;
//    }
  
//    return emp.filter(x => x [' name'].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
//   }

 }
