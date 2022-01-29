"use strict";
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
var Courses;
(function (Courses) {
    Courses[Courses["Angular"] = 0] = "Angular";
    Courses[Courses["Finite Element Method"] = 1] = "Finite Element Method";
    Courses[Courses["Structure Mechanics"] = 2] = "Structure Mechanics";
})(Courses || (Courses = {}));
class Student {
    constructor(o, ...courses) {
        (this.firstName = o.firstName),
            (this.lastName = o.lastName),
            (this.dateOfBirth = o.dateOfBirth),
            (this.id = o.id),
            (this.courses = courses),
            (this.department = o.department);
    }
    get age() {
        if (this.dateOfBirth) {
            let currentDate = new Date(Date.now()).getFullYear();
            return currentDate - this.dateOfBirth.getFullYear();
        }
        else {
            return 'no date of birth';
        }
    }
    study() {
        let str = `I'm intereseted in: `;
        str += this.courses.join(' and ');
        return str;
    }
    get ID() {
        return this.id.join('');
    }
}
class Teacher extends Student {
    constructor(o, ...courses) {
        super({
            firstName: o.firstName,
            lastName: o.lastName,
            dateOfBirth: o.dateOfBirth,
            id: o.id,
            department: o.department,
        }, ...courses);
        (this.workExp = o.workExp), (this.position = o.position);
    }
    work() {
        let str = `in my position of ${this.position}, i'm have been working for more than ${this.workExp} years`;
        return str;
    }
    study() {
        return this.work();
    }
    static teaches(teacher) {
        let str = `${teacher.position} ${teacher.firstName} ${teacher.lastName} teaches the following courses: `;
        str += teacher.courses.join(' and ');
        return str;
    }
}
let sokolStudent = new Student({
    firstName: 'Kostiantyn',
    lastName: 'Sokolenko',
    dateOfBirth: new Date(1996, 2, 13),
    id: ['UA', 1303],
    department: 'Existek',
}, Courses[0], Courses[1], Courses[2]);
console.log(sokolStudent);
let sokolTeacher = new Teacher({
    firstName: 'Kostiantyn',
    lastName: 'Sokolenko',
    dateOfBirth: new Date(1996, 2, 13),
    id: ['UA', 1303],
    department: 'Faculty of Civil Engineering',
    workExp: 2,
    position: 'Assistant',
}, Courses[1], Courses[2]);
console.log(sokolTeacher);
console.log(Teacher.teaches(sokolTeacher));
//# sourceMappingURL=task_1.js.map