/* import { BrowserRouter, Routes, Route } from "react-router-dom"
import Page1 from "./Page1"
import Page2 from "./Page2" */
/* 
// Vite module CSS example
import styleA from "./assets/styles/a.module.css"
import styleB from  "./assets/styles/b.module.css."
import styleC from "./assets/styles/c.module.css" */

/* 
// Vite can resolve a package from the static module like this one which we request and was able to able it's values  
import Collect from './collect' */

/*
// CSS inline is used to display the content of the css element in our window or console
 import styles from  "./assets/styles/mod.css?inline" || url, raw*/

 /* 
// When our broswer request for our a.scss module vite transforms the module to valid es6 module with const variable which is injected back to our script where is been requested.
import "./assets/styles/a.scss" */

/* 
// when a request is been made to fetch a js file, vite converts this to an vaild es6 modelu with a value const and it's properties are been injectedin our script where the request is been made
import Example from './Example' */

/* 
// when a request is made to get a json vite transforms the module and sends it in an ES6 module 
import data from "./json"
import {name, age} from "./json" */

/* 
// In vite we have static assets in our assets folder in src where static files like images are stored and can be access within our src folder we can assign this static assets to return a endpoint(url) or raw data in the in the module which the request it applied with file?raw || url 
import StaticAssets from './StaticAssets.jsx' */

/*  The public  folder is a folder where our staic assets are stored and the can not be access by the src reference we can change our public directory to any name we want and to config this in our project for build cases we config this with the publicDir: "staticPublic" in the vite config module note: in production  cases vite does not bundle the public assets only copy them in our dist build folder and note that the public can only be acessed directly in the build entry like html*/

/* Note in glob api we are able to import multiple modules and also import a module inside an imported module we have, note in the glob we have some configurations done inside them which like the egar that automatically stops a dynamic element or fuction and loads them at once to the console or browser  
import Glob from './Glob'  */

/* How to integrate ESLint, ESlint can be defined as a JavaScript Analizer which reads through our js or jsx file and returns an Error which is known as an ESLint error in Script if ther is on e if not it returns nothing to show that the script is running perfectly. Note to run Eslint check on ur terminal use "npx eslint . -> to check all the module in ur src file we can also ingore most our files by using .eslint.igorne to create a module and display the module of to restrict from analiyzing". Note: that the vite-plugin-checker  npm package is use to use to run eslint 
 */

/* Path Aliases this Api helps us to shorten the length of folder's we have to pass through to access our module  by using the resolve : { alias: { '@': path.resolve(__dirname, './src/anyfolder/')}}  on any file to resolve the folder to a specific lenght
import "@/styles/a.scss" */

/* Environment variables(.env) this is an API that we use to store special keys and endpoint that are know to be private to everyone in our script so not to expose this values to the public when the inspect our code it is applied using our import.meta.env."what we named our env variable" this .env has variable called SECRET we use to store more personal values that are not visible in anyway. note: we can change our prefix just like the VITE_ to any prefix we in the vite.config file with envPrefix. note we also have env.production mode variable snd staging mode to run staging we use npm run build -- --mode staging. note: to overwrite an env variable we just to assign the env while declaring our work on prod || dev */

/* vite multi page app how to bundle our pages, vite is known to bundle our application script once the client is in that particular application script on like webpack which bundle's all our application at once this is an advantage for vite  we will bundle in our vite.config.js.*/

/* libary/multiple lib and external dependenies in a new file project */

/*  image Optimization note we are able to reduce the size of image in the static folder to help improve the performance of our appplication we installed a image inspector like file-size and a plugin vite-plugin-image-optimizer to help config or img in vite by specifing the actual type of image and quatity value it should have */

/* Creating our Plugin with a CSV file which is a plane text we arrange this in a column format and specified the csv module in our script and assigning the value of the cvs which we imported to be Stringly and to load the value of this in our jsx, note: we imported our csv npm package , Note: csv does not work in scripts we have to do necessary transformation in our viteconfig in our created plugin by providing this name,  we use an "asyns transfrom(src, id) with two parameters which points to the src file where the csv file in located and an id", and we restrict our async transform to only search for file ending with //.csv$\.test(id) passing the file id,, we create a variable that converts the csv file into an JS object using the parse value from the csv-parse.sync package and pass in to parameter which is the src, and the method which the csv is arrange like being in column direction with it's data then console the (src,id) parameters and the varaible carrying our converted csv to JS object then use the return key word with a value holder of code which shows an export default with converted csv to JS object been stringify and exported */

/* plugin options  here we used our plugin to a different module and using the factory function in the viteconfig to insert our plugin, we remove the aysnc in the transform because we are now directly icluding our plugin in viteconfig note: we use the apply word in our plugin with the arguments config, command, mode to return the actual mode our plugin is going to work in */

/* Server Options is an Api lets us manipulate our vite server to custom our changes and make request in production and like development mode, in the viteconfig use server object inside change the port using the  port and insert a 4 digits value which you will like to load the server on both mode, strictport this obj in the server restrictly allows only the given port incase there's a change in the server port,  the proxy  let's us request a request in the production mode and developnment by specifing a path url where it should navagate to if specified also we can manipulate the preview server display by changing the port where it should host, applying a strictport not to change the port and open obj which automatically loads the proxy request when we preview our production mode, we have the headers object on both preview and developnment and giving a value we shold find in the header response*/

/* (Hmr) Hot Module Replacement*/

/*  */
import "./App.css"

/* import products from '../src/products.csv' */

const App = () => {

/*   const changeValue = JSON.stringify(products) */

// receiving connection from port 3334, vite client/server connection
/*  if(import.meta.hot){
  import.meta.hot.on('connected', (message) => {
    console.log(message)
 */
   // sending a message back to our server after we suscessfully connected
   /* import.meta.hot.send('ping', 'Hello Server!')
  }) */

 /*  import.meta.hot.on('pong', (message) => {
    console.log(message)
  })
 } */
  return (
 <>
  <div>
{/*     <pre>{changeValue}</pre> */}
<h1> VITE_STUDY_LESSON </h1>
  </div> 
 </>
  )
}

export default App