import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from './material-design/material-design.module';
import { LoginComponent } from './auth/login/login.component';
import { BlogPageComponent } from './blog/blog-page/blog-page.component';
import { SingleBlogComponent } from './blog/single-blog/single-blog.component';
import { PostComponent } from './blog/post/post.component';
import { AdminblogComponent } from './adminblog/adminblog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { FormDialogComponent } from './form-dialog/form-dialog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlogPageComponent,
    SingleBlogComponent,
    PostComponent,
    AdminblogComponent,
    ConfirmDialogComponent,
    SuccessDialogComponent,
    FormDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
