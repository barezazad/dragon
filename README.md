# Dragon

![dragon](src/assets/img/dragon2.png)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

- To generate a new component
  `ng generate component component-name`
  `ng generate directive|pipe|service|class|guard|interface|enum|module`
- To generate module and flat component inside module
  `ng g m user --routing`
  `ng g c user --module user --skip-tests --flat`

## Build

Run `ng build --configuration production` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Electron Environment

- Run electron app `npm run electron`
- Build app to windows , linux and MAC
  `npm run package-win` , `npm run package-linux` , `npm run package-mac`

For silent print we have to do http call for backend in there we have to receiving html/javascript page , and we have method to print the html page.
And it support dynamic printing base on name the printer.

- End of html section,we have to put this tag to load print method
  `<body onload="posPrint(document.getElementById('pos_print').value)"></body>`
- Then we have script tag to printing
  `<script type="text/javascript">`
  `function posPrint(deviceName) {`
  `const electron = require('electron')`
  `var options = { silent: true, deviceName: deviceName,}`
  `const BrowserWindow = electron?.remote?.BrowserWindow;`
  `let win = BrowserWindow?.getFocusedWindow();`
  `win?.webContents?.on('did-finish-load', () => {`
  ` win?.webContents?.print(options, (success, failureReason) => {`
  `if (!success) {`
  `console.log('printing has been failed : ', failureReason);`
  `} else {`
  `console.log('printing has been successfully.');`
  `}`
  `window.close();`
  `});`
  ` });`
  `}`
  `</script>`
