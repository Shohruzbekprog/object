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
    greet: function () {
        console.log('Hello, World!');
    },
    greetfullName: function (start,end) {
      return `${start}Shohruzbek Programmer ${end}`
    },
};

person.greet()

console.log(person.fullName());

console.log(person.greetfullName("hello ", "!"));

