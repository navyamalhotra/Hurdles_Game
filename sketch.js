var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var total, player1, player2, player3, player4;

var track, player1_img, player2_img, player3_img, player4_img;

function preload(){

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    form.hide();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
