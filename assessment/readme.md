XXX*** Unfinished Solution ***XXX

run command: node index.js - will only log out the object of people.


******* Summary *********

I started working on this way too late and didnt have time to get through to the correct output.

Full transparency, I am not the best at writing tests so I planned on doing it after the fact. I have built a table with search and sort funtionality before using REACT (https://github.com/dlwhite112/User-Directory) so I planned on trying a similar .sort solution here. 

I was only able to get about halfway through. I had planned on making a simple static webpage to go along with this submission that had buttons to switch between the the different output solutions.

I also have a lot of repeating code to refactor.


-------------- personal notes from working towards the solution ----------------

let inputA = Kournikova Anna F F 6-3-1975 Red
Hingis Martina M F 4-2-1979 Green
Seles Monica H F 12-2-1973 Black

let inputB = Abercrombie, Neil, Male, Tan, 2/13/1943
Bishop, Timothy, Male, Yellow, 4/23/1967
Kelly, Sue, Female, Pink, 7/12/1959

let inputC = Smith | Steve | D | M | Red | 3-3-1985
Bonk | Radek | S | M | Green | 6-3-1975
Bouillon | Francis | G | M | Blue | 6-3-1975


The order of properties is different for each format.

The pipe-delimited file lists each record as follows:
LastName | FirstName | MiddleInitial | Gender | FavoriteColor | DateOfBirth

The comma-delimited file looks like this:
LastName, FirstName, Gender, FavoriteColor, DateOfBirth

The space-delimited file looks like this:
LastName FirstName MiddleInitial Gender DateOfBirth FavoriteColor

Step 1: Parse Strings into one People object - done - 

Step 2: Add Sort filters to the categories.


