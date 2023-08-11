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
  fullName() {
    return `${this.firstName} Programmer`
  },
  university: {
    name:"JIDU",
    course: 5,
    GPA: 4.8,
  },
  2024: 'enter the university',
  2019: 'Rupublic champion',
    greet() {
        console.log('Hello, World!');
    },
    greetfullName(start,end) {
      return `${start} ${this.firstName} Programmer ${end}`
    },
};

person.firstName = "Shohro'zbek",

console.log(person.fullName);

console.log(person.greetfullName("Hello ", "!"));