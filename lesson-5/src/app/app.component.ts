import {
  Component,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  AsyncValidatorFn,
  FormArray,
  FormControl,
  FormGroup,
  NgForm,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  answers = [
    { type: 'yes', text: 'Yes' },
    { type: 'no', text: 'No' },
  ];

  form!: FormGroup;
  ngOnInit(): void {
    this.form = new FormGroup({
      user: new FormGroup(
        {
          username: new FormControl('usr', [
            Validators.required,
            Validators.maxLength(10),
            Validators.minLength(4),
            Validators.pattern('[a-zA-Z]*'),
          ]),
          birth_date: new FormControl('', [
            Validators.required,
            this.checkForAge,
          ]),
          age: new FormControl({ value: '', disabled: true }, [
            Validators.required,
            Validators.pattern('[0-9]{2}'),
          ]),
          email: new FormControl(
            'test@ukr.net',
            [Validators.required, Validators.email],
            this.checkForEmail(this.testEmails)
          ),
          pass: new FormControl('', [
            Validators.required,
            this.checkForLength.bind(this),
          ]),
        },
        [Validators.required]
      ),
      phones: new FormArray([
        new FormControl('380', [
          Validators.required,
          Validators.pattern('[0-9]{12}'),
        ]),
      ]),
      country: new FormControl('ua'),
      answer: new FormControl('no', [this.checkForAnswer]),
    });

    this.form?.get('user.birth_date')?.valueChanges.subscribe((value) => {
      const dateOfBirth = new Date(value);
      const today: Date = new Date(Date.now());
      const currentYear: number = today.getFullYear();
      let age: number = currentYear - dateOfBirth.getFullYear();
      const month: number = today.getMonth() - dateOfBirth.getMonth();
      if (
        month < 0 ||
        (month === 0 && today.getDate() < dateOfBirth.getDate())
      ) {
        age--;
      }
      this.form?.get('user.age')?.patchValue(age);
      // this.form?.get('user.age')?.setValue(age);
    });

    this.form.valueChanges.subscribe((value) => {
      this.values = value;
    });
  }

  values: any;
  onSubmit() {
    console.log('Submitted', this.form.status, this.form);
    while (this.getFormsControls.value.length > 1) {
      this.deletePhone();
    }
    this.getFormsControls.reset(['380']);
    this.form.reset();
  }
  get getFormsControls(): FormArray {
    return this.form.get('phones') as FormArray;
    // return this.form.controls['phones'] as FormArray;
  }

  addPhone() {
    // return (<FormArray>this.form.controls['phones']).push(
    //   new FormControl('380', [
    //     Validators.required,
    //     Validators.pattern('[0-9]{12}'),
    //   ])
    // );
    return this.getFormsControls.push(
      new FormControl('380', [
        Validators.required,
        Validators.pattern('[0-9]{12}'),
      ])
    );
  }

  deletePhone() {
    let length = this.getFormsControls.value.length;
    if (length > 1) {
      return this.getFormsControls.removeAt(length - 1);
    }
  }
  charsCount = 5;

  checkForLength(control: FormControl) {
    // console.log(control, 'ErrorLength');
    if (control.value.length <= this.charsCount) {
      return {
        lengthError: true,
      };
    } else {
      return null;
    }
    // obj {'errorCode': true} or null || undefined
  }

  checkForAge(control: AbstractControl) {
    const dateOfBirth = new Date(control.value);
    const today: Date = new Date(Date.now());
    const currentYear: number = today.getFullYear();
    let age: number = currentYear - dateOfBirth.getFullYear();
    const month: number = today.getMonth() - dateOfBirth.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < dateOfBirth.getDate())) {
      age--;
    }
    if (age < 18 || age > 100) {
      return {
        ageError: true,
      };
    } else {
      return null;
    }
    // obj {'errorCode': true} or null || undefined
  }

  checkForAnswer(control: AbstractControl) {
    // console.log(control, 'ErrorAnswer');
    if (control.value == 'no') {
      return {
        answerError: true,
      };
    } else {
      return null;
    }
    // obj {'errorCode': true} or null || undefined
  }
  testEmails: string[] = [
    'test@ukr.net',
    'gabga@gmail.com',
    'bober@derevo.net',
  ];
  checkForEmail(valuesList: string[]): AsyncValidatorFn {
    return (
      control: AbstractControl
    ):
      | Promise<ValidationErrors | null>
      | Observable<ValidationErrors | null> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (valuesList.indexOf(control.value) !== -1) {
            resolve({
              emailIsUsed: true,
            });
          } else {
            resolve(null);
          }
        }, 1500);
      });
    };
  }
}
