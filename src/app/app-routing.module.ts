import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {path:'', component:AppComponent},
  {path:'image-cropper', component: ImageCropperComponent}
];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
