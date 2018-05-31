var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopcart');

var products = [
    new Product({
       imagepath:"https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiB_Knmwq_bAhXKu48KHYzNBRwQjRx6BAgBEAU&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFIFA_18&psig=AOvVaw1I7ulPSQh0jSzHf1J32yVl&ust=1527841376005773",
       title:"FIFA'18",
       description:"FIFA 18 is a football simulation video game in the FIFA series of video games, developed and published by Electronic Arts and was released worldwide on 29 September 2017 for Microsoft Windows",
       price:12
    }),
    new Product({
       imagepath:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-eds-ssl.xboxlive.com%2Fimage%3Furl%3D8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcoYBrJRe6ocDBW_8MGfBUlzYTrjKUmdO25Ts6oNYyGWBG_vBuhvVlN8CuLJP6uU1wn16lVEEEJ74IyrUqY3l9m8nBufx5BdEi.g9_IlixeAwdtzDU_ti1y68UbaOz3anUiNSVqfMGS7TaTtjbI3TBtiBX587HdwfLl5_FrlEzE7E-%26w%3D200%26h%3D300%26format%3Djpg&imgrefurl=https%3A%2F%2Fwww.microsoft.com%2Fen-us%2Fstore%2Fp%2Fea-sports-fifa-17%2Fbtvffddz0tl4&docid=E56TBMBoH5teaM&tbnid=KjH7eQc0SM6fsM%3A&vet=10ahUKEwiolorIw6_bAhUFMY8KHQxyAvwQMwjSASgAMAA..i&w=200&h=300&client=ubuntu&bih=630&biw=1366&q=fifa%2017&ved=0ahUKEwiolorIw6_bAhUFMY8KHQxyAvwQMwjSASgAMAA&iact=mrc&uact=8",
       title:"FIFA'17",
       description:"FIFA 17 is a football simulation video game in the FIFA series of video games, developed and published by Electronic Arts and was released worldwide on 29 September 2017 for Microsoft Windows",
       price:10
    }),
    new Product({
       imagepath:"https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj63v_fw6_bAhUkTo8KHWy4A-0QjRx6BAgBEAU&url=https%3A%2F%2Fwww.snapdeal.com%2Fproduct%2Ffifa-16-for-ps4%2F660310128306&psig=AOvVaw2oNheZUZDKeMEk0qW4b4HH&ust=1527841626337363",
       title:"FIFA'16",
       description:"FIFA 16 is a football simulation video game in the FIFA series of video games, developed and published by Electronic Arts and was released worldwide on 29 September 2017 for Microsoft Windows",
       price:9
    }),
    new Product({
       imagepath:"https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiu_Mrww6_bAhVBpI8KHcprCVcQjRx6BAgBEAU&url=https%3A%2F%2Fwww.amazon.co.uk%2FElectronic-Arts-FIFA-15-PS4%2Fdp%2FB00KHJLDPA&psig=AOvVaw06huSpDGwCuA0mUK8F62wq&ust=1527841665582839",
       title:"FIFA'15",
       description:"FIFA 15 is a football simulation video game in the FIFA series of video games, developed and published by Electronic Arts and was released worldwide on 29 September 2017 for Microsoft Windows",
       price:10
    }),
    new Product({
       imagepath:"https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjl7YuPxK_bAhVJQo8KHfNSAJYQjRx6BAgBEAU&url=https%3A%2F%2Fwww.amazon.co.uk%2FElectronic-Arts-11119-FIFA-PS3%2Fdp%2FB00CECVR36&psig=AOvVaw0Z9Ykj1uXHUrVugZArF7-j&ust=1527841728265088",
       title:"FIFA'14",
       description:"FIFA 14 is a football simulation video game in the FIFA series of video games, developed and published by Electronic Arts and was released worldwide on 29 September 2017 for Microsoft Windows",
       price:12
    }),
    new Product({
       imagepath:"https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjIq9-gxK_bAhWHQo8KHRlbDxYQjRx6BAgBEAU&url=https%3A%2F%2Fwww.amazon.co.uk%2FElectronic-Arts-FIFA-13-PS3%2Fdp%2FB0083SMX3S&psig=AOvVaw0HNv1K87JdLlaH57ALRsSe&ust=1527841766842173",
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
