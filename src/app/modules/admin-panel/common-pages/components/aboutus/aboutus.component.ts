import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  editorConfig = {
    editable: true,
    spellcheck: false,
    height: '20rem',
    width: '35rem',
    minHeight: '5rem',
    placeholder: 'Type something. Test the Editor... ',
    translate: 'no',
    "toolbar": [
      ["bold", "italic", "underline"],
      ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent"],
    ],
  };
  editorConfig2 = {
    editable: true,
    spellcheck: false,
    height: '20rem',
    width: '35rem',
    minHeight: '5rem',
    placeholder: 'Type something. Test the Editor... ',
    translate: 'no',
    "toolbar": [
      ["bold", "italic", "underline"],
      ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent"],
    ],
  };
  constructor() { }

  ngOnInit() {
  }

}
