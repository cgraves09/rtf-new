import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-html-dialog',
  templateUrl: './html-dialog.component.html',
  styleUrls: ['./html-dialog.component.scss']
})
export class HtmlDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {html: string },
  ) { }

  ngOnInit(): void {
  }

}
