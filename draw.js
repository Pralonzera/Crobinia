const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const row = canvas.height / scale;
const columns = canvas.width / scale;
const baixo = document.getElementById("baixo")
const cima = document.getElementById("cima")
const esq = document.getElementById("esq")
const dirt = document.getElementById("dirt")
var  tert = 0;


this.vel = 50;

var snake;

(function setup(){

    snake = new Snake();
    fruit = new Fruit();


    fruit.pickLocation();

   
    

    window.setInterval(()=>{

        ctx.clearRect(0, 0, canvas.height, canvas.width);
        snake.update();
        snake.draw();
        fruit.draw();
    
        
        
        if (snake.eat(fruit)){
            
            this.vel-=5;
            
            fruit.pickLocation();
        }
        
    },50)
    console.log(vel);


}());

   


    cima.addEventListener('click', function(){
        switch(tert){
        case 0: 
        snake.xSpeed = 0;
        snake.ySpeed = -scale * 1;
        tert = 1;}   
    })

    baixo.addEventListener('click', function(){
        switch(tert){
        case 0:
        snake.xSpeed = 0;
        snake.ySpeed = scale * 1;
        tert = 1;}
            })

    esq.addEventListener('click', function(){
        switch(tert){
        case 1:
        snake.xSpeed = -scale * 1;
        snake.ySpeed = 0; 
        tert = 0;}
    })

    dirt.addEventListener('click', function(){
        switch(tert){
        case 1:
        snake.xSpeed = scale * 1;
        snake.ySpeed = 0;
        tert = 0;}
    })


    window.addEventListener('keydown', ((evt)=>{
        const direction = evt.key.replace('Arrow', '');
        
        snake.changeDirection(snake.direct, direction);
        
    }))
