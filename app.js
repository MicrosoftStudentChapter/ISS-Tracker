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
