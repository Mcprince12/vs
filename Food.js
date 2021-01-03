class Food{
    constructor(){
        this.image = loadImage("images/Milk.png");
        this.foodStock =0;
        this.lastfed = 0;

        
    }
    display(){
        var x=80;
        var y=100;

        imageMode(CENTER);
        image(this.image,720,720,70,70);

        if(this.foodStock!=0){
            for(var i=0;i<this.foodStock;i++){
                if(i%10===0){
                    x=80;
                    y=y+50;
                }
                image(this.image,x,y,50,50);
                x=x+30;
            }
        }
    }

    getFoodStock(){
        
      var foodStockRef=database.ref('Food');
  foodStockRef.on("value",(data)=>{
    this.foodStock = data.val();
  });
    }
    updateStock(x){
        
          database.ref('/').update({
            Food:x,
            Feedtime:hour()
          })
    }
  
    getTime(){
   
    }

    bedroom(){
        background(bedImg, 550, 550);
    }

    bathroom(){
        background(bathImg, 550, 550);
    }

    garden(){
        background(gardenImg, 550, 550)
    }
}