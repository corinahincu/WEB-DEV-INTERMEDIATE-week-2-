// aka Array class
//  * OOP
//  * callbacks

class NumberContainer {
  // HW1: try to set initial  values through constructor
  constructor(val_0, val_1, val_2, maxLen = 3){
    this.val_0 = val_0
    this.val_1 = val_1
    this.val_2 = val_2

    this.maxLen = 3
  }

  get length () {
    
    for(let i=0; i < 3; i++){
      if (this[`val_${i}`] == undefined){
        return i
    }
    return this.maxLen
  }
}
  //HW2: try to avoid anything else than numbers
push(number) {
  if (typeof number !== "number") {
    return console.error("Only numbers are accepted!")
  }
  
  if (this.length === this.maxLen) {
    return console.error("Container FULL!!!")
  }

  this[`val_${this.length}`] = number
}

  //this works like a loop
  forEach(cb){

    for (let i = 0; i < this.length; i++){
      cb(this[`val_${i}`])
    }
  }
  // fa-mi un for care se plimba printr-un indice care incepe de la 0 (let i = 0), un indice care e mai mic decit this.length ( i<this.length,) nu depaseste lungimea, apeleaza cb (callbackul) trimitindu-i this din obiectul curent proprietatea care contine numarul i -- cb(this[`val_${i}`])
  
  // HW3: try to do a forEachReverse (cb())
  //this works like a loop

  forEachReverse(cb) {
  for (let i = this.length - 1; i >= 0; i--) {
    cb(this[`val_${i}`]);
  }
}

// fa-mi un for care se plimba printr-un indice de la proprietatea ultimului indice (i = this.length - 1) si continuu pana i e mai mare sau egal cu 0 (i >= 0). apeleaza cb (callbackul) trimitindu-i this din obiectul curent proprietatea care contine numarul i -- cb(this[`val_${i}`])

/*   reduce(cb, initVal){
    //HW4: optimize this one using for  loop
    let acc = initVal
    if ( this.length > 0){
      acc = cb(this.val_0, acc)
    }
    if ( this.length > 1){
      acc = cb(this.val_1, acc)
    }
    if ( this.length > 2){
      acc = cb(this.val_2, acc)
    }
    return acc
  } */

  reduce(cb, initVal) {
  let acc = initVal;
  for (let i = 0; i < this.length; i++) {
    acc = cb(this[`val_${i}`], acc);
  }
  return acc;
}
// am adaugat initVal pentru a ne permite sa setam valoarea ( sa putem inmulti)
  // fa-mi un for care se plimba printr-un indice care incepe de la 0 si continuu pana i e mai mic decit this.length, nu depaseste lungimea. In loop, cb este apelat trimitindu-i this din obiectul curent proprietatea care contine numarul i -- cb(this[`val_${i}`]) si acc(acumulatorul). si returnam acc.
}
/*
CONTAINER FOR MAX 3 NUMBERS

------------------------
|                       |  < .push(number)
| val_0   val_1  val_2  |
|                       |
|                       |  > length
|                       |  > .forEach( cb( val ) )
|                       |  > .reduce( cb( val, acc ) )
------------------------
cb = callback
in console 
nc.reduce ( ( n, acc) => * acc,1) 
6 (rezultatul
nc.reduce ( ( n, acc) =>  + acc,0) 
6 (rezultatul)
nc.reduce ( ( n, acc) => n * n + acc,0) 
14 (rezultatul)

exemplu cu array :
nc.reduce ( ( n, acc) => [n, ...acc], []) 
(3) [3,2,1] (rezultatul)

*/