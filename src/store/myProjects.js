import tictactoe1 from "./images/TicTacToe/img-1.jpg";
import tictactoe2 from "./images/TicTacToe/img-2.jpg";
import tictactoe3 from "./images/TicTacToe/img-3.jpg";
import tictactoe4 from "./images/TicTacToe/img-4.jpg";
import tictactoe5 from "./images/TicTacToe/img-5.jpg";
import tictactoe6 from "./images/TicTacToe/img-6.jpg";
import tictactoe7 from "./images/TicTacToe/img-7.jpg";
import tictactoe8 from "./images/TicTacToe/img-8.jpg";
import threeJS1 from "./images/threeJsGames/img-1.jpg";
import threeJS2 from "./images/threeJsGames/img-2.jpg";
import threeJS3 from "./images/threeJsGames/img-3.jpg";
import threeJS4 from "./images/threeJsGames/img-4.jpg";
import threeJS5 from "./images/threeJsGames/img-5.jpg";
import angularChat1 from "./images/angularChat/img-1.jpg";
import angularChat2 from "./images/angularChat/img-2.jpg";
import angularConfig1 from "./images/angularConfigurator/img-1.jpg";
import angularConfig2 from "./images/angularConfigurator/img-2.jpg";
import angularConfig3 from "./images/angularConfigurator/img-3.jpg";
import angularConfig4 from "./images/angularConfigurator/img-4.jpg";
import angularConfig5 from "./images/angularConfigurator/img-5.jpg";
import firstVue1 from "./images/firstVueProject/img-1.jpg";
import firstVue2 from "./images/firstVueProject/img-2.jpg";
import firstVue3 from "./images/firstVueProject/img-3.jpg";
import secondVue1 from "./images/secondVueProject/img-1.jpg";
import secondVue2 from "./images/secondVueProject/img-2.jpg";
import secondVue3 from "./images/secondVueProject/img-3.jpg";
import chatVue1 from "./images/vueChat/img-1.jpg";
import chatVue2 from "./images/vueChat/img-2.jpg";
import walletVue1 from "./images/vueWallet/img-1.jpg";
import walletVue2 from "./images/vueWallet/img-2.jpg";
import walletVue3 from "./images/vueWallet/img-3.jpg";
import firstReact1 from "./images/firstReactProject/img-1.jpg";
import firstReact2 from "./images/firstReactProject/img-2.jpg";
import firstReact3 from "./images/firstReactProject/img-3.jpg";
import firstReact4 from "./images/firstReactProject/img-4.jpg";
import firstReact5 from "./images/firstReactProject/img-5.jpg";
import firstReact6 from "./images/firstReactProject/img-6.jpg";

const projects = [
  {
    title: "My First React Project",
    description: [
      "this application is sort of online shop (more like a simple template)",
      'I make this to enter in "react world"',
      "you can buy and if you are the mananger of the site you have a password and account and you can add some data in it",
    ],
    image: [firstReact1, firstReact2, firstReact3, firstReact4, firstReact5,firstReact6],
    github: "https://github.com/FrunzaAndrei/myFirstProject-in-React",
    tryIt: "https://myfirst-react-project.herokuapp.com",
  },
  {
    title: "ThreeJS Game",
    description: [
      "the game will start immediately after pressing the start button, so be ready!",
      "use the arrow-keys (left-right) or a-key and s-key to avoid the obstacles",
      "the aim of the game is to make the highest score and assign your name to it",
      "good luck",
    ],
    image: [threeJS1, threeJS2, threeJS3, threeJS4, threeJS5],
    github: "https://github.com/FrunzaAndrei/GameThreeJS-and-Firebase",
    tryIt: "https://threejs-games-3d.herokuapp.com/",
  },
  {
    title: "Wallet vue project",
    description: [
      "this application mananges your expenses",
      "you can to add some expense by completing all the fields and then click-ing on add button",
      "you can select the type of expense and see what is your total amount spent",
    ],
    image: [walletVue1, walletVue2, walletVue3],
    github: "https://github.com/FrunzaAndrei/vue--expense-management-application",
    tryIt: "https://expenses-management-app.herokuapp.com",
  },
  {
    title: "Vue Chat",
    description: [
      "this is my chat app",
      "I used vue-vuex and firebase to make the app",
      "you can log-in with google acount or by creating an acount with any email and any password",
    ],
    image: [chatVue1, chatVue2],
    github: "https://github.com/FrunzaAndrei/vue-Chat",
    tryIt: "https://vue-firebase-chat.herokuapp.com/",
  },
  {
    title: "My second vue project",
    description: [
      "this is a basic example of an app made with vue , vuex and three.js",
      "after you've set the parameters you will need to click on 'Scene' to see what you just did",
    ],
    image: [secondVue1, secondVue2, secondVue3],
    github: "https://github.com/FrunzaAndrei/vue-vuex-threejs-basic-project",
    tryIt: "https://second-vue-vuex-project.herokuapp.com",
  },
  {
    title: "My first vue project",
    description: [
      "this is a very basic example of an app made with vue and three.js",
    ],
    image: [firstVue1, firstVue2, firstVue3],
    github: "https://github.com/FrunzaAndrei/vue-threejs-basic-project",
    tryIt: "https://first-vue-threejs-project.herokuapp.com/",
  },
  {
    title: "Angular Chat",
    description: [
      "this is my chat app",
      "I used angular and firebase to make the app",
      "you can log-in with google acount or by creating an acount with any email and any password",
    ],
    image: [angularChat1, angularChat2],
    github: "https://github.com/FrunzaAndrei/Angular-Firebase-Chat",
    tryIt: "https://angular-firebase-chat.herokuapp.com",
  },
  {
    title: "Configurator Shape",
    description: [
      "this is my small and basic app configurator",
      "I used angular and three.js library for this app",
      "to try my app you will need to register with any email and password than click on 'Instantiate' button",
      "then you can modify each property to any object",
    ],
    image: [
      angularConfig1,
      angularConfig2,
      angularConfig3,
      angularConfig4,
      angularConfig5,
    ],
    github:
      "https://github.com/FrunzaAndrei/Angular-Configurator-With-ThreeJS-",
    tryIt: "https://configurator-angular.herokuapp.com/",
  },
  {
    title: "TicTacToe Game",
    description: [
      "this games is only for computer/laptop",
      "this is my tictactoe game",
      "this is a 2 players game",
      "you have to click on boxes ",
      "have fun!",
    ],
    image: [
      tictactoe1,
      tictactoe2,
      tictactoe3,
      tictactoe4,
      tictactoe5,
      tictactoe6,
      tictactoe7,
      tictactoe8,
    ],
    github: "https://github.com/FrunzaAndrei/TicTacToe3DwithThreeJS",
    tryIt: "https://tic-tac-toe-game-3d.herokuapp.com/",
  },
];

export default projects;
