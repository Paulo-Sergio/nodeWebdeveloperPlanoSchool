import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-postcreate',
  templateUrl: './postcreate.component.html',
  styleUrls: ['./postcreate.component.css']
})
export class PostcreateComponent implements OnInit {

  public form: FormGroup

  constructor(
    private appService: AppService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: ["", Validators.required],
      body: ["", Validators.required]
    })
  }

  public create(event) {
    this.appService.save(this.form.value.title, this.form.value.body)
      .subscribe((res) => {
        console.log(res)
        this.clear()
      })
  }

  get f() {
    return this.form.controls
  }

  private clear() {
    this.form = this.formBuilder.group({
      title: ["", Validators.required],
      body: ["", Validators.required]
    })
  }

}
