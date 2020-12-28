const API_KEY="4d0e66d8a7eee14356a13e9f0928bdbd"; 
const Coords = 'coords';

function saveCoords(coordsObj){
  localStorage.setItem(Coords, JSON.stringify(coordsObj))
}

function handleGeoSuccess(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  }
  saveCoords(coordsObj);
};
function handleGeoError(){
  console.log('can not access geo');
};
function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError )
}

function loadCoords(){
  const loadedCoords = localStorage.getItem(Coords)
  if(loadedCoords === null){
    askForCoords();
  }else{

  }
};

function init(){
  loadCoords()
};

init();