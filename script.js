console.log("Hello World"); 

/*
If we list all the natural number that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Create a function `sum` which returns the sum of all the multiples of 3 or 5 below the number in argument.
Note: If the number is a multiple of both 3 and 5, only count it once.
*/
/*
// TODO add your code here
// function sum(array) {}
const sum = (array) => { 
  console.log(array); 
  let sum = 0;
// Faire une boucle sur le tableau pour récupérer chaque chiffre
  for (let i = 0; i < array.length; i++) { 
    // vérifier si multiple de 3 ou 5
    if (array[i] % 3 === 0 || array[i] % 5 === 0) {
      // Si multiple => on le compte
      sum = sum + array[i]
    }
  }

  return sum;
}

console.log(sum([2, 6, 7, 9, 12])) //27
console.log(sum([2, 5, 9, 13])) //14
console.log(sum([2, 5, 9, 15])) //29
*/

//---------------------------------------------------

/*
Write a function which, given two angles from a triangle, will return the value of the third one.
(Reminder: the sum of the values of the three angles in a triangle is **always** 180°)
Ex: 
thirdAngle(90, 30) should return 60
thirdAngle(20, 80) should return 80
*/

function thirdAngle(a, b) {
   // retourne la valeur du 3eme (pour calculer la valeur du 3eme : 180 - premier - deuxième)
     //return (180 - a -b) 
    return (180 -(a+b)); 
  }

console.log(thirdAngle(40, 30)) // 110 

console.log(thirdAngle(50, 80)) // 50
