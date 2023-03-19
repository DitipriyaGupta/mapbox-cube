const getImageURL = (lng, lat, zoom) => {
  const API_KEY = 'pk.eyJ1IjoiZGl0aXByaXlhZ3VwdGEiLCJhIjoiY2xmYzllbGN6MDBhMTQwbHJhNGJtMzA1MSJ9.irUn-OXhnpwaDDEgjfdXhw';
  
  const url1 = `https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/static/${lng},${lat},${zoom},0/600x600?access_token=${API_KEY}`;

  const url2 = `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/${lng},${lat},${zoom},0/600x600?access_token=${API_KEY}`;
  return {
    url1,
    url2,
  };
};

export default getImageURL;
