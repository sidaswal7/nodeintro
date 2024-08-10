console.log("Hello Nodejs");

let product = (a,b)=> a*b;
console.log(product(3,4))


let student = {
    name: "Siddhant",
    age: 21,
    getInfo : function(){
        console.log("My name is", this.name)
    }
}

student.getInfo()

let arr = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon']

console.log(arr.map((elm)=> elm.trim()===''? 'empty string': elm))