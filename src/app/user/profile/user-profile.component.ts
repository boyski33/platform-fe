import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { User } from '../model/user';
import { AuthService } from '../../auth/auth.service';
import { UserService } from '../services/user.service';
import { UtilService } from '../../general/services/util.service';

function validateDate(control: AbstractControl): { [key: string]: boolean } | null {

  const now = Date.now();

  if (new Date(now).getTime() < new Date(control.value).getTime()) {
    return { 'date': true };
  }

  return null;
}

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: [ './user-profile.component.scss' ]
})
export class UserProfileComponent implements OnInit {

  form: FormGroup;
  readonly genderList = [ 'Male', 'Female', 'Other' ];

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private userService: UserService,
              private utilService: UtilService) {
  }

  ngOnInit() {
    this.form = this.buildForm();
  }

  saveProfile() {
    this.utilService.openConfirmationDialog()
      .then(() => {
        this.updateProfile();
      })
      .catch(() => {
        console.log('Closed with NO');
      });
  }

  private updateProfile() {
    const user = this.assembleUserObject();

    this.userService.addUser(user)
      .subscribe(() => {
        this.utilService.openSimpleDialog().componentInstance.text = 'Profile updated';
      }, () => {
        this.utilService.openSimpleDialog().componentInstance.text = 'Something went wrong...';
      });
  }

  private assembleUserObject(): User {
    return {
      email: this.authService.extractEmail(),
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      dateOfBirth: this.convertDateToTimestamp(this.dateOfBirth.value).toString(),
      gender: this.gender.value
    };
  }

  private buildForm() {
    return this.fb.group({
      firstName: [ '' ],
      lastName: [ '' ],
      dateOfBirth: [ '', [ Validators.required, validateDate ] ],
      gender: [ '', Validators.required ]
    });
  }

  private convertDateToTimestamp(date: string) {
    // Get the milliseconds of that date and convert to seconds
    return new Date(date).getTime() / 1000;
  }

  get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }

  get dateOfBirth() {
    return this.form.get('dateOfBirth');
  }

  get gender() {
    return this.form.get('gender');
  }
}
