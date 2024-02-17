// function play() {
//     Step-1: Hide the home screen. To hide the screen add the class hidden to the home screen.
//     Show the playground
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');

// }
function handleKeyboardButtonPress(event) {
    const playerPressedAlphabet = event.key;
    // console.log('Player Pressed Alphabet', playerPressedAlphabet);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    if (playerPressedAlphabet === expectedAlphabet) {
        // console.log('You got a point');
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);

        const newScore = currentScore + 1;

        currentScoreElement.innerText = newScore;

        removeBackgroundColorById(expectedAlphabet);
        continueGame();

    }
    else {
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        const newLife = currentLife - 1;

        currentLifeElement.innerText = newLife;
        // console.log('You lost life');
    }
    // console.log(currentAlphabet);

}

document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame() {
    const alphabet = getARandomAlphabet();
    // console.log(alphabet);
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}

function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}