class Animal{
    constructor(name){
        this.name = name;
}
}

class Dog extends Animal{
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }

    show (){
        console.log("Name: " + this.name);
        console.log("Breed: " + this.breed);
    }
}

let d= new Dog("Buddy", "Golden Retriever");
d.show();