import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdToolbarModule, MdMenuModule, MdButtonModule, MdDialogModule} from '@angular/material';

import { AppComponent } from './app.component';
import { ZoomableImageComponent } from './zoomable-image/zoomable-image.component';
import { DownloadDialogComponent } from './download-dialog/download-dialog.component';
import { ExplainDialogComponent } from './explain-dialog/explain-dialog.component';
import { NoopAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    ZoomableImageComponent,
    DownloadDialogComponent,
    ExplainDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NoopAnimationsModule,
    MdMenuModule,
    MdButtonModule,
    MdToolbarModule,
    MdDialogModule
  ],
  providers: [],
  entryComponents: [DownloadDialogComponent, ExplainDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
