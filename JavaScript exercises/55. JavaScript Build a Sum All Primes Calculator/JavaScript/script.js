function sumPrimes (num) {
  let count = 0;
  let sum = 0;

  const isPrime = count =>{
    for(let i =2; i< count; i++){
      if (count % i === 0){
        return false;
      }
    }
    return count >= 2
  }

  while (num >= count){
    if(isPrime(count)){
      sum+=count;
    }
    count++
  }
  return sum
}

console.log(sumPrimes(10))