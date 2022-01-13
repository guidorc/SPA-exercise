# ensolvers-web-excercise

### Simple SPA that let's you create a To-Do List with tasks and folders to group them

The tools required to run this App and their respective versions are:
- Java v11
- React v17.02
- Spring Boot v2.6.2 with dependencies: Spring Web, Spring Data JPA, MySQL driver
- Node.JS v16.13.1
- NPM v8.3.0
- XAMPP v7.4.27 with: Apache v2.4.52, mariaDB 10.4.22

To run the App follow these steps:

1. Open XAMPP and start the Apache and MySQL modules.
   - open browser and navigate to: "127.0.0.1"
   - go to phpMyAdmin tab
   - create a new database with name "ensolvers-excercise"
2. run the bash script "server.sh"
3. run the bash script "frontend.sh" 

Note: It may be needed to change the script permissions with "chmod u+r+x filename.sh"

If the scripts don't work, try the following steps:

1. Open the springboot backend folder with IntellijIDEA (or other IDE) and run the build.
2. On the todo-list folder run the command: "npm start" ; this should open the App in the browser.
