import { Component } from '@angular/core';
import { ProjectExplanation } from '../projectExplanation.model'

@Component({
  selector: 'app-projects-explanation-list',
  templateUrl: './projects-explanation-list.component.html',
  styleUrls: ['./projects-explanation-list.component.css']
})
export class ProjectsExplanationListComponent {

  projectExp: ProjectExplanation[] = [new ProjectExplanation('Memory Game',`Memory Game is a classic card matching game built with HTML, CSS, and JavaScript. 
  The objective of the game is to find all the matching pairs of cards in the least number of moves and as quickly as possible. It's a fun and challenging game that tests your memory and concentration skills.`)
                                  ,new ProjectExplanation('The Maze',`The game's objective is to collect four coins while avoiding 
                                  enemies that can kill the player. Once the player collects all four coins, the DFS algorithm will activate and draw the path to the exit door, advancing the player to the next level and the player must complete the level 
                                  before the time runs out. If the time runs out, the level will restart.
                                  Design Patterns: Strategy, Factory, Multimethod, Observer, Command and Singleton.`)
                                  ,new ProjectExplanation('Ecommerce',`E-commerce website using React and Spring. The goal is to allow customers to browse movies, add them to a cart, 
                                  and complete purchases without registration. To minimize server work, I'll use the TMDB API for product browsing.
                                  For the front-end, I'll use React to create a single-page application . The search page will display movies based on search and a search history will allow quick access to previous searches.
                                  Movies can be added to the cart on the search page, with no duplicates allowed. The cart page will show all items and a fixed price. Users can remove items individually or empty the cart entirely. The checkout page will feature a 
                                  form for mandatory customer information, and upon submission, purchases will be saved in the database, and the cart will reset.
                                  The back-end will use Spring to create a REST API for cart handling and purchase recording. Spring session beans will store
                                   the cart, and a SQL Server database will store completed orders.`)
                                   ,new ProjectExplanation('Coin Hunter',`The coin hunter is an original game. The player starts with ten bulletns and three lives. The players goal is to collect eight stars and reach the door that leads him to next level.
                                                            As the player makes his way to the door, he needs to avoid the enemies that try to kill him.
                                                            Design Pattarens: Singleton, Command, and Multimethods.`)
                                   ,new ProjectExplanation('Proxy Tester Console',`Proxy Tester Console is a console-based program that allows you to test some proxy-like functions for controlling the downloading of web resources. The program implements the following options:
                                   Denying access to URLs based on a list of blocked sites that can be added/removed dynamically Denying access to resources of type image Denying access to resources of type HTML Denying access to resources containing cookies
                                   The list of blocked sites is saved to a text file named blocked.txt. There should be one URL per line, and the program loads the list of blocked sites at startup if it exists. The list should not contain duplicates.
                                    A URL is blocked if it appears in the list or if any URL matches the beginning of the URL
                                    Design Patterns:Decorator, Singelton and Factory.`)
                                    ,new ProjectExplanation('Circle the Cat',`
                                    Circle the Cat is a puzzle game where you draw circles around a cat in an attempt to trap it. The cat chooses the next step by BFS algorithm for finding the shortest path to escape from the board.
                                    Click the dots and stop the cat from escaping!.Design Pattaren: Singleton.`)   
                                    ,new ProjectExplanation('Targeted Lotto Counter',`The father creates a child, and the child executes the next operation N times:
                                     he generates lottery numbers until he gets 0, then sends the count of lotteries to the father using a pipe.
                                     The father receives the count and prints its value. The father and son communicate using a pipe.`)
                                     ,new ProjectExplanation('Sorting Competiton',`The father creates two children and waits for
                                      them. Each child needs to sort an array. The first child needs to sort by bubble sort and
                                      the second child by insertion sort. When the child finishes he sends signal(SIGUSE1,SIGUSER2 in respectively) to the 
                                      father and the father printsthe number of process that sent the signal.
                                      Assumptions - The kids go out at the same time ..`)
                                      ,new ProjectExplanation('Trivia Game',`I have created a trivia game.
                                        The goal of the player is to answer as many questions as possible without making mistakes
                                          and to be ranked at least in the top ten in order to appear on the leaderboard. As soon as
                                          the player is already registered in the score table, we check if their new score is higher
                                            than the previous one before adding it. If the new score is indeed higher, we update the 
                                            entry with the new score. Therefore, each user will have only one entry in the table if
                                            they have played at least once. To participate in the game, players need to register 
                                            through the login system. Players who have not registered will not be able to play the game.
                                              The admin has the ability to add questions to the game, remove them, and also delete users 
                                              from the leaderboard. I have created two tables. The first table stores the username and 
                                              score of each player, while the second table stores the questions. Each record in the questions table consists of a question, the correct answer, and three incorrect answers.
                                              Using MVC Thymeleaf`)
                                              ,new ProjectExplanation('Producer-Consumer',
                                              `This program demonstrates a simple producer-consumer scenario using named pipes. The producer generates random prime numbers and sends them through a named pipe.
                                               The consumer reads the numbers from the named pipe and prints them on the screen.`
          
                                               ),new ProjectExplanation('Cheaper App',`In progress...`),new ProjectExplanation('My Cookbook',`In progress...`)



                                      



                                    


                              
                                    
                                    


                                    






                                  
                                  
                                  
                                  ];
}
