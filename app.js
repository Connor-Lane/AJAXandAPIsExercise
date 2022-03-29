// AJAX and APIs Exercise

// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1, p2);
const jokeJS1 = JSON.parse(`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`);
console.log(`Question 1 was successful`);
console.log(jokeJS1);
p1.innerText = jokeJS1.setup;
p2.innerText = jokeJS1.punchline;

// 2
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3, p4);
axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`)
    .then(data => {
        const jokeJS2 = data;
        console.log(`Question 2 was successful`);
        console.log(jokeJS2);
        p3.innerText = jokeJS2.data.character;
        p4.innerText = jokeJS2.data.quote;
    })
    .catch(err => {
        console.log(`Question 2 has failed`);
        console.log(err);
    });

// 3
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5, p6);
async function quoteFunc() {
    try {
        const jokeJS3 = await axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`);
        console.log(`Question 3 was successful`);
        console.log(jokeJS3);
        p5.innerText = jokeJS3.data.character;
        p6.innerText = jokeJS3.data.quote;
    } catch (err) {
        console.log(`Question 3 has failed`);
        console.log(err);
    }
}
quoteFunc();

// 4
const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);

const baseURL = `https://api.tvmaze.com`;
const season = 2;
const id = 38963;
const number = 8;
const endpoint = `/shows/${id}/episodebynumber?season=${season}&number=${number}`;

async function tvMazeFunc() {
    try {
        const result = await axios.get(baseURL + endpoint);
        console.log(`Question 4 successful`);
        console.log(result);
        p7.innerText = result.data.name;
    } catch (err) {
        console.log(`Question 4 has failed`);
        console.log(err);
    }
}
tvMazeFunc();

// BONUS
// 5
const image = document.createElement(`img`);
const body = document.querySelector(`body`);
body.append(image);
axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`)
.then(res => {
  console.log(`Pikachu Pokemon data has been retrieved`);
  console.log(res);
  image.src = res.data.sprites.front_default;
})
.catch (err => {
    console.log(`Pikachu Pokemon data could not be retrieved`);
    console.log(err);
});

// 6
const image2 = document.createElement(`img`);
body.append(image2);

async function omdb() {
    try {
        const movie = await axios.get(`http://www.omdbapi.com/?apikey=893da3dc&i=tt0448694`);
        console.log(`Question 6 request success`);
        console.log(movie);
        image2.src = movie.data.poster;

    } catch (err) {
        console.log(`Question 6 request failed`);
        console.log(err);
    }
}
omdb();