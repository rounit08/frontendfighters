let name = {
    firstname: "rounit",
    lastname: "sinha",
    printFullName: function () {
      console.log(this.firstname + " " + this.lastname);
      //here the this keyword is directing to the name object
    },
  };
  
  name.printFullName();
  
  let name2 = {
    firstname: "prof",
    lastname: "snape",
    //   here we could have added this printFullName method but that's not a good wayto code
    //   printFullName: function () {
    //     console.log(this.firstname + " " + this.lastname);
    //     //here the this keyword is directing to the name object
    //   },
  };
  
  //functionborrowing comes into picture
  //---------CALL METHOD--------------
  
  name.printFullName.call(name2);
  //now we will get both rounit sinha and prof snape on console
  
  //we can also separate all the methods in diff const and then we can use call method to use it on diff objects
  
  // likethis
  
  // let name = {
  //     firstname: "rounit",
  //     lastname: "sinha"
  //   };
  
  // let printFullName = function () {
  //       console.log(this.firstname + " " + this.lastname);
  //       //here the this keyword is directing to the name object
  //     },
  
  //  printFullName.call(name);
  
  //   let name2 = {
  //     firstname: "prof",
  //     lastname: "snape"
  //   };
  
  //   //functionborrowing comes into picture
  //   //call method
  
  //  printFullName.call(name2);
  
  //----------APPLY METHOD----------
  
  // what if we have many params present then we use apply method
  // the apply method is different from call method only in terms of style of passing params
  //as in call method we are passing arguments separately, we pass in array in apply method
  
  //--------BIND METHOD-------------
  //THIS IS ALSO SAME TO CALL BUT IN THIS IT WILLNOT PRINT ANYTHING
  //IT WILL ONLY BIND DATA TO METHOD
  // IT WILL RETURN A FUNCTION AND WHICH CAN BE STORED AND CALLED AT DIFFERENT PLACE SOME OTHER TIME
  