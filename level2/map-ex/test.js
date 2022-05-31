// write a function (oneWordOnly) that takes an 
function oneWordOnly(ij){
   return ij.filter(word => !word.includes(" "))
   }
   
   console.log(oneWordOnly(["bird", "bird dog", "humming bird", "dog"])) //=>["bird", "dog"]
   console.log(oneWordOnly(["house", "tiny mansion", "humming bird", "fish", "word"])) //=>["house", "fish", "word"]
   