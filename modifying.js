let person = {
  firstName: 'Shohruzbek',
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

person.firstName = "Shohro'zbek"
person.age = 18;
person.languages.push("JAVA")
person.university.GPA = 5,
person[2024] = 'Happiness !'

console.log(person);