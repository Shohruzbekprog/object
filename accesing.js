let person = {
  firstName: 'Shohruzbek',
  Firstname: "Shohro'zbek",
  lastName: 'Programmer',
  age: 17,
  isDiblom: null,
  isMarried: false,
  test: undefined,
  languages: ["HTML", "CSS", "JAVASCRIPT"],
  Symbol:Symbol,
  BigInt:45421815135486415151541n,
  fullName: function () {
    return "Shohruzbek Programmer"
  },
  university: {
    name:"JIDU",
    course: 5,
    GPA: 4.8,
  },
  2024: 'enter the university',
  2019: 'Rupublic champion',
} 

// console.log(person.firstName);
// console.log(person["firstName"]);

// console.log(person.firstName);
// console.log(person.Firstname);

// console.log(person.languages);
// console.log(person.languages[2]);

// console.log(person.2024);
// console.log(person[2024]);
// console.log(person["2024"]);

// console.log(person.fullName());
// console.log(person["fullName"]());

// console.log(person.university);
console.log(person.university.course);