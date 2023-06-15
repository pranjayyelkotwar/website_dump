const string = ` ____  _ _       _  __     _            
| __ )(_) |_ ___| |/ /_ __(_) ___  __ _ 
|  _ \\| | __/ __| ' /| '__| |/ _ \\/ _\` |
| |_) | | |_\\__ \\ . \\| |  | |  __/ (_| |
|____/|_|\\__|___/_|\\_|_|  |_|\\___|\\__, |
                                  |___/ `;

const lines = string.split('\n');


function getRandomLetter() {
    const letters = "ab___c_____e__fghijk____mnop__rstu__vwxyz";
    return letters[Math.floor(Math.random() * letters.length)];
  }
  
  function generateRandomLetters() {
    const animationDiv = document.getElementById("animation");
    const totalLetters = Math.floor(window.innerWidth / 15) * Math.floor(window.innerHeight / 15);
    animationDiv.innerHTML = '';
    console.log();
    let count = 0 ;
    for (let i = 0; i < totalLetters; i++) {
      if (i === 2467 || i === 2324 || i === 2181 || i === 2610 || i === 2753 || i == 2896) 
      {
        const letter = lines[count];
        const letterElement = document.createElement('span');
        letterElement.textContent = letter;
        letterElement.classList.add('bitskriegletter');
        animationDiv.appendChild(letterElement);
        i = i + 40;
        count++;
      } 
      else
      {
        const letter = getRandomLetter();
        const letterElement = document.createElement('span');
        letterElement.textContent = letter;
        letterElement.classList.add('letter');
        animationDiv.appendChild(letterElement);
      }
    }
  }
  
  /**function updateAnimation() {
    const animationDiv = document.getElementById("animation");
    const letters = animationDiv.getElementsByClassName('letter');
  
    for (let i = 0; i < letters.length; i++) {
      const letterElement = letters[i];
      const letter = getRandomLetter();
      letterElement.textContent = letter;
      letterElement.setAttribute('data-letter', letter);
    }
  }**/
  
  //generateRandomLetters();
  setInterval(generateRandomLetters, 150);
  