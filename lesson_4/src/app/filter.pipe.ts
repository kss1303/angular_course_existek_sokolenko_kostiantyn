import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(users: any, searchValue: string, description: string): any {
    if (users.length === 0 || searchValue === 'All list') {
      return users;
    }
    console.log('filter - ', description);
    switch (description) {
      case 'country':
        return users.filter(
          (user: any) => user.location.country === searchValue
        );
      case 'age-descending':
        return users.sort((a: any, b: any) => b.dob.age - a.dob.age);
      case 'age-ascending':
        return users.sort((a: any, b: any) => a.dob.age - b.dob.age);
      case 'age-more-than':
        return users.filter((user: any) => user.dob.age > searchValue);
      case 'age-less-than':
        return users.filter((user: any) => user.dob.age < searchValue);
      case 'ID-is-null':
        return users.filter(
          (user: any) => user.id.value === null || user.id.name === ''
        );
      case 'latitude':
        return users.sort(
          (a: any, b: any) =>
            a.location.coordinates[description] -
            b.location.coordinates[description]
        );
      case 'longitude':
        return users.sort(
          (a: any, b: any) =>
            a.location.coordinates[description] -
            b.location.coordinates[description]
        );
      case 'search-by-id':
        return users.filter((user: any) => user.fullId.includes(searchValue));
    }
  }
}
