// function sum(x, y){
// return x + y
// }
//   try {
//       sum(1, t)
//     throw "use numbers"
//     } catch(err){
//     console.log("use numbers")
//   }


  var user = {username: "sam", password: "123abc"};
  
function login(username, password){
  if(username !== "sam"){
  throw "incorrect user"}
  if(password !== "123abc"){
    throw "incorrect user"}
}

try {
  login("sat", "123abc")
  console.log("success")
} catch(err){
  console.log("fucked")
}
