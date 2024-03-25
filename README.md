# Progressive Web Applications (PWA) Text Editor

 ## Task

To create a simple text editor that runs in the browser and meets the PWA criteria. The application functions online as well as offline. User Story

## AS A developer

I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use

## Acceptance Criteria

GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Render
THEN I should have proper build scripts for a webpack application
  
## Deployed website 





## Usage & Installation

users can access the Progressive Web Applications (PWA) Text Editor in the browser.
 
If users would like to install the application to their local machine they can do so by clicking the `Install` button located in the application.

<img src="./assets/jate-install-video.gif"/> 

## Technologies used 

+ [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
+ [Node.js](https://nodejs.org/en/) 
+ [Express](https://www.npmjs.com/package/express) 
+ [Concurrently](https://www.npmjs.com/package/concurrently) 
+ [idb](https://www.npmjs.com/package/idb) 
+ [Webpack](https://webpack.js.org/) 
+ [Workbox](https://developer.chrome.com/docs/workbox/)