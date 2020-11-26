import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-about-us',
  templateUrl: './admin-about-us.component.html',
  styleUrls: ['./admin-about-us.component.css']
})
export class AdminAboutUsComponent implements OnInit {
  editorConfig = {
    editable: true,
    spellcheck: false,
    height: '17rem',
    minHeight: '5rem',
    // placeholder: 'Type something. Test the Editor... ',
    translate: 'no',
    "toolbar": [
        ["bold", "italic", "underline"], 
        ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent"],
            ]
};
  constructor() { }

  ngOnInit() {
  }

}
