// classes: blueprint what we design  and objects :
class main {
    constructor(name , legCount , speaks, walk){
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
        this.walk = walk;
    }
    speak(){
        console.log(`hi there ${this.speaks}`);
        
    }
    walks(){
        console.log(` here my ${this.name}  can run ${this.walk}`);
        
    }

}
let dog = new main("dog" , 4 , "bhow bhow" ,"faster" );
console.log(dog);
dog.speak();
dog.walks();
