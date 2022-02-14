import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(users: any, searchValue: string, description: string): any {
    if (users.length === 0 || searchValue === 'All list') {
      return users;
    }
    if (description === 'country') {
      let filtredArray = users.filter(
        (user: any) => user.location.country === searchValue
      );
      console.log(filtredArray);
      return filtredArray;
    }

    if (description === 'age-descending') {
      let filtredArray = users.sort((a: any, b: any) => b.dob.age - a.dob.age);
      console.log(filtredArray);
      return filtredArray;
    }

    if (description === 'age-ascending') {
      let filtredArray = users.sort((a: any, b: any) => a.dob.age - b.dob.age);
      console.log(filtredArray);
      return filtredArray;
    }

    if (description === 'age-more-than') {
      console.log('Age', searchValue);
      let filtredArray = users.filter(
        (user: any) => user.dob.age > searchValue
      );
      console.log('Age', filtredArray);
      return filtredArray;
    }

    if (description === 'age-less-than') {
      console.log('Age', searchValue);
      let filtredArray = users.filter(
        (user: any) => user.dob.age < searchValue
      );
      console.log('Age', filtredArray);
      return filtredArray;
    }

    if (description === 'ID') {
      console.log('ID is null and empty', searchValue);
      let filtredArray = users.filter(
        (user: any) => user.id.value === null || user.id.name === ''
      );
      console.log('ID', filtredArray);
      return filtredArray;
    }
  }
}
