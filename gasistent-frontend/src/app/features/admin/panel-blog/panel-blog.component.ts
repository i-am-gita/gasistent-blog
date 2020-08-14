import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AuthService} from '../../../core/services/auth.service';
import {DialogBodyComponent} from '../../../shared/components/dialog-body/dialog-body.component';

@Component({
  selector: 'app-panel-blog',
  templateUrl: './panel-blog.component.html',
  styleUrls: ['./panel-blog.component.css']
})
export class PanelBlogComponent implements OnInit {
  opened = true;
  buttonPossition = '270px';
  buttonMarginTop = '355px';
  iconRotate = 'rotate(180deg)';

  constructor() { }

  ngOnInit() {
  }

  public onToggleToolbar = () => {
    this.opened = !this.opened;

    if (this.opened){
      this.buttonPossition = '270px';
      this.iconRotate = 'rotate(180deg)';
    } else{
      this.buttonPossition = '0';
      this.iconRotate = 'rotate(0deg)';
    }
  }
}
