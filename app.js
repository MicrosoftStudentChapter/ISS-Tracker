//Your API calling and map interaction code goes here !!
//Leaflet.js config
//Explore options in the Leaflet.js documentation to make map more interactive
const map = L.map("map", {
  center: [0, 0],
  maxBounds: [
    [-90, -200],
    [90, 200],
  ],
});

map.fitWorld();

L.tileLayer(
  "https://tile.thunderforest.com/atlas/{z}/{x}/{y}.jpg?apikey=3e4e3c1a08854a3eafaa7d75e14c6736",
  { foo: "bar" }
).addTo(map);

//dont change default tile view in line 14-17
var IssIcon = L.icon({
  iconUrl: 'iss.png',
  iconSize:     [15, 15], // size of the icon
  shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
})
L.marker([51.5, -0.09], {icon: IssIcon}).addTo(map);