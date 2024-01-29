const numberContainer = document.querySelector('#numberContainer');
const selectedNumbers = [];
let box;


const boxTypeSelector = ()=> {
  const boxType = ['squareBox', 'circleBox',];
  const selectedBox = Math.floor(Math.random() * boxType.length);
  return boxType[selectedBox]; 
}

const boxColorSelector = () => {
  const boxColor = ['red', 'yellow', 'pink', 'blue', 'orange', 'aqua', 'green'];
  const selectedColor = Math.floor(Math.random() * boxColor.length);
  return boxColor[selectedColor];
}


function createNumberBoxes() {
  const selectedColor = boxColorSelector();
  const selectedBox = boxTypeSelector();
  for(let i=1; i<=80; i++) {
     box = document.createElement('div');
    box.classList.add('box', selectedBox);
    box.style.backgroundColor = `${selectedColor}`;
    box.textContent = i;
    box.id = `num${i}`;
    numberContainer.appendChild(box);
  }
  const intervalId = setInterval(randomNumberSelector(), 10000);
}

function randomNumberSelector() {

  for(let i=1; i<=10; i++) {
    const randomNumber = Math.floor(Math.random() * 80) + 1;
    if(!selectedNumbers.includes(randomNumber)) {
    selectedNumbers.push(randomNumber);
  }
}

  console.log(selectedNumbers);
  // console.log(allBoxes);
  let delay = 2000;
  selectedNumbers.forEach( (num, index) => {
    setTimeout(() => {
      const selectedBox = document.getElementById(`num${num}`);
      console.log('number',num);
      selectedBox.style.backgroundColor = 'black';
    }, delay * index);
  })
  
}

createNumberBoxes();
