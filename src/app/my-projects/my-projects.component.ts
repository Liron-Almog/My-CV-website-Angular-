import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})

export class MyProjectsComponent implements OnInit {
  
  constructor(private activateR: ActivatedRoute, private route: Router) {}

  ngOnInit() {
    this.activateR.fragment.subscribe((fragment:string) => {
      if (fragment) 
        document.getElementById(fragment).scrollIntoView();
      

    });
  }
}

