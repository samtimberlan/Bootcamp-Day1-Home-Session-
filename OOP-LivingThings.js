 
  
 
 let livingThing = function  (typeOfOrganism)
 {
     this.typeOfOrganism = typeOfOrganism;
 }

 let plantObject = new livingThing("Plant");
 let animalObject = new livingThing("Animal");

 livingThing.prototype.reproduce = ()=>
 {
     console.log("I have just reproduced");
 }

 livingThing.prototype.eat = (food) =>
 { 
     console.log("I have just eaten " + food);
 }

 let plant = function (typeOfPlant)
 {
    this.typeOfPlant = typeOfPlant;
 } 


 
let animal = function (typeOfanimal)
 {
    this.typeOfanimal = typeOfanimal;
 } 



plant.prototype = plantObject;
animal.prototype = animalObject;


let CoconutTree1 = new plant("Coconut");
CoconutTree1.eat("Soil nutrient");

let Lion1 = new animal("Lion");
Lion1.eat("a cobra");
