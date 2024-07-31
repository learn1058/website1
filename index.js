// Initialize and add the map
let map;

async function initMap() {
  // Define an array of locations with latitude, longitude, and title
  const locations = [
    { lat: 2.30475, lng: 102.3169, title: "POS A KAMPUS INDUK" },
    { lat: 2.30505, lng: 102.31645, title: "PEJABAT KESELAMATAN" },
    { lat: 2.30807, lng: 102.31889, title: "FTMK" },
    { lat: 2.30992, lng: 102.31744, title: "PKU" },
    { lat: 2.31131, lng: 102.31409, title: "KOLEJ KEDIAMAN SATRIA" },
    { lat: 2.31676, lng: 102.31588, title: "KOLEJ KEDIAMAN LESTARI" },
    { lat: 2.31435, lng: 102.31793, title: "FTKEK" },
    { lat: 2.31441, lng: 102.32007, title: "FTKE" },
    { lat: 2.31816, lng: 102.3212, title: "PUSAT SUKAN" },
    { lat: 2.31683, lng: 102.32676, title: "BANGUNAN TNB" },
    { lat: 2.31249, lng: 102.32657, title: "RUMAH TUNGGU SEDIA" },
    { lat: 2.31513, lng: 102.32522, title: "PPKU" },
    { lat: 2.31583, lng: 102.32453, title: "PEJABAT PEMBANGUNAN" },
    { lat: 2.31433, lng: 102.32353, title: "PUSAT KOKU" },
    { lat: 2.3126, lng: 102.3269, title: "KDK" },
    { lat: 2.32388, lng: 102.32127, title: "CANSELORI ARAS 1" },
    { lat: 2.31382, lng: 102.32126, title: "LOBBY CANSELORI" },
    { lat: 2.31376, lng: 102.32174, title: "PEJABAT NC" },
    { lat: 2.31343, lng: 102.32081, title: "HEPA(ATM)" },
    { lat: 2.31168, lng: 102.31905, title: "MASJID" },
    { lat: 2.31077, lng: 102.31902, title: "PPPK" },
    { lat: 2.31, lng: 102.31853, title: "PPP" },
    { lat: 2.30903, lng: 102.31964, title: "PBB" },
    { lat: 2.30895, lng: 102.32009, title: "LAMAN HIKMAH" },
    { lat: 2.31101, lng: 102.32187, title: "DEWAN CANSELOR" },
    { lat: 2.30838, lng: 102.32262, title: "FTKM" },
    { lat: 2.30813, lng: 102.32101, title: "FTKIP" },
    { lat: 2.30645, lng: 102.31904, title: "KOMPLEKS PENYELIDIKAN DAN INOVASI" },
    { lat: 2.30608, lng: 102.3187, title: "SEKOLAH PENGAJIAN SISWAZAH" }
  ];

  // Request needed libraries
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // Create the map, centered on the first location
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: locations[0],
    mapId: "DEMO_MAP_ID",
  });

  // Add markers for each location
  locations.forEach(location => {
    new AdvancedMarkerElement({
      map: map,
      position: location,
      title: location.title,
    });
  });
}

// Make sure initMap is available globally
window.initMap = initMap;