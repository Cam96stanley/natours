/* eslint-disable */
export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiY2FtOTZzdGFubGV5IiwiYSI6ImNtN3UwamdzNzF6encybG9uajBwcGFhbnUifQ.Dq2fgZ3vtmMcn9a7PJwD8g';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/cam96stanley/cmhrdxcfl002001s2gxvsb8rh',
    scrollZoom: false,
    projection: 'globe',
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
