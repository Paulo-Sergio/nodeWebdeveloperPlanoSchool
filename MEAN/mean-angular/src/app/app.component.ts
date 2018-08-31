import { Component } from '@angular/core';
import { AppService } from './services/app.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public form: FormGroup

  constructor(
    private appService: AppService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: [""],
      body: [""]
    })

    this.appService.fetchServer()
      .subscribe((data) => {
        console.log(data)
      })
  }

  public create(event) {
    this.appService.save(this.form.value.title, this.form.value.body)
      .subscribe((res) => {
        console.log(res)
      })
  }
}
