import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {GraphPageComponent} from './graph-page.component';
import {GraphSvgModule} from './graph-svg/graph-svg,module';
import {FormModule} from './form/form.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormModule, GraphSvgModule, HttpClientModule],
  declarations: [ GraphPageComponent]
})
export class GraphPageModule {}
