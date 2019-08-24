![Image of Yaktocat](http://www.tramelwoodard.com/img/navigation/tlw_icon.png)
# react-16.9-starter
Simple React 16.9 Starter Application (without Redux).

## Summary
This is a React 16.9 starter application meant for anyone who needs to generate a quick proof of concept template for work or to begin work on a personal project.

## Creation of Application
(**NOTE:** These instructions assume that you have already installed Node.js and can access npm from your computer's command line.)

This application can be generated from scratch by taking the following steps:

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

Babel is a **JavaScript compiler** that allows ECMAScript 2015+ code to a backwards compatible version of JavaScript that can be consumed by both modern and older browsers.

We will install two sub-packages of Babel:
1. @babel/core - core library of Babel responsible for backwards compatible transformation.
2. @babel/plugin-proposal-class-properties - package that resolves issues with React applications that cause **experimental syntax** (modern JavaScript) errors with some browsers.

Install both packages (version 7.5.5) with the "save" flag, which will save the packages to your package.json file:
```
npm install @babel/core@7.5.5 @babel/plugin-proposal-class-properties@7.5.5 --save
```

### Installing core React packages to your application
Now we will install the main components of the React application, the **react** package and the DOM (or browser) related functionality of the React application, the **react-dom** package.

Install both **react** and **react-dom** (version 16.9.0), along with using the **--save** flag to save the packages to the package.json file:
```
npm install react@16.9.0 react-dom@16.9.0 --save
```
