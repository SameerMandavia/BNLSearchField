import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchField',
})
export class SearchFieldPipe implements PipeTransform {
  transform(employeeList: any[], searchInput: string): any[] {
    if (searchInput == null) {
      return employeeList;
    }
    return employeeList.filter((employees) =>
      //employees.name.toLowerCase().includes(searchInput.toLowerCase())
      employees.name.toLowerCase().indexOf(searchInput.toLowerCase()) > -1)
    //);
    //employees.name.toLowerCase().indexOf(searchInput.toLowerCase()) > -1)
  }
}
