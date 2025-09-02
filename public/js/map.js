// Create map
var map = new maplibregl.Map({
  container: "map",
  style: `https://maps.geoapify.com/v1/styles/osm-bright/style.json?apiKey=${GEOAPIFY_API_KEY}`,
  center: listing.geometry.coordinates, // [lng, lat]
  zoom: 12,
});

const popup = new maplibregl.Popup({ offset: 25 }).setHTML(`
      <h4>${listing.title}</h4>
      <p>Exact location will be provided after booking</p>
    `);

// Add marker
new maplibregl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(popup)
  .addTo(map);
