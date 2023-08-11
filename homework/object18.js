let percentage = 88;

let grade;

if (percentage >= 90 && percentage <= 100) {
  grade = 5;
} else if (percentage >= 80 && percentage < 90) {
  grade = 4;
} else if (percentage >= 70 && percentage < 80) {
  grade = 3;
} else {
  grade = 2;
}

console.log(grade); 
