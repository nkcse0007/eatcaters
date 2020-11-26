import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-terms-and-use',
  templateUrl: './terms-and-use.component.html',
  styleUrls: ['./terms-and-use.component.css']
})
export class TermsAndUseComponent implements OnInit {
  editorConfig = {
    editable: true,
    spellcheck: false,
    height: '20rem',
    width:'35rem',
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
