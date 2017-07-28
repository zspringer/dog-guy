var id = 0;//creat an id holder

function Dog(name, picture){ //constructor function to create the dogs
    this.id = id;
    this.name = name;
    this.picture = picture;
    this.status = ["Snarl", "Smiling"];
    this.petCount = 0;

    id++  //an id incrementor so that you can loop over the dogs
}

var dogGuy = { //create the guy and have an array with all the dogs in there
    dogs[]
}

//create the dogs
var dog1 = new Dog("Mr. Champ", "http://res.cloudinary.com/dmyvekzok/image/upload/a_auto_right/v1501207947/champ1_t2v8py.jpg")
var dog2 = new Dog("Lazy Guy", "http://res.cloudinary.com/dmyvekzok/image/upload/a_auto_right/v1501207956/champ2_cubjsc.jpg")
var dog3 = new Dog("Christmas Pup", "http://res.cloudinary.com/dmyvekzok/image/upload/a_auto_right/v1501207962/champ3_lz1p2i.jpg")

//push the dogs into the dogs[]
dogGuy.dogs.push(dog1, dog2, dog3);

console.log(dogs)




