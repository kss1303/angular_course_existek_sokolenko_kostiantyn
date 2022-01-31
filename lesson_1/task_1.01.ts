type userID = [string, number];
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

interface TeacherI extends StudentI {
    workExp: number;
    work(): string;
}

interface CommonMethods {
    get age(): number | string;
    get ID(): string;
}

interface UserDTO extends UserI {
    id: userID;
}

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
    private id: userID;

    constructor(options: UserDTO) {
        this.firstName = options.firstName;
        this.lastName = options.lastName;
        this.dateOfBirth = options.dateOfBirth;
        this.id = options.id;
    }

    get age(): number | string {
        if (this.dateOfBirth) {
            let currentDate: number = new Date(Date.now()).getFullYear();
            return currentDate - this.dateOfBirth.getFullYear();
        } else {
            return 'no date of birth';
        }
    }

    get ID(): string {
        return this.id.join('');
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
            id: options.id,
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

class Teacher extends User implements TeacherI {
    position: Position;
    department: Departments;
    courses: string[];
    workExp: number;
    constructor(options: TeacherDTO, courses: string[]) {
        super({
            firstName: options.firstName,
            lastName: options.lastName,
            dateOfBirth: options.dateOfBirth,
            id: options.id,
        });
        this.position = options.position;
        this.department = options.department;
        this.courses = courses;
        this.workExp = options.workExp;
    }
    work(): string {
        let str: string = `In my position of ${this.position}, i'm have been working for more than ${this.workExp} years`;
        return str;
    }
}

let sokolUser: User = new User({
    firstName: 'Kostiantyn',
    lastName: 'Sokolenko',
    dateOfBirth: new Date(1996, 2, 13),
    id: ['UA', 1303],
});

console.log(sokolUser);
// [LOG]: User: {
//   "firstName": "Kostiantyn",
//   "lastName": "Sokolenko",
//   "dateOfBirth": "1996-03-12T22:00:00.000Z",
//   "id": [
//     "UA",
//     1303
//   ]
// }

//sokolUser.dateOfBirth = new Date(1000, 10, 10)
//Cannot assign to 'dateOfBirth' because it is a read-only property.

console.log(sokolUser.age); // 26
console.log(sokolUser.ID); // "UA1303"

let sokolStudent: Student = new Student(
    {
        firstName: 'Kostiantyn',
        lastName: 'Sokolenko',
        dateOfBirth: new Date(1996, 2, 13),
        id: ['UA', 1303],
        position: Position.Student,
        department: 'Existek',
    },
    Courses.slice(0, 3)
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
//   "position": "Student",
//   "department": "Existek",
//   "courses": [
//     "Angular",
//     "JavaScript",
//     "TypeScript"
//   ]
// }

console.log(sokolStudent.study()); // "I'm intereseted in: Angular, JavaScript, TypeScript"

let sokolTeacher: Teacher = new Teacher(
    {
        firstName: 'Kostiantyn',
        lastName: 'Sokolenko',
        dateOfBirth: new Date(1996, 2, 13),
        id: ['UA', 1303],
        position: Position.Assistant,
        department: 'Faculty of Civil Engineering',
        workExp: 2,
    },
    Courses.slice(3, 5)
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
//   "position": "Assistant",
//   "department": "Faculty of Civil Engineering",
//   "courses": [
//     "Finite Element Method",
//     "Structure Mechanics"
//   ],
//   "workExp": 2
// }

console.log(sokolTeacher.work()); // "In my position of Assistant, i'm have been working for more than 2 years"

interface GroupI<T> {
    addStudent(o: T): void;
    removeStudent(o: T): void;
}

class Group<T> implements GroupI<T> {
    students: T[] = [];
    addStudent(o: T): void {
        this.students.push(o);
    }
    removeStudent(o: T): void {
        let index = this.students.indexOf(o);
        if (index > -1) {
            this.students.splice(index, 1);
        }
    }
}

let allStudents: Group<Student> = new Group<Student>();
allStudents.addStudent(sokolStudent);
console.log(allStudents);
// [LOG]: Group: {
//   "students": [
//     {
//       "firstName": "Kostiantyn",
//       "lastName": "Sokolenko",
//       "dateOfBirth": "1996-03-12T22:00:00.000Z",
//       "id": [
//         "UA",
//         1303
//       ],
//       "position": "Student",
//       "department": "Existek",
//       "courses": [
//         "Angular",
//         "JavaScript",
//         "TypeScript"
//       ]
//     }
//   ]
// }
allStudents.removeStudent(sokolStudent);
console.log(allStudents);
// [LOG]: Group: {
//   "students": []
// }
