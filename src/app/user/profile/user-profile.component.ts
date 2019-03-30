import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { User } from '../model/user';
import { AuthService } from '../../auth/auth.service';
import { UserService } from '../services/user.service';
import { UtilService } from '../../general/services/util.service';

const errorMessage = 'Something went wrong';

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
    this.populateUserData();
  }

  populateUserData() {
    if (this.authService.isAuthenticated()) {
      const email = this.authService.extractEmail();

      this.populateForEmail(email);
    }
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
        this.utilService.openSimpleDialog('Profile updated');
      }, () => {
        this.utilService.openSimpleDialog(errorMessage);
      });
  }

  private populateForEmail(email: string) {
    this.userService.getUserByEmail(email).subscribe(
      data => {
        this.setFormData(data);
      }
    );
  }

  private setFormData(user: User) {
    this.form.setValue({
      firstName: user.firstName,
      lastName: user.lastName,
      dateOfBirth: user.dateOfBirth ? this.getFormattedDate(user.dateOfBirth) : '',
      gender: user.gender || ''
    });
  }

  private assembleUserObject(): User {
    return {
      email: this.authService.extractEmail(),
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      dateOfBirth: this.getFormattedDate(this.dateOfBirth.value),
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

  /**
   * Converts a date object to yyyy-mm-dd format
   */
  private getFormattedDate(date: string): string {
    const d = new Date(date);
    const year = `${d.getUTCFullYear()}`;
    let month = `${d.getUTCMonth() + 1}`;
    let day = `${d.getUTCDate()}`;

    if (month.length < 2) {
      month = '0' + month;
    }

    if (day.length < 2) {
      day = '0' + day;
    }

    return `${year}-${month}-${day}`;
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
