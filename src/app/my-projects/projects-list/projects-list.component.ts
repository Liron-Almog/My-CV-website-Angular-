import { Component, OnInit } from '@angular/core';
import {Project} from '../project.model';
@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit{

  projects:Project[] = [new Project('Ecommerce','Test decription','Ecommerce.mp4'),
                        new Project('Memory Game','Test decription','Memory_Game.mp4'),
                        new Project('The Maze Game','Test decription','The_Maze.mp4'),
                        new Project('Proxy-Tester-Console','Test decription',''),
                        new Project('Circle-The-Cat','Test decription',''),
                        new Project('Coin-Hunter','Test decription','Coin Hunter.mp4'),
                        new Project('The-Prime-Numbers-Maker','Test decription',''),
                        new Project('Sorting-Competiton','Test decription',''),
                        new Project('Trivia Game','Test decription','Trivia_Game.mp4')];

                        


  constructor(){}

  ngOnInit(){

  }
}
