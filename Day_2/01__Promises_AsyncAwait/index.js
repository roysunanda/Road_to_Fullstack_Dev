// const API = `https://v2.jokeapi.dev/joke/Any?safe-mode`;
const API = `https://api.chucknorris.io/jokes/random`;
const joke = fetch(API);

console.log(joke);
console.log(`hiiii`);
console.log(`hiiii`);
console.log(`hiiii`);
joke.then((data) => {
  console.log(data);
});
