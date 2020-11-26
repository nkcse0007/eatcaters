import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-privacy-policy',
  templateUrl: './admin-privacy-policy.component.html',
  styleUrls: ['./admin-privacy-policy.component.css']
})
export class AdminPrivacyPolicyComponent implements OnInit {
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
