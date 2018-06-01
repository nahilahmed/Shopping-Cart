var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopcart');

var products = [
    new Product({
       imagepath:"https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/FIFA18cover.png/220px-FIFA18cover.png",
       title:"FIFA'18",
       description:"FIFA 18 is a football simulation video game in the FIFA series of video games, developed and published by Electronic Arts and was released worldwide on 29 September 2017 for Microsoft Windows",
       price:12
    }),
    new Product({
       imagepath:"https://media.takealot.com/covers_tsins/44417471/xnb1-zoom.jpg",
       title:"FIFA'17",
       description:"FIFA 17 is a football simulation video game in the FIFA series of video games, developed and published by Electronic Arts and was released worldwide on 29 September 2017 for Microsoft Windows",
       price:10
    }),
    new Product({
       imagepath:"https://s3.gaming-cdn.com/images/products/836/271x377/836.jpg",
       title:"FIFA'16",
       description:"FIFA 16 is a football simulation video game in the FIFA series of video games, developed and published by Electronic Arts and was released worldwide on 29 September 2017 for Microsoft Windows",
       price:9
    }),
    new Product({
       imagepath:"https://images-na.ssl-images-amazon.com/images/I/918LMZtD2fL._SL1500_.jpg",
       title:"FIFA'15",
       description:"FIFA 15 is a football simulation video game in the FIFA series of video games, developed and published by Electronic Arts and was released worldwide on 29 September 2017 for Microsoft Windows",
       price:10
    }),
    new Product({
       imagepath:"https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/FIFA_14.jpeg/250px-FIFA_14.jpeg",
       title:"FIFA'14",
       description:"FIFA 14 is a football simulation video game in the FIFA series of video games, developed and published by Electronic Arts and was released worldwide on 29 September 2017 for Microsoft Windows",
       price:12
    }),
    new Product({
       imagepath:"https://images-na.ssl-images-amazon.com/images/I/61CrvDHXceL._SX342_.jpg",
       title:"FIFA'13",
       description:"FIFA 13 is a football simulation video game in the FIFA series of video games, developed and published by Electronic Arts and was released worldwide on 29 September 2017 for Microsoft Windows",
       price:10
    })
]

var done = 0;
for(var i = 0 ; i < products.length ; i++ ){
    products[i].save(function(err,res){
      done++;
      if(done === products.length){
        exit();
      }
    })
}

function exit(){
  mongoose.disconnect();
}
