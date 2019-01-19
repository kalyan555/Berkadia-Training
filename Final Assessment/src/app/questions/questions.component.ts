import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(private readonly data: DataService) { }
  questions = [];
  showsubmit = false
  TestScore = ""
  submitted = false;
  submitTest = ""
  check = "";
  attemptedAnswers = [];
  question = [];
  attemptedQuestions = [];
  correctAnswers = 0;
  attemptedQuestionsCount = 0;
  options = [];
  i = 5;
  prev = 0;
  Questionslength;
  numberOfQuestions=10;

  ngOnInit() {
    //console.log( this.data.getQuestions()) ;
    this.data.getQuestions().subscribe((res: any) => {
      this.questions = res.results;
      this.Questionslength=this.questions.length;
      //console.log(this.questions);
      this.question = this.questions[this.i];
      this.options = this.question.incorrect_answers;
      this.options.push(this.question.correct_answer);
      //console.log(this.options);
      this.questions.splice(this.i, 1)
      this.Questionslength = this.Questionslength - 1;

    });
  }

  next() {
    if (this.attemptedQuestionsCount == 9) {
      this.showsubmit = true
      this.submitTest = "Submit Test"

    }
    else {
      if (this.prev == 1) {
        this.attemptedAnswers[this.attemptedQuestionsCount] = this.check;
        this.prev = 0;
        this.attemptedQuestionsCount += 1;
        console.log(this.attemptedQuestionsCount)

        this.question = this.attemptedQuestions[this.attemptedQuestionsCount];
        this.options = this.question.incorrect_answers;
        this.check = this.attemptedAnswers[this.attemptedQuestionsCount];

      }
      else {
        this.attemptedAnswers.push(this.check);
        this.check = "";
        this.attemptedQuestions.push(this.question);
        console.log(this.attemptedQuestions)
        this.attemptedQuestionsCount += 1
        // console.log(this.attemptedQuestionsCount)
        // console.log(this.attemptedAnswers);
        this.Questionslength = this.Questionslength - 1;
        let rem = this.Questionslength
        this.i = (this.i * 2) % rem - 1;
        //console.log(this.i);
        this.question = this.questions[this.i];
        this.options = this.question.incorrect_answers;
        this.options.push(this.question.correct_answer);
        //console.log(this.options);
      }
    }
  }

  submit(value) {
    if (this.attemptedQuestionsCount == 9) {
      this.showsubmit = true
      this.submitTest = "Submit Test"
    }
    else {
      if (this.check == this.question.correct_answer && this.check != this.attemptedAnswers[this.attemptedQuestionsCount]) {
        this.correctAnswers += 1;
        this.question["correct"] = true;
        console.log(this.correctAnswers)
      }
      else this.question["correct"] = false;
      this.question["selectedOption"] = this.check;
      this.next();

    }
  }

  previous() {
    this.prev = 1;
    this.attemptedQuestionsCount -= 1;
    if (this.attemptedQuestionsCount >= 0) {
      //console.log(this.attemptedQuestionsCount)
      this.question = this.attemptedQuestions[this.attemptedQuestionsCount];
      this.options = this.question.incorrect_answers;
      //console.log(this.question);
      this.check = this.attemptedAnswers[this.attemptedQuestionsCount];
      //console.log(this.check)
    }
  }

  submitTestComplete() {
    this.TestScore = "Your Score is :" + this.correctAnswers * 100 / this.numberOfQuestions + "%";
    console.log(this.attemptedQuestions);
    this.submitted = true;
    console.log(this.attemptedAnswers)


  }
}

