import axios from 'axios';

async function getResults(query) {
  const key = '05c1afad250d85c543be49e78f2809c1';
  try {
    const res = await axios(
      `https://www.food2fork.com/api/search?key=${key}&q=${query}`
    );
    const recipes = res.data.recipes;
    console.log(recipes);
  } catch (error) {
    alert(error);
  }
}

getResults('tomato pasta');
