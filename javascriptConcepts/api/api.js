fetch("https://reqres.in/api/users/", {
  method: "POST", //or GET or DELETE etc
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "USer 1",
  }),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log("ERROR"));
//this catch will cover the fetch function and not the URL
//to check for the url we will add res.ok to the first then
