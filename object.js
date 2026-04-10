
let userdetails = {
  fname : "Ritesh",
  lname : "Jain",
  age : "24",
  email : "rj4380790@gmail.com",
  skills : ["HTML", "CSS", "Javascript","React", "Botstrap", "Wordpress"],
  salary : function(){
    return 35000
  },
  address : {
    city : "FP Jhirka",
    pin : 122108,
    state : "Haryana",
    country : "India", 
  }
}
console.log(userdetails.salary());
console.log(userdetails.address);