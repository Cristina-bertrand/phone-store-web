import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import './rxjs.operators';

import { AppComponent } from './app.component';
import { PhoneListComponent } from './components/phone/phone-list/phone-list.component';
import { PhonesService } from './shared/services/phones.service';
import { routes } from './app.routes';
import { PhoneItemComponent } from './components/phone/phone-item/phone-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PhonesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
