import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {ChatComponent} from './containers/chat/chat.component';
import {UserNameComponent} from './components/user-name/user-name.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    UserNameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
