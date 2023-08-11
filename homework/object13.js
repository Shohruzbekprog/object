const grades = [
  { name: "Fizika", grade: 4, credit: 6 },
  { name: "Matematika", grade: 5, credit: 6 },
  { name: "Tarix", grade: 4, credit: 4 },
  { name: "Dasturlash", grade: 5, credit: 8 },
  { name: "Kiyber xafsizlik", grade: 4, credit: 8 },
];

let totalCredits = 0;
let totalGradePoints = 0;

for (let i = 0; i < grades.length; i++) {
  const { grade, credit } = grades[i];

  totalCredits += credit;
  totalGradePoints += grade * credit;
}

const gpa = (totalGradePoints / totalCredits).toFixed(2);

console.log(`GPA: ${gpa}`);
