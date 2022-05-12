import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HtmlDialogComponent } from './html-dialog/html-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rtf-new';
  public modules = {
    toolbar: {
        container: [
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          [{ 'color': [] }, { 'background': [] }],
          ['undo', 'redo'],
        ],
    },
    history: {
      userOnly: true
    }
  };

  public html = ''

  constructor(
    private dialog: MatDialog
  ){}

  public openHTMLDialog() {
    this.dialog.open(HtmlDialogComponent, {disableClose: true, data: {html: this.html}});
  }
}
