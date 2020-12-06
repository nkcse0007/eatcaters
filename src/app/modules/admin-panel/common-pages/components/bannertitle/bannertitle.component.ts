import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bannertitle',
  templateUrl: './bannertitle.component.html',
  styleUrls: ['./bannertitle.component.css']
})
export class BannertitleComponent implements OnInit {
  editorConfig = {
    editable: true,
    spellcheck: false,
    height: '10rem',
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
    height: '10rem',
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
