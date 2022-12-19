import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent {
  baseUrl =
    'https://the-trivia-api.com/api/questions?categories=history&limit=1&difficulty=easy';
  dataQuestion: any;
  isFalse:boolean = true;
  score:number = 0;
  userData!: {
    name:string;
    difficult: string;
  }
  questionForm = this.fb.group({
    answer: ['', Validators.required]
  })

  constructor(private http: HttpClient, private fb: FormBuilder) {}
  
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.http.get(this.baseUrl).subscribe((res):any => {
      this.dataQuestion = res;
      this.dataQuestion[0].incorrectAnswers.push(this.dataQuestion[0].correctAnswer)
      this.dataQuestion[0].incorrectAnswers.sort(() => Math.random() - 0.5); 
      const parse = JSON.parse(localStorage.getItem('userData') || '')
      this.userData = {
        name: parse.name,
        difficult: parse.difficult.charAt(0).toUpperCase() + parse.difficult.slice(1)
      }
    });
  }

  submitAnswer () {
    if(this.questionForm.controls.answer.value === this.dataQuestion[0].correctAnswer ) {
      this.isFalse = true
      this.score += 10
      this.fetchData()
    } else {
      this.isFalse = false
      this.score -= 10
      this.fetchData()
    }
  }

}
