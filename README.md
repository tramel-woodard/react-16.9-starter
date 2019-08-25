![Image of Yaktocat](http://www.tramelwoodard.com/img/navigation/tlw_icon.png)
# react-16.9-starter
Simple React 16.9 Starter Application (without Redux).

很简单REACT 16.9的入门应用（没有Redux）。

## Summary
This is a React 16.9 starter application meant for anyone who needs to generate a quick proof of concept template for work or to begin work on a personal project.
### Requirements
1. Git already installed on your computer ([Download Git](https://git-scm.com/downloads))
2. Node.js installed on your computer ([Download Node.js](https://nodejs.org/en/download/))
3. Zip file extractor installed on your computer ([Download WinZip](https://www.winzip.com/win/en/downwz.html){:target="_blank" rel="noopener"})
4. Knowlege of command line interface (Terminal, CMD, Git Bash)


## Installation of Application
In order to install this beginner app and begin constructing your own modified application (without create-react-app), do the following:

1. Ensure that you have Node.js installed on your computer.
2. Open a command line application (Terminal for Mac, CMD for Windows, Git Bash for Mac or Windows)
3. Navigate to a directory where you will store your React application.
4. Install the application using one of the 3 options below:

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
1. Confirm where you will download the zip file.
2. Right-click this link, select "Save link as..." and save to your preferred directory: [React Application Download Link](https://github.com/tramel-woodard/react-16.9-starter/archive/master.zip)
3. Right-click the zip file and select **"Extract to react-16.9-starter-master/"** option.



## Creation of Application
(**NOTE:** These instructions assume that you have already installed Node.js and can access npm from your computer's command line.)

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

Install both **react** and **react-dom** (version 16.9.0), along with using the **--save** flag to save the packages to the package.json file:
```
npm install react@16.9.0 react-dom@16.9.0 --save
```

### Installing live server for development environment
For efficient development and rendering of the development environment, we will install the **live-server** package.

Install the live-server package (version 1.2.1) along with the **--save** flag to save the package to the package.json file:
```
npm install live-server@1.2.1 --save
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
