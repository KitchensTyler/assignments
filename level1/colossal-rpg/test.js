

function getNumberOfVowels(str) {
    const vowels = /[aeiou]/gi;
    let results = str.match(vowels);
    // console.log(results)
    let count = results.length
    return count
    }
   console.log(getNumberOfVowels("hello wOrld")) // 3
   console.log(getNumberOfVowels("fishing")) // 2
   console.log(getNumberOfVowels("Tkjokers fucking sucks ass at blood hunt and so does all of his friends"))
   


   