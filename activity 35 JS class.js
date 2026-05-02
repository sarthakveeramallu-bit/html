let person = {
    name: "Alice",
    age: 20,
    studentInfo: function () {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
    }
};

person.studentInfo();