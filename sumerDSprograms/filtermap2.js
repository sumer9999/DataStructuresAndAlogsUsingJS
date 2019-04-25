const authors = [
  { name: "Abraham John", sections: ["Business", "Sports"] },
  { name: "Bianca Vadra", sections: ["News", "Entertainment"] },
  { name: "Cali kuli", sections: ["Local", "Sports"] },
  { name: "Dragos Jorjita", sections: ["Business", "Delhi"] },
  { name: "Erin Brokwich", sections: ["Fun", "Sports"] }
];

authors
  .filter(author => {
    return author.sections.indexOf("Sports") >= 0;
  })
  .map(author => author.name)

  .forEach(ele => console.log(ele));
