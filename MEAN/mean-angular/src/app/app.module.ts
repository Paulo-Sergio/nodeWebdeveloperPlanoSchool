import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppService } from './services/app.service';
import { UiModule } from './ui/ui.module';
import { PostlistComponent } from './postlist/postlist.component';
import { PostcreateComponent } from './postcreate/postcreate.component';

const appRoutes: Routes = [
  { path: '', component: PostlistComponent },
  { path: 'new', component: PostcreateComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    PostlistComponent,
    PostcreateComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    UiModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
