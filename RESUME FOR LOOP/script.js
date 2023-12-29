//JSON iterate for loop
let a = ["Moni", "yoki", "prem", "sorna"];
let arr = [1, 2, 3, 4];
let family = {};
for (let i = 0; i < a.length; i++) {
  family[a[i]] == arr[i];
}
console.log(family);

//JSON iterate for in
const data = {
  name: "moni",
  age: 21,
  gender: "male",
};
for (let keys in data) {
  // console.log(keys+":" ,data[keys])
}

//JSON ITERATE USING FOREACH
let myfav = ["listing", "reading", "watching"];
let items = ["songs", "books", "youtube"];
let freetime = {};
myfav.forEach((myfav, i) => {
  freetime[myfav] = items[i];
});
console.log(freetime);

//JSON ITERAITON USING FOR OF
let books = { "richdad poordad": 1, "13states": 2, "you can win": 3 };
let k = Object.keys(books);
for (let i of k) {
  console.log(`${i} : ${books[i]}`);
}
