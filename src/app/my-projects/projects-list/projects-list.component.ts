import { Component, OnInit } from '@angular/core';
import {Project} from '../project.model';
@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit{

  projects:Project[] = [new Project('Ecommerce','Test decription','Ecommerce.mp4','https://github.com/Liron-Almog/Ecommerce-React'),
                        new Project('Memory Game','Test decription','Memory_Game.mp4','https://github.com/Liron-Almog/Trivia-Game-MVC-Thymeleaf'),
                        new Project('The Maze','Test decription','The_Maze.mp4','https://github.com/Liron-Almog/The-Maze'),
                        new Project('Proxy Tester Console','Test decription','','https://github.com/Liron-Almog/Proxy-Tester-Console'),
                        new Project('Circle The Cat','Test decription','','https://github.com/Liron-Almog/Circle-The-Cat'),
                        new Project('Coin Hunter','Test decription','Coin Hunter.mp4','https://github.com/Liron-Almog/Coin-Hunter'),
                        new Project('Targeted Lotto Counter','Test decription','','https://github.com/Liron-Almog/Targeted-Lotto-Counter'),
                        new Project('Cheaper App','Test decription','','https://github.com/Liron-Almog/Cheaper-App'),
                        new Project('The Prime Numbers Maker','Test decription','','https://github.com/Liron-Almog/The-Prime-Numbers-Maker'),
                        new Project('Sorting Competiton','Test decription','','https://github.com/Liron-Almog/Sorting-Competiton'),
                        new Project('Trivia Game','Test decription','Trivia_Game.mp4','https://github.com/Liron-Almog/Trivia-Game-MVC-Thymeleaf')
                      ];

                        


  constructor(){}

  ngOnInit(){

  }
}
