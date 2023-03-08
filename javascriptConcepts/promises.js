const twentyBatch = ["vaishnavi", "rounit", "aryan"];

const students = addStudents(twentyBatch); // entry number

// students
//   .then(function (entryNmmber) {
//     console.log(entryNmmber);
//   })
//   .catch(function () {
//     alert("student already present");
//   });

async function registration() {
  try {
    const reg = await addStudents();
    console.log(reg);
  } catch (err) {
    console.log(err);
  }
}

registration();

function addStudents() {
  return new Promise(function (resolve, reject) {
    if (!newRegistration(twentyBatch)) {
      reject("students are already registered");
    }
    const entryNmmber = "20bcs97";
    if (entryNmmber) {
      resolve(entryNmmber);
    }
  });

  // return promise;
}

function newRegistration() {
  return false;
}

/////////////////////////////////////////////////////////////////////////////////////////

// const cart = ["shoes", "jeans", "laptop"];

// const order = createOrder(cart); // returns orderId

// order
//   .then(function (orderId) {
//     console.log(orderId);
//   })
//   .catch(function () {
//     console.log("sorry ");
//   });

// /////// how to develop this createOrder

// function createOrder(cart) {
//   const promise = new Promise(function (resolve, reject) {
//     if (!validateCart(cart)) {
//       const err = new Error("cart is not valid");
//       reject(err);
//     }
//     const orderId = "12";

//     if (orderId) {
//       resolve(orderId);
//     }
//   });

//   return promise;
// }

// function validateCart() {
//   return true;
// }
