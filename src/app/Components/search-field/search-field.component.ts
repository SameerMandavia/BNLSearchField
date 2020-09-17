import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css'],
})
export class SearchFieldComponent implements OnInit {
  public employeeList: any[];
  showDataList: boolean = false;
  searchForm: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.employeeList = [
      { name: 'Sameer Mandavia', salary: 15000 },
      { name: 'Samira Khan', salary: 15000 },
      { name: 'Sameera Shah', salary: 15000 },
      { name: 'Jay Shah', salary: 15000 },
      { name: 'Jui kadam', salary: 15000 },
      { name: 'Juliet Romeo', salary: 15000 },
      { name: 'Dhruv Phansalkar', salary: 15000 },
      { name: 'Dhuvesh Prajapati', salary: 15000 },
    ];

    this.searchForm = new FormGroup({
      searchField: new FormControl(),
    });

    console.log(this.searchForm);
  }

  /**
   * To display all content of drop-down to user.
   */
  openPanel() {
    this.showDataList = !this.showDataList;
  }

  /**
   * When user click outside of field than drop-down will be hidden using closeDropDown().
   */

  /**
   * To store user's selected value in textfield(searchField).
   * @param name
   */
  selectValue(name: any) {
    this.searchForm.patchValue({ searchField: name });
    this.showDataList = false;
  }

  /**
   * To pass field value to pipe class name to search Data.
   */
  toSearchValue(): any {
    return this.searchForm.value.searchField;
  }
}
