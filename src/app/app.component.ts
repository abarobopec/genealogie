import { Component } from '@angular/core';
import {MdDialog} from "@angular/material";
import {DownloadDialogComponent} from "./download-dialog/download-dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public dialog: MdDialog){

  }
  onDownloadClicked(){
    let dialogRef = this.dialog.open(DownloadDialogComponent);

  }
}
