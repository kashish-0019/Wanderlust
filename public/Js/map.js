
    maptilersdk.config.apiKey = mapToken;
    const map = new maptilersdk.Map({
      container: 'map', // container id
      style: maptilersdk.MapStyle.STREETS,
      center: [77.2088, 28.6139], // starting position [lng, lat]
      zoom: 10 // starting zoom
    });

const marker = new maptilersdk.Marker({color: 'red'})
  .setLngLat([77.2088, 28.6139])
  .setPopup(new maptilersdk.Popup().setHTML("<p>Exact location provided after login</p>")) 
  .addTo(map);