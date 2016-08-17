#Component Builder

This is an incomplete experiment to load in React Components to glean information about the component and the App.

There is a working directory structure which shows the files and directories within the project directory.
The idea is to be able to open the JS/JSX files into various components to show the information.
Currently using Abstract Syntax Tree to get information about each component file.

The plan is to be able to have a complete overview of an App, showing the components within it, there file locations and any lint errors. It is part of a longer term vision.

Uses React.js, Redux, Node.js, Express and JavaScript.

React UI talking to a Node server using express, opens files on the server side and returns the information in JSON.

##Motivation
The idea behind this is to have more developer tools. Currently JS developers only have Text editors or IDE's neither of which show an overview of the JS Project. The long term plan is to have this running in Electron as a downloadable program to run on the developers machine as a new set of tools.
