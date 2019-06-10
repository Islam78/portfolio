import {Component, OnInit} from '@angular/core';


declare var $: any;
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myStyle: object = {};
	myParams: object = {};
	width: number = 100;
	height: number = 100;
  ngOnInit(): void {
    $(document).ready(function () {
      $('.slidbarBtn').click(function () {
          $('.slidbar').toggleClass('active');
          $('.slidbarBtn').toggleClass('toggle');
      })
  })

  }
  // to start from scroll top عشان لما اضغط على زرار تحت يبدا من اول الصفحه
  onActivate(event) {
    window.scroll(0,0);
    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)
}
}
