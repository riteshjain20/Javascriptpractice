

// class A {
//   show(x,y){
//     let add = x+y;
//     console.log("Addition is " + add);
//     console.log("oops concept");
//   }
// }
// let a = new A();
// a.show(5,55);


// class A {
//   constructor(){
//     console.log('its a constructor');
//   }
// }
// new A();


// class A {
//   static show(){
//     console.log("its a static method");
//   }
// }
// A.show();


class Student {
  constructor(fname,lname, city){
    this.fname = fname;
    this.lname = lname;
    this.city = city; 
  }
}
let s1 = new Student("Ritesh", "Jain", "FP Jhirka");
console.log(s1);