const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

//create map
const map = L.map('mapid', options).setView([-27.2193608, -49.6481216], 15);

// create an add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
  iconUrl: './public/images/map-marker.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 69],
  popupAnchor: [170, 2],
});

//create and add marker
L.marker([-27.2193608, -49.6481216], { icon }).addTo(map);

function selectImage(event) {
  const button = event.currentTarget;

  // remove classe active
  const buttons = document.querySelectorAll('.images button');
  buttons.forEach((button) => {
    button.classList.remove('active');
  });
  // seleciona imagem
  const image = button.children[0];
  const imageContainer = document.querySelector('.orphange-details > img');

  //atualizar imagem grande
  imageContainer.src = image.src;

  //adicionar aciticve para o botao selecionado
  button.classList.add('acitive');
}
