function reverseStr(str) {
  return str.split('').reverse().join('');
}


// console.log(reverseStr('Hello'));


function fizzubazzu () {
  for (let i = 0; i < 100; i++) {
    
    console.log(i);
  }
}
// console.log(fizzubazzu());


function findMax(arr) {
  return Math.max(...arr);
}

// console.log(findMax([10, 5, 100, 42, 89]));


function vowels(str) {
  let vowellls = 'aeiouAEIOU';
  let count = 0;

  for(let char of str) {
    if(vowellls.includes(char)){
      count++
    }
  }
return count;
}


console.log(vowels('my name is Saidul HoulAder'));

