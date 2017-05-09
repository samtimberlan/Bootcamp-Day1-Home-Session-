 
 
 const livingThing = function  (typeOfOrganism)
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

 const plant = function (typeOfPlant)
 {
    this.typeOfPlant = typeOfPlant;
 } 

let herbObject = new plant("Herbs");
let treeObject = new plant("Trees");
let shrubObject = new plant("Shrubs");
 
const herb = function (typeOfherb)
 {
    this.typeOfherb = typeOfherb;
 } 

const tree = function (typeOfTree)
 {
    this.typeOfTree = typeOfTree;
 } 

const shrub = function (typeOfherb)
 {
    this.typeOfherb = typeOfherb;
 } 

plant.prototype = plantObject;
herb.prototype = herbObject;
tree.prototype = treeObject;
shrub.prototype = shrubObject;

const CoconutTree1 = new tree("Coconut");
console.log(CoconutTree1 instanceof plant);
//CoconutTree1.eat("Soil nutrient");