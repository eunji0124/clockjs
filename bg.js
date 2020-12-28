const wrap = document.querySelector("#wrap");

const image_number = 5;

function paintImage(imgNumber){
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  wrap.appendChild(image);
};

function handleRandom(){
  const number = Math.floor(Math.random() * image_number);
  return number;
};

function init(){
  const randomNumber = handleRandom();
  paintImage(randomNumber);
};
init();