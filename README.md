I'm designing this app to be a web-based replica of the Hanamikoji card game designed by Kota Nakayama for [EmperorS4 Technology Co., Ltd.](https://en.emperors4.com/game/hanamikoji) and [Deep Water Games](https://www.deepwatergaming.com). I recently purchased this simple (but frustratingly tricky!) 2 player game and I've really enjoyed it so I figured it'd be fun and not terribly difficult to try and replicate it in the browser, particularly because I've recently been brushing up on CSS grid and flexbox and I thought that these tools would lend themselves nicely to the layout of the game board/sections. I'm also aiming to set up authentication and allow 2 players to sign in and play against eachother in real-time and also save/resume in-progress games (of course just for fun, not commercially). 


##User stories
- When a new round begins the deck will be randomly shuffled and 1 unknown card will be removed from the deck. 6 cards will then be dealt to each player while the remaining cards will form the draw pile
- As each player plays cards and actions the board will be updated to physically show what was played (maybe the cards and actions will be highlighted for the current player until the end of their turn), and there will also be a text based description of what happened (maybe as an enhancement it could track everything that happened for the whole game and be saved to those players' accounts)
- At the start of each player's turn during the Action Phase, they will draw one card and select one action to play. Play switches between the players until each has played their 4 actions.
  * To select an action, a player will select the action, which will then be updated in the UI to show that it has been disabled.
  * To place an Item Card for a geisha, a player will select the geisha and the matching color card will be pulled from their hand and placed. 
  * If a player tries to select a geisha or action for which they cannot play, the UI will inform them why they cannot play
- After the Action phase the players will determine who, if anybody, has gained the favor of each of the geishas. If somebody has gained favor, the UI will be updated to show which player currently has gained favor of that geisha. Then each player will count the total of Charm Points they have gained, at which point the UI will be updated with the score and a winner may potentially be declared.
- In addition to UI showing the status of cards played and favors gained, each player should be able to see or determine the folowing: total Charm Points , who's turn it is, the current phase, current round, actions each player has played this round



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
