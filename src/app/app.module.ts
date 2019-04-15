import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateComponent } from './components/date/date.component';
import { ServerStatusComponent } from './components/server-status/server-status.component';
import { ServerStatusDisplayComponent } from './components/server-status-display/server-status-display.component';


@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    ServerStatusComponent,
    ServerStatusDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
