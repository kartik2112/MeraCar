import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router'

import { AppComponent }  from './app.component';
import {ContentComponent} from './home/content/content.component';
import {HomeComponent} from './home/home.component';
import {EmptyComponent} from './home/empty.component';
import {searchContentPipe} from './home/content/content.pipe';

import { HttpClientModule } from '@angular/common/http';
import { AddContentComponent } from './add-content/add-content.component';

import {ContentService} from './home/content/content.service'
import { FormsModule } from '@angular/forms';
import { EditContentComponent } from './edit-content/edit-content.component';

const appRoutes: Routes = [ 
  // { 
  //   path: '', 
  //   component: AppComponent,
  //   children: [
  //       {
  //           path: 'home',
  //           component: HomeComponent,
  //           children: [
  //             { path: '', component: EmptyComponent },
  //             { path: ':elem', component: ContentComponent }
  //           ]
  //       },
  //       {
  //           path: '',
  //           component: EmptyComponent
  //       }
  //   ]  
  // } 
  
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: EmptyComponent },
      { path: ':elem', component: ContentComponent }
    ]
  },
  {
    path: 'addContent',
    component: AddContentComponent
  },
  {
    path: 'editContent',
    component: EditContentComponent
  },
  { 
    path: '', 
    pathMatch: 'full',
    redirectTo: 'home'   
  }
]

@NgModule({
  imports:      [ RouterModule.forRoot(appRoutes), BrowserModule, HttpClientModule, FormsModule ],
  declarations: [ AppComponent, ContentComponent, HomeComponent, EmptyComponent, searchContentPipe, AddContentComponent, EditContentComponent ],
  providers: [ContentService],
  exports: [ RouterModule ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
