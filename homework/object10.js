const books = [
  {
    title: "Halqa",
    author: "Akrom Malik",
    alreadyRead: false,
  },
  {
    title: "Dunyonign ishlari",
    author: "Otkir Hoshimov",
    alreadyRead: true,
  },
  {
    title: "Vaqtning qadri",
    author: "Abdulfattah Abu G'udda",
    alreadyRead: false,
  },
];

let output = '';

for (let i = 0; i < books.length; i++) {
  const book = books[i];
  
  if (book.alreadyRead) {
    output += `${i + 1}. ${book.author}ning "${book.title}" o'qilgan;\n`;
  } else {
    output += `${i + 1}. ${book.author}ning "${book.title}" Kitab o'qilmagan;\n`;
  }
}

console.log(output);
