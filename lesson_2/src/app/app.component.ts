import { Component } from '@angular/core';
// import { KeyValue } from '@angular/common';

type userDate = Date | undefined;
type Departments = 'Existek' | 'Faculty of Civil Engineering';

enum Position {
  FrontendTechLead = 'Frontend Tech Lead',
  Assistant = 'Assistant',
  PostgraduateStudent = 'Postgraduate student',
  Student = 'Student',
}

let Courses: string[] = [
  'Angular',
  'JavaScript',
  'TypeScript',
  'Finite Element Method',
  'Structure Mechanics',
];

interface UserI {
  firstName: string;
  lastName: string;
  readonly dateOfBirth?: userDate;
}

interface StudentI extends UserI {
  position: Position;
  department: Departments;
  courses: string[];
  study?(): string;
}

interface CommonMethods {
  get age(): number | string;
  get ID(): string;
}

interface UserDTO extends UserI {}

interface StudentDTO extends UserDTO {
  position: Position;
  department: Departments;
}

interface TeacherDTO extends StudentDTO {
  workExp: number;
  position: Position;
}

class User implements UserI, CommonMethods {
  firstName: string;
  lastName: string;
  readonly dateOfBirth?: userDate;
  private id: number;
  private static countId = 0;
  constructor(options: UserDTO) {
    this.firstName = options.firstName;
    this.lastName = options.lastName;
    this.dateOfBirth = options.dateOfBirth;
    this.id = ++User.countId;
  }

  get age(): number | string {
    if (this.dateOfBirth) {
      let today: Date = new Date(Date.now());
      let currentYear: number = today.getFullYear();
      let age: number = currentYear - this.dateOfBirth.getFullYear();
      let month: number = today.getMonth() - this.dateOfBirth.getMonth();
      if (
        month < 0 ||
        (month === 0 && today.getDate() < this.dateOfBirth.getDate())
      ) {
        age--;
      }
      return age;
    } else {
      return 'no date of birth';
    }
  }

  get ID(): string {
    let stringID = this.id.toString();
    return stringID.padStart(4, '0');
  }
}

class Student extends User implements StudentI {
  position: Position;
  department: Departments;
  courses: string[];
  constructor(options: StudentDTO, courses: string[]) {
    super({
      firstName: options.firstName,
      lastName: options.lastName,
      dateOfBirth: options.dateOfBirth,
    });
    this.position = options.position;
    this.department = options.department;
    this.courses = courses;
  }

  study(): string {
    let str: string = `I'm intereseted in: `;
    str += this.courses.join(', ');
    return str;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tableCaption: string = 'GROUP №1';

  sokolStudent: Student = new Student(
    {
      firstName: 'Kostiantyn',
      lastName: 'Sokolenko',
      dateOfBirth: new Date(1996, 2, 13),
      position: Position.Assistant,
      department: 'Faculty of Civil Engineering',
    },
    Courses.slice(0, 3)
  );

  ivanStudent: Student = new Student(
    {
      firstName: 'Ivan',
      lastName: 'Petrov',
      dateOfBirth: new Date(1989, 5, 27),
      position: Position.PostgraduateStudent,
      department: 'Existek',
    },
    [Courses[2], Courses[4]]
  );

  petrStudent: Student = new Student(
    {
      firstName: 'Petr',
      lastName: 'Ivanov',
      dateOfBirth: new Date(1993, 9, 7),
      position: Position.Student,
      department: 'Existek',
    },
    [Courses[1], Courses[3]]
  );

  boberStudent: Student = new Student(
    {
      firstName: 'Bober',
      lastName: 'Bobrov',
      dateOfBirth: undefined,
      position: Position.Student,
      department: 'Existek',
    },
    ['Forest Science']
  );

  students: Student[] = [
    this.sokolStudent,
    this.ivanStudent,
    this.petrStudent,
    this.boberStudent,
  ];

  selectedName: string = '';
  selectedLastName: string = '';
  selectedBday: string | undefined = undefined;

  courses: string[] = Courses;
  selectedCourse: string[] = [];

  positions: string[] = Object.values(Position);
  selectedPosition: string = '';

  departments: string[] = ['Existek', 'Faculty of Civil Engineering'];
  selectedDepartment: string = '';

  condition: boolean = false;

  handle(o: any, arr: any) {
    console.log(o, arr);
    let student: Student = new Student(
      {
        firstName: o.firstName,
        lastName: o.lastName,
        dateOfBirth:
          o.dateOfBirth != undefined ? new Date(o.dateOfBirth) : undefined,
        position: o.position,
        department: o.department,
      },
      arr
    );
    if (o.firstName && o.lastName) {
      this.students.push(student);
    } else {
      alert('fill the form!');
    }
  }
  deleteLast(): void {
    this.students.pop();
  }
  getStudentsCount(): number {
    return this.students.length;
  }
  hideControls: boolean = true;

  toggle() {
    this.hideControls = !this.hideControls;
  }
}
