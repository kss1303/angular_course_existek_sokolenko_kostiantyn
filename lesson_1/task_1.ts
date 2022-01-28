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

interface UserI {
    firstName: string;
    lastName: string;
    readonly dateOfBirth: userDate;
    get ID(): string;
}

interface StudentI extends UserI {
    courses: string[];
    department: Departments;
}

interface TeacherI extends StudentI {
    workExp: number;
    position: Position;
    work(): string;
}

interface StudentOptionsI {
    firstName: string;
    lastName: string;
    dateOfBirth: userDate;
    id: userID;
    department: Departments;
}

interface TeacherOptionsI extends StudentOptionsI {
    workExp: number;
    position: Position;
}

class Student implements StudentI {
    firstName: string;
    lastName: string;
    readonly dateOfBirth: userDate;
    private id: userID;
    courses: string[];
    department: Departments;
    constructor(o: StudentOptionsI, ...courses: string[]) {
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

class Teacher extends Student implements TeacherI {
    workExp: number;
    position: Position;

    constructor(o: TeacherOptionsI, ...courses: string[]) {
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
        return this.work();
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
console.log(Teacher.teaches(sokolTeacher));
