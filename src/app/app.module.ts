import { NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Component/footer/footer.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { ProductComponent } from './Component/product/product.component';
import { BorderDirective } from './Directive/border.directive';
import { NationalIDPipe } from './Pipe/national-id.pipe';
import { CreditCardPipe } from './Pipe/credit-card.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    ProductComponent,
    BorderDirective,
    NationalIDPipe,
    CreditCardPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
