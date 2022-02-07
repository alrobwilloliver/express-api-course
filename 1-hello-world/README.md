This short course will teach how to make a simple backend api using the javascript express framework

1. You must have node.js and npm installed
`https://nodejs.org/en/download/`
Node.js is a javascript run time. Basically it just means you can use it to run javascript code.
Npm is a repository which will enable you to use third party libraries (open source code created by other people) that you can use to build projects.
Check the installation worked in your terminal by running:
`node -v` AND `npm -v`

2. Create a folder in which you want to create your project. Call the file something like: "backend-express". Initialize a npm repository by inputting:
`npm init`
Press enter through the whole process. You should see a 'package.json' file in your folder. This will contain the meta data for your project.

3. Add the packages nodemon and express to your project:
`npm install express && npm install --save-dev nodemon`
You should see a folder called "node_modules" which contains all the third party libraries
In your package.json file the express package will be a dependancy and the nodemon package will be a development dependancy.

4. Create an index.js file. We will use this to create our simple backend api.

5. Import express, create an app and write a GET request/response which will return "Hello, world!" on the "/" route. Make sure you listen to the app on a localhost port to run your server.
* See index.js on how to do this

6. In the package.json create a script called `start` which executes the command `nodemon index.js`. This will run the javascript code, creating our server.
I.E:
"scripts": {
    "start": "nodemon index.js"
},

7. To run our code execute this command in the terminal: `npm run start`

8. In your browser go to the address `localhost:3000` (the number is the port number)
CONGRATS, you've created your first basic backend app which sends a "Hello, world!" response to the client!
