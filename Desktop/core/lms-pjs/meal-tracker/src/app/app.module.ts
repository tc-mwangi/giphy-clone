import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import the forms module if you summon ngModel
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// This is added automatically when the component is created.
import { MealsComponent } from './meals/meals.component';

@NgModule({
  declarations: [
    AppComponent,
    MealsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //then add the FormsModule to imports here.
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
