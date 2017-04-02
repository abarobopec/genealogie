import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-explain-dialog',
  templateUrl: './explain-dialog.component.html',
  styleUrls: ['./explain-dialog.component.css']
})
export class ExplainDialogComponent {

  constructor(public dialogRef: MdDialogRef<ExplainDialogComponent>) { }

}
