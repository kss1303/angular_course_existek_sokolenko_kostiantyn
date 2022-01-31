// Домашнє завдання:
// Обрати довільну предметну область і у відповідності до неї створити кілька класів, інтерфейсів, що будуть описувати її
// При описі обовязково використати:
// - interface (включаючи наслідування)
// - class (включаючи реалізацію інтерфеса а також поля із різними модифікаторами доступу)
// - type
// - generic
// - enum
// - tuple (кортеж)
// - union types (поєднання типів)

type userID = [string, number];
type userDate = Date | undefined;
type Departments = 'Existek' | 'Faculty of Civil Engineering';
type Position = 'Frontend Tech Lead' | 'Assistant';

enum Courses {
    Angular,
    'Finite Element Method',
    'Structure Mechanics',
}

interface IUser {
    firstName: string;
    lastName: string;
    readonly dateOfBirth: userDate;
    get ID(): string;
}

interface IStudent extends IUser {
    courses: string[];
    department: Departments;
}

interface ITeacher extends IStudent {
    workExp: number;
    position: Position;
    work(): string;
}

interface IStudenOptions {
    firstName: string;
    lastName: string;
    dateOfBirth: userDate;
    id: userID;
    department: Departments;
}

interface ITeacherOptions extends IStudenOptions {
    workExp: number;
    position: Position;
}

class Student implements IStudent {
    firstName: string;
    lastName: string;
    readonly dateOfBirth: userDate;
    private id: userID;
    courses: string[];
    department: Departments;
    constructor(o: IStudenOptions, ...courses: string[]) {
        (this.firstName = o.firstName),
            (this.lastName = o.lastName),
            (this.dateOfBirth = o.dateOfBirth),
            (this.id = o.id),
            (this.courses = courses),
            (this.department = o.department);
    }
    get age(): number | string {
        if (this.dateOfBirth) {
            let currentDate: number = new Date(Date.now()).getFullYear();
            return currentDate - this.dateOfBirth.getFullYear();
        } else {
            return 'no date of birth';
        }
    }
    study(): string {
        let str: string = `I'm intereseted in: `;
        str += this.courses.join(' and ');
        return str;
    }
    get ID(): string {
        return this.id.join('');
    }
}

class Teacher extends Student implements ITeacher {
    workExp: number;
    position: Position;
    constructor(o: ITeacherOptions, ...courses: string[]) {
        super(
            {
                firstName: o.firstName,
                lastName: o.lastName,
                dateOfBirth: o.dateOfBirth,
                id: o.id,
                department: o.department,
            },
            ...courses
        );
        (this.workExp = o.workExp), (this.position = o.position);
    }
    work(): string {
        let str: string = `in my position of ${this.position}, i'm have been working for more than ${this.workExp} years`;
        return str;
    }
    override study(): string {
        return super.study();
        // return this.work()
    }
    static teaches<T extends Teacher>(teacher: T): string {
        let str: string = `${teacher.position} ${teacher.firstName} ${teacher.lastName} teaches the following courses: `;
        str += teacher.courses.join(' and ');
        return str;
    }
}

let sokolStudent: Student = new Student(
    {
        firstName: 'Kostiantyn',
        lastName: 'Sokolenko',
        dateOfBirth: new Date(1996, 2, 13),
        id: ['UA', 1303],
        department: 'Existek',
    },
    Courses[0],
    Courses[1],
    Courses[2]
);

console.log(sokolStudent);
// [LOG]: Student: {
//   "firstName": "Kostiantyn",
//   "lastName": "Sokolenko",
//   "dateOfBirth": "1996-03-12T22:00:00.000Z",
//   "id": [
//     "UA",
//     1303
//   ],
//   "courses": [
//     "Angular",
//     "Finite Element Method",
//     "Structure Mechanics"
//   ],
//   "department": "Existek"
// }
console.log(sokolStudent.age); // 26
console.log(sokolStudent.ID); // "UA1303"
console.log(sokolStudent.study()); // "I'm intereseted in: Angular and Finite Element Method and Structure Mechanics"
// console.log(sokolStudent.id) // Property 'id' is private and only accessible within class 'Student'.
// sokolStudent.dateOfBirth = new Date(1995, 2, 13) // Cannot assign to 'dateOfBirth' because it is a read-only property.

let sokolTeacher: Teacher = new Teacher(
    {
        firstName: 'Kostiantyn',
        lastName: 'Sokolenko',
        dateOfBirth: new Date(1996, 2, 13),
        id: ['UA', 1303],
        department: 'Faculty of Civil Engineering',
        workExp: 2,
        position: 'Assistant',
    },
    Courses[1],
    Courses[2]
);
console.log(sokolTeacher);
// [LOG]: Teacher: {
//   "firstName": "Kostiantyn",
//   "lastName": "Sokolenko",
//   "dateOfBirth": "1996-03-12T22:00:00.000Z",
//   "id": [
//     "UA",
//     1303
//   ],
//   "courses": [
//     "Finite Element Method",
//     "Structure Mechanics"
//   ],
//   "department": "Faculty of Civil Engineering",
//   "workExp": 2,
//   "position": "Assistant"
// }
console.log(sokolTeacher.study()); // "I'm intereseted in: Finite Element Method and Structure Mechanics"
console.log(sokolTeacher.work()); // "in my position of Assistant, i'm have been working for more than 2 years"
console.log(Teacher.teaches(sokolTeacher)); //  "Assistant Kostiantyn Sokolenko teaches the following courses: Finite Element Method and Structure Mechanics"
