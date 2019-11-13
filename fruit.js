function Fruit(){

    this.xFruit;
    this.yFruit;
    
    this.pickLocation = function() {
        this.xFruit = (Math.floor(Math.random() * row - 1) + 1) * scale;
        this.yFruit = (Math.floor(Math.random() * columns - 1) + 1) * scale;

        
    }

    this.draw = function() {

        ctx.fillStyle = "#c44b4b"
        ctx.fillRect(this.xFruit, this.yFruit, scale, scale);
    }


}

