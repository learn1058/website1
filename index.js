// index.js

// Initialize and add the map
let map;

async function initMap() {
  // Define an array of locations with latitude, longitude, and title
  const locations = [
    { lat: 2.30475, lng: 102.3169, title: "POS A KAMPUS INDUK", check: 1 },
    { lat: 2.30505, lng: 102.31645, title: "PEJABAT KESELAMATAN", check: 2 },
    { lat: 2.30807, lng: 102.31889, title: "FTMK", check: 3 },
    { lat: 2.30992, lng: 102.31744, title: "PKU", check: 4 },
    { lat: 2.31131, lng: 102.31409, title: "KOLEJ KEDIAMAN SATRIA", check: 5 },
    { lat: 2.31676, lng: 102.31588, title: "KOLEJ KEDIAMAN LESTARI", check: 6 },
    { lat: 2.31435, lng: 102.31793, title: "FTKEK", check: 7 },
    { lat: 2.31441, lng: 102.32007, title: "FTKE", check: 8 },
    { lat: 2.31816, lng: 102.3212, title: "PUSAT SUKAN", check: 9 },
    { lat: 2.31683, lng: 102.32676, title: "BANGUNAN TNB", check: 10 },
    { lat: 2.31249, lng: 102.32657, title: "RUMAH TUNGGU SEDIA", check: 11 },
    { lat: 2.31513, lng: 102.32522, title: "PPKU", check: 12 },
    { lat: 2.31583, lng: 102.32453, title: "PEJABAT PEMBANGUNAN", check: 13 },
    { lat: 2.31433, lng: 102.32353, title: "PUSAT KOKU", check: 14 },
    { lat: 2.3126, lng: 102.3269, title: "KDK", check: 15 },
    { lat: 2.32388, lng: 102.32127, title: "CANSELORI ARAS 1", check: 16 },
    { lat: 2.31382, lng: 102.32126, title: "LOBBY CANSELORI", check: 16 },
    { lat: 2.31376, lng: 102.32174, title: "PEJABAT NC", check: 17 },
    { lat: 2.31343, lng: 102.32081, title: "HEPA(ATM)", check: 18 },
    { lat: 2.31168, lng: 102.31905, title: "MASJID", check: 19 },
    { lat: 2.31077, lng: 102.31902, title: "PPPK", check: 20 },
    { lat: 2.31, lng: 102.31853, title: "PPP", check: 21 },
    { lat: 2.30903, lng: 102.31964, title: "PBB", check: 22 },
    { lat: 2.30895, lng: 102.32009, title: "LAMAN HIKMAH", check: 23 },
    { lat: 2.31101, lng: 102.32187, title: "DEWAN CANSELOR", check: 24 },
    { lat: 2.30838, lng: 102.32262, title: "FTKM", check: 25 },
    { lat: 2.30813, lng: 102.32101, title: "FTKIP", check: 26 },
    { lat: 2.30645, lng: 102.31904, title: "KOMPLEKS PENYELIDIKAN DAN INOVASI", check: 27 },
    { lat: 2.30608, lng: 102.3187, title: "SEKOLAH PENGAJIAN SISWAZAH", check: 28 }
  ];

  // Request needed libraries
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // Create the map, centered on the first location
  map = new Map(document.getElementById("map"), {
    zoom: 16,  // Adjusted zoom level for better view of all locations
    center: locations[0],
    mapId: "DEMO_MAP_ID", // Replace with your actual map ID if available
  });

  // Add markers and info windows for each location
  locations.forEach(location => {
    const marker = new AdvancedMarkerElement({
      map: map,
      position: location,
      title: location.title,
    });

    // Create an InfoWindow
    const infowindow = new google.maps.InfoWindow({
      content: `<div><strong>${location.title}<strong><br>Checkpoint:${location.check}</strong><br>Latitude: ${location.lat}<br>Longitude: ${location.lng}</div>`,
    });

    // Add a click listener to the marker to open the InfoWindow
    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map: map,
        shouldFocus: false,
      });
    });
  });
}

// Make sure initMap is available globally
window.initMap = initMap;
