![Image of Yaktocat](http://www.tramelwoodard.com/img/navigation/tlw_icon.png)
# react-16.9-starter
Simple React 16.9 Starter Application (without Redux).

很简单REACT 16.9的入门应用（没有Redux）。

## Summary
This is a React 16.9 starter application meant for anyone who needs to generate a quick proof of concept template or for a personal project.
### Requirements
1. Git already installed on your computer ([Download Git](https://git-scm.com/downloads))
2. Node.js installed on your computer ([Download Node.js](https://nodejs.org/en/download/))
3. Zip file extractor installed on your computer ([Download WinZip](https://www.winzip.com/win/en/downwz.html))
4. Knowlege of your computer's command line interface (Terminal, CMD, Git Bash)


## Installation of Application
If you would like to INSTALL THIS REACT STARTER, please follow the instructions below (if you would like to BUILD THIS REACT APPLICATION FROM SCRATCH, scroll down to the **CREATION OF APPLICATION** section)
### Installation Requirements
In order to install this beginner app and begin constructing your own modified application (without create-react-app), do the following:

1. Ensure that you have Node.js installed on your computer.
2. Ensure that you have Git installed on your computer.
3. Open a command line application (Terminal for Mac, CMD for Windows, Git Bash for Mac or Windows)
4. Navigate to a directory where you will store your React application.
5. Install the application using one of the 3 options below:

### Clone (or Download) the Application
#### 1）Clone Application using HTTPS:
Clone the application to your preferred parent directory (Git will create the application directory itself) using the following Git command:
```
git clone https://github.com/tramel-woodard/react-16.9-starter.git
```
#### 2）Clone Application using SSH:
Clone the application to your preferred parent directory (Git will create the application directory itself) using the following Git command:
```
git clone git@github.com:tramel-woodard/react-16.9-starter.git
```
#### 3) Download Application (ZIP):
1. Ensure that you have WinZip (or similar program to unpackage zip files) installed on your computer.
2. Confirm where you will download the zip file.
3. Right-click this link, select "Save link as..." and save to your preferred directory: [React Application Download Link](https://github.com/tramel-woodard/react-16.9-starter/archive/master.zip)
4. Right-click the zip file and select **"Extract to react-16.9-starter-master/"** option.

### Install NPM Packages for Application
Once the application has either been cloned using Git or downloaded and unzipped, visit the parent directory of the folder in your preferred command line interface. Change into the application directory:
```
cd react-16.9-starter
```

Run the Node Package Manager installation command inside the application directory:
```
npm install
```
Node will then proceed to install all of the required packages for the React application. This may take several minutes, depending on your Internet speed and the speed of your computer.

### Running the Application on Your Computer
Once all of the Node packages have been installed, you will be able to run the application before you make any modifications to it.
Inside of the package.json file located at the root of your React application, you will find a "dev" script:

***package.json***
```
  . . .
  "scripts": {
    "dev": "parcel src/index.html",
    . . .
```
This "dev" command will build your React application, and then open a browser window at **localhost:1234" (specified local address for applications running on **live-server**).
At the root of your application, run the following "dev" command to launch your React application in your default browser:
```
npm run dev
```
Node should generate the files required for the development version of your application and open your React application in your default browser.

### Modifications to Application (Live Reloading)
Once your React application is running, you can add, edit or modify the application in any way. Once you modify or add any files, **live-server** will sense any changes to the project and will reload the application in the browser.
If you code any errors while updating the site, live-server will render the browser window **all black** and will specify the particular error that caused the application to stop working.

### Building the React Application for Production
#### Build the application JavaScript files
Once you are ready to publish your finished React application to your production server (or development/test server), you will need to run the "build" command.
Inside the package.json file, you will find a "build" command in the "scripts" object:
***package.json***
```
  . . .
  "scripts": {
    . . .
    "build": "parcel build src/index.html",
    . . .
```
This "build" command uses the Parcel package to build an entire "browser ready" JavaScript application to a "dist" folder in the root of the React application directory.
Run the "build" command to build the files, create a "dist" directory and generate the files inside of this directory:
```
npm run build
```
You will then see all of the appropriate files (including any stylesheets or images you may have added) in the "dist" directory.

#### Moving Production-Ready Files to Your Production Server
Once you have located the "dist" folder, open whatever application you use to transfer files to your production server (Amazon Web Server, FTP Program, etc.) and move the "dist" files to your productino server's **public** folder.

Your application should now be viewable on whatever domain you have created for your application.


## Creation of Application
If you would like to BUILD THIS REACT APPLICATION FROM SCRATCH, please follow the instructions below (if you would like to INSTALL THE REACT STARTER, scroll up to the **CREATION OF APPLICATION** section)

This application can be created from scratch (without the create-react-app command line tool).

This is so you'll have a better understanding of what goes into creating a React application.

We will start by taking the following steps:

### Build your application directory
Open your preferred command line interface (i.e. Terminal on Mac, Run CMD on Windows, Git Bash on Mac or Windows). Locate a preferred space on your computer and create the **react-16.9-starter** directory:
```
mkdir react-16.9-starter
```

Change into the **react-16.9-starter** directory:
```
cd react-16.9-starter
```

### Initialize your application 
Generate a new package.json file in your new React directory:
```
npm init -y
```
(the **-y** switch will automatically populate all of package.json entries with their respective default values)

You should now have a package.json with the following contents:
```
{
  "name": "react-16.9-starter",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

### Installing your application bundling software
Your React application will need to bundle the numerous source files into compact JavaScript files that will be eventually either served from your computer or your host provider.

For this bundling functionality, we will install Parcel Bundler (version 1.12.3). Use NPM to install Parcel Bundler and save it to your package.json file (**npm i parcel-bundler** will install the package to your directory and the **--save** flag will save this package reference to your package.json file)
```
npm install parcel-bundler@1.12.3 --save
```

### Installing backwards compatibility packages to your application
Not all modern JavaScript methods are rendered properly on older browsers and devices. Because of this, we will need to install a couple of Babel packages.

Babel is a **JavaScript compiler** that allows ECMAScript 2015+ code to be compiled into a backwards compatible version of JavaScript that can be consumed by both modern and older browsers.

We will install two sub-packages of Babel:
1. @babel/core - core library of Babel responsible for backwards compatible transformation.
2. @babel/plugin-proposal-class-properties - package that resolves issues with React applications that cause **experimental syntax** (modern JavaScript) errors with some browsers.

Install both packages (version 7.5.5) with the "save" flag, which will save the packages to your package.json file:
```
npm install @babel/core@7.5.5 @babel/plugin-proposal-class-properties@7.5.5 --save
```

### Installing core React packages to your application
Now we will install 1) the **react** package, which contains the main components of the React framework and 2) the **react-dom** package, which contains the DOM (or browser) related functionality of the React application, .

Install both **react** and **react-dom** (version 16.9.0), along with the **--save** flag to save the packages to the package.json file:
```
npm install react@16.9.0 react-dom@16.9.0 --save
```

### Installing Packages for Route and State Management
Now we will install the both the **react-router** and **react-router-dom** packages, which will allow us to maintain our React applications views.

Install both **react-router** and **react-router-dom** (version 5.0.1), along with the **--save** flag to save the packages to the package.json file:
```
npm install react-router@5.0.1 react-router-dom@5.0.1 --save
```

We will also need to install the **history** package in order to manage session history within our React application.

Install **history** (version 4.9.0) along with the **--save** flag to save the packages to the package.json file:
```
npm install history@4.9.0 --save
```

### Installing live server for development environment
For efficient development and rendering of the development environment, we will install the **live-server** package.

Install the live-server package (version 1.2.1) along with the **--save** flag to save the package to the package.json file:
```
npm install live-server@1.2.1 --save
```

### Installing Bootstrap for Application Styling
We will install the **bootstrap**, **popper.js** and **jquery** packages to help stylize the application's UI.

Install the Bootstrap package (version 4.3.1), Popper.js (version 1.14.7) and jQuery package (version 3.4.0) along with the **--save** flag to save the package to the package.json file:
```
npm install bootstrap@4.3.1 popper.js@1.14.7 jquery@3.4.0 --save
```

## Creation of application source files
Now that we have build the scaffolding for the application, it is time to build out the resource files that will be used to build the React application.

So far, the application has three files:
```
react-16.9-starter
  |-- node_modules
  |-- package.json
  |-- package-lock.json
```

We will now add a **src** directory with the following files inside:

```
react-16.9-starter
  |-- src
    |-- components
      |-- App.js
      |-- Comment.js
      |-- Header.js
      |-- Post.js
      |-- User.js
    |-- index.css
    |-- index.html
    |-- index.js
  |-- node_modules
  . . .
```
