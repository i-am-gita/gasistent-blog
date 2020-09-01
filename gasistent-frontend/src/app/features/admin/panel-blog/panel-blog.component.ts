import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-panel-blog',
  templateUrl: './panel-blog.component.html',
  styleUrls: ['./panel-blog.component.css']
})
export class PanelBlogComponent implements OnInit {
  opened = true;
  buttonPossition = '235px';
  buttonMarginTop = '355px';
  iconRotate = 'rotate(180deg)';

  constructor() { }

  ngOnInit() {
  }

  public onToggleToolbar = () => {
    this.opened = !this.opened;
    if (this.opened){
      this.buttonPossition = '235px';
      this.iconRotate = 'rotate(180deg)';
    } else{
      this.buttonPossition = '0';
      this.iconRotate = 'rotate(0deg)';
    }
  }
}
