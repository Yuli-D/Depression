import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { InputParametersComponent } from './input-parameters/input-parameters.component';
import { ScreenPositiveComponent } from './screen-positive/screen-positive.component';
import { HaveDepressionComponent } from './have-depression/have-depression.component';
import { FAQComponent } from './faq/faq.component';
import { ScreenPositiveGraphicComponent } from './screen-positive-graphic/screen-positive-graphic.component';
import { HaveDepressionGraphicComponent } from './have-depression-graphic/have-depression-graphic.component';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {CalculationsComponent} from './calculations/calculations.component'
import {PrevalenceService} from './services/prevalences.service'
import { HttpClientModule } from '@angular/common/http';
import { MoreInfoComponent } from './more-info/more-info.component';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

const appRoutes: Routes = [
  {
    path: 'main-page',
    component: MainPageComponent
  },
  { path: '',
    redirectTo: 'main-page',
    pathMatch: 'full'
  },
  { path: 'more-info', component: MoreInfoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasicInfoComponent,
    InputParametersComponent,
    ScreenPositiveComponent,
    HaveDepressionComponent,
    FAQComponent,
    ScreenPositiveGraphicComponent,
    HaveDepressionGraphicComponent,
    CalculationsComponent,
    MoreInfoComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    MatSelectModule,
    MatAutocompleteModule,
    FormsModule, ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [BrowserModule,BrowserAnimationsModule],
  providers: [PrevalenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
