import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Question } from '../model/question';
import { Survey } from '../model/survey';

@Component({
  selector: 'creation-form',
  templateUrl: './creation-form.component.html',
  styleUrls: ['./creation-form.component.scss']
})
export class CreationFormComponent implements OnInit {

  form = this._buildForm();
  survey: Survey;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  dummyAdd() {
    const question = new Question({
      controlType: 'textbox',
      key: 'qUno',
      label: 'Q1',
      order: 1,
      placeholder: 'asdasd'
    });
    this.addQuestion(question);
  }

  addQuestion(question: Question) {
    this.questions.push(this.fb.control(''));
  }

  submitForm() {
    console.log(this.form.value);
  }

  remove(index) {
    this.questions.controls.splice(index, 1);
  }

  private _buildForm() {
    return this.fb.group({
      title: ['', Validators.required],
      description: [''],
      questions: this.fb.array([
        this.fb.control('')
      ])
    });
  }

  get questions() {
    return this.form.get('questions') as FormArray;
  }

}
