const jokesArray = [
    "Why did the chicken cross the road? Because it wanted to get to the other side.",
    "Why was the math book sad? Because it had too many problems.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "Why don't scientists trust atoms? Because they make up everything.",
    "Why did the tomato turn red? Because it saw the salad dressing.",
    "Why did the scarecrow win an award? Because he was outstanding in his field."
];

function matchJokesToPattern(jokes) {
    const jokePattern = /Why did the .+ ? Because .+/;
    const matchedJokes = jokes.filter(joke => joke.match(jokePattern));
    return matchedJokes;
}


function displayMatchedJokes(jokes) {
    const jokesList = document.getElementById('jokes-list');
    jokesList.innerHTML = '';
    jokes.forEach(joke => {
        const listItem = document.createElement('li');
        listItem.textContent = joke;
        jokesList.appendChild(listItem);
    });
}

document.getElementById('check-button').addEventListener('click', () => {
    const matchedJokes = matchJokesToPattern(jokesArray);
    displayMatchedJokes(matchedJokes);
});