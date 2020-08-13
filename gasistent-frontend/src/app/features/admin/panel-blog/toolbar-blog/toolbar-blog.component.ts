import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DialogBodyComponent} from '../../../../shared/components/dialog-body/dialog-body.component';
import {MatDialog} from '@angular/material/dialog';
import {AuthService} from '../../../../core/services/auth.service';

@Component({
  selector: 'app-toolbar-blog',
  templateUrl: './toolbar-blog.component.html',
  styleUrls: ['./toolbar-blog.component.css']
})
export class ToolbarBlogComponent implements OnInit {

  constructor(private dialog: MatDialog, private authService: AuthService) { }

  ngOnInit(): void {
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
