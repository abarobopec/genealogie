import {Component, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import {MdDialog} from "@angular/material";
import {DownloadDialogComponent} from "./download-dialog/download-dialog.component";
import {ExplainDialogComponent} from "./explain-dialog/explain-dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  constructor(public dialog: MdDialog, private changeDetector: ChangeDetectorRef){

  }

  ngAfterViewInit(): void {
    setTimeout(()=>{let dialogRef = this.dialog.open(ExplainDialogComponent);});
    //let dialogRef = this.dialog.open(ExplainDialogComponent);
    //this.changeDetector.detectChanges();

  }

  onDownloadClicked(){
    let dialogRef = this.dialog.open(DownloadDialogComponent);
  }
}
