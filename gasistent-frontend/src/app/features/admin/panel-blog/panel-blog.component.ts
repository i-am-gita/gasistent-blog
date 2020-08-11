import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AuthService} from '../../../core/services/auth.service';
import {DialogBodyComponent} from '../../../shared/components/dialog-body/dialog-body.component';

@Component({
  selector: 'app-panel-blog',
  templateUrl: './panel-blog.component.html',
  styleUrls: ['./panel-blog.component.css']
})
export class PanelBlogComponent implements OnInit {

  constructor(private dialog: MatDialog, private authService: AuthService) { }

  ngOnInit() {
  }

  open_dialog(message: string){
    const dialogRef = this.dialog.open( DialogBodyComponent, {
      data: {
        message
      },
      width: '550px',
      height: '200px'
    });
    dialogRef.afterClosed().subscribe((confirm: boolean) => {
      if (confirm){
        this.sign_out();
      }
    });
  }

  sign_out(){
    this.authService.logout();
  }

}
