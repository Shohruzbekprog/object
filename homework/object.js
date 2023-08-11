const me = {
  firstName: "Abdulaziz",
  lastName: "Toshpulatov",
  age: 23,
  languages: ["js", "python", "c++", "nodejs"],
  friends: ["Jamshid", "Abbas", "Jalal", "Mar'uf"],
};

const output = [];

for (let key in me) {
  if (Array.isArray(me[key])) {
    output.push(`${key}: ${me[key].join(", ")}`);
  } else {
    output.push(`${key}: ${me[key]}`);
  }
}

console.log(output.join("\n"));
