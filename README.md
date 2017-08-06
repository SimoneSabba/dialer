## Getting started
Here the instruction to get start the project.

### Prerequisites
In order to build and run the application, you need to have installed
* [NodeJs](https://github.com/SimoneSabba/dialer.git)

This project has been built using Angular-cli. For any issues related to this, install it globally 

```npm install -g @angular/cli ```

### Setup

Install node modules
```javascript
npm install
```
Once everything has been installed succesfully, build the project
```javascript
npm start
```
Open your favourite browser and go to http://localhost:4200 to display the demo.

### Test
Run unit test
```javascript
npm test
```

### Tech Stack used
* Angular 2
* Typescript
* Bootstrap 4
* Lodash
* RxJs / Observable

### Improvement
I've used a service to store phone number calls. To achieve the same goal in a more efficient way could be used Redux to manage the state of the application.
Using Redux approach, these actions could be dispatched
``` START_CALL ``` and ``` END_CALL ```.
In the reducer, for the ``` START_CALL ``` action it could take the phone number and the duration and update the app state in case the phone number is not present already in the state, update it otherwise.
In case of the ``` END_CALL ``` action instead, return all the calls


### Frontend CodeTest

Please create a basic dialer UI **component**, implementing the interface as designed in the provided mockup.

The UI should be fully responsive so that the width and height can adapt to different use cases and viewports.

Only the *'Dial'* and *'Hangup'* buttons have a fixed size of 35px X 122px

The initial interface consists of a keypad and an phone number input.

![keypad](./keypad.png)

The dial button should switch the UI in to "oncall" state.
Clicking the dial button should emulate a call that lasts 10 seconds.
The "oncall" UI state is provided as follow:  

![oncall](./oncall.png)

Clicking the hangup button should terminate the call early, reverting the ui to the initial keypad immediately.

At the end of any call the component should invoke a callback reporting following arguments:

* The total count of calls made
* The 3 most called numbers with call count foreach sorted by call count.

Every call started with the dial button has to be counted against the corresponding phone number.

