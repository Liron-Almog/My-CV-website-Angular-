import { Component, OnInit } from '@angular/core';
import {Project} from '../project.model';
@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit{

  projects:Project[] = [new Project('Ecommerce','HTML, CSS, JS & React','Ecommerce.mp4','https://github.com/Liron-Almog/Ecommerce-React'),
                        new Project('Memory Game','HTML, CSS & JS','Memory_Game.mp4','https://github.com/Liron-Almog/Memory-Game'),
                        new Project('The Maze','C++','The_Maze.mp4','https://github.com/Liron-Almog/The-Maze'),
                        new Project('Proxy Tester Console','Java','','https://github.com/Liron-Almog/Proxy-Tester-Console'),
                        new Project('Circle the Cat','C++','','https://github.com/Liron-Almog/Circle-The-Cat'),
                        new Project('Coin Hunter','C++','Coin Hunter.mp4','https://github.com/Liron-Almog/Coin-Hunter'),
                        new Project('Targeted Lotto Counter','C','','https://github.com/Liron-Almog/Targeted-Lotto-Counter'),
                        new Project('Cheaper App','React Native','','https://github.com/Liron-Almog/Cheaper-App'),
                        new Project('Producer-Consumer','C','','https://github.com/Liron-Almog/Producer-Consumer-using-Named-Pipes'),
                        new Project('Sorting Competiton','C','','https://github.com/Liron-Almog/Sorting-Competiton'),
                        new Project('Trivia Game','HTML CSS & Java with spring','Trivia_Game.mp4','https://github.com/Liron-Almog/Trivia-Game-MVC-Thymeleaf')
                      ];

                        


  constructor(){}

  ngOnInit(){

  }
}
