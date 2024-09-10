// index.js

// Initialize and add the map
let map;

async function initMap() {
  // Define an array of locations with latitude, longitude, and title
  const locations = [
    { lat: 2.30475, lng: 102.3169, title: "POS A KAMPUS INDUK", check: 1, imgUrl: "https://www.dropbox.com/scl/fi/ktvbfbth2olkt2pf6jril/1.jpg?rlkey=twvlpww9peel7s4r7c9hna2jz&st=ptqaf8wi&dl=1" },
    { lat: 2.30505, lng: 102.31645, title: "PEJABAT KESELAMATAN", check: 2, imgUrl: "https://www.dropbox.com/scl/fi/ewgog9addjl3jltv2funo/2.jpg?rlkey=ct2s3od45w59c1zikcmgqbhd6&st=yq18zy26&dl=1" },
    { lat: 2.30807, lng: 102.31889, title: "FTMK", check: 3, imgUrl:"https://www.dropbox.com/scl/fi/0hd0ex5948inrbx31ijme/3.jpg?rlkey=8ya2pr1vklhee4bqd5ro7wc0h&st=rvrdbtmb&dl=1" },
    { lat: 2.30992, lng: 102.31744, title: "PKU", check: 4, imgUrl: "https://www.dropbox.com/scl/fi/vjvci0ef5bjftz3uyvnbr/4.jpg?rlkey=6vsi2gihg5wlslooodh512yq2&st=yrz2ywgn&dl=1" },
    { lat: 2.31131, lng: 102.31409, title: "KOLEJ KEDIAMAN SATRIA", check: 5, imgUrl: "https://www.dropbox.com/scl/fi/x15gbiyul3kg9j718lsji/5.jpg?rlkey=jzzpv3g0vf7r8r54wdfwm02qz&st=nynt0ldg&dl=1" },
    { lat: 2.31676, lng: 102.31588, title: "KOLEJ KEDIAMAN LESTARI", check: 6, imgUrl: "https://www.dropbox.com/scl/fi/tzx4qjvqkfqraz8j8vcgw/6.jpg?rlkey=g4m4v76ma2s44vd9tckrlo1mo&st=fvllt6q4&dl=1" },
    { lat: 2.31435, lng: 102.31793, title: "FTKEK", check: 7, imgUrl: "https://www.dropbox.com/scl/fi/iplfub48m39nsob3bv5ce/7.jpg?rlkey=bprobb7q8yqt8g2l6m17uysb2&st=r8c59yxy&dl=1" },
    { lat: 2.31441, lng: 102.32007, title: "FTKE", check: 8, imgUrl:"https://www.dropbox.com/scl/fi/6p9vr3qw7ejw1f402ssnl/8.jpg?rlkey=siashvj29rlf172sxx1vuwdo4&st=e4xijzf6&dl=1" },
    { lat: 2.31816, lng: 102.3212, title: "PUSAT SUKAN", check: 9},
    { lat: 2.31683, lng: 102.32676, title: "BANGUNAN TNB", check: 10, imgUrl: "https://www.dropbox.com/scl/fi/cnmjkf4uqecuyo3ljbrvf/10.jpg?rlkey=hu59xkgy3v9tfzyppkgm9jfzh&st=w94toste&dl=1" },
    { lat: 2.31249, lng: 102.32657, title: "RUMAH TUNGGU SEDIA", check: 11, imgUrl:"https://www.dropbox.com/scl/fi/uear1vt9c7hbi6f1kwsuf/11.jpg?rlkey=k552yji8eqcidmu2v5r462dpb&st=k3igi9kq&dl=1" },
    { lat: 2.31513, lng: 102.32522, title: "PPKU", check: 12, imgUrl: "https://www.dropbox.com/scl/fi/54u5cvubgt46ls6wnxzhs/12.jpg?rlkey=u75x8drvm3dztgljkub45aig8&st=yofn53i8&dl=1"},
    { lat: 2.31583, lng: 102.32453, title: "PEJABAT PEMBANGUNAN", check: 13, imgUrl: "https://www.dropbox.com/scl/fi/agc91ttcum2t0rvdaede7/13.jpg?rlkey=u7y3x1o0vbtshx9vqrngnwk6h&st=nt77p2ya&dl=1" },
    { lat: 2.31433, lng: 102.32353, title: "PUSAT KOKU", check: 14, imgUrl: "https://www.dropbox.com/scl/fi/vf01x4zrbf5dnncxf487c/14.jpg?rlkey=lpmw08bueh40a2zvelpytho4t&st=h9fmy5l4&dl=1" },
    { lat: 2.3126, lng: 102.32269, title: "KDK", check: 15, imgUrl:"https://www.dropbox.com/scl/fi/d5jmcm97ge1fmc0kou5hf/15.jpg?rlkey=6iv40j546o2cvjkrpp046x12x&st=foldd4hx&dl=1" },
    { lat: 2.31388, lng: 102.32127, title: "CANSELORI ARAS 1", check: 16, imgUrl:"https://www.dropbox.com/scl/fi/3pb70s4hqu9s2t4nvco7l/16.jpg?rlkey=ac7a62kui54ishtjp823urgia&st=qxm10n5o&dl=1" },
    { lat: 2.31382, lng: 102.32126, title: "LOBBY CANSELORI", check: 16, imgUrl: "https://www.dropbox.com/scl/fi/5jqy9pofzfsjno1q9g1nl/17.jpg?rlkey=1jmstl0w1ey5djnwgmwp7ny9v&st=5aozisg1&dl=1" },
    { lat: 2.31376, lng: 102.32174, title: "PEJABAT NC", check: 17},
    { lat: 2.31343, lng: 102.32081, title: "HEPA(ATM)", check: 18, imgUrl: "https://www.dropbox.com/scl/fi/9ntm562be2gl5nrlnv1zj/19.jpg?rlkey=yqmcgadf46xinbryypo3jflja&st=osedw54q&dl=1" },
    { lat: 2.31168, lng: 102.31905, title: "MASJID", check: 19, imgUrl:"https://www.dropbox.com/scl/fi/o0l6wxq8m4qx2r3ep061x/20.jpg?rlkey=atarm6uo2yhj3bwmvxcgnr2zq&st=ovi66t78&dl=1" },
    { lat: 2.31077, lng: 102.31902, title: "PPPK", check: 20, imgUrl:"https://www.dropbox.com/scl/fi/jej6sye0evz99ua1au5ht/21.jpg?rlkey=lfz2wxa8v3bdg1qbhyfl4xxo3&st=f31wezf1&dl=1" },
    { lat: 2.31, lng: 102.31853, title: "PPP", check: 21, imgUrl:"https://www.dropbox.com/scl/fi/xd2k9lx4xfqcfe6telxmi/22.jpg?rlkey=p1f4eonxfcpmvlj9cjsmftu66&st=4iyqclqy&dl=1" },
    { lat: 2.30903, lng: 102.31964, title: "PBB", check: 22, imgUrl:"https://www.dropbox.com/scl/fi/j7urxkt87expzg8ugm38q/23.jpg?rlkey=2aidsjqb51ik7ol5ib57m365z&st=nyvfh6s5&dl=1" },
    { lat: 2.30895, lng: 102.32009, title: "LAMAN HIKMAH", check: 23, imgUrl: "https://www.dropbox.com/scl/fi/fjt9gya98qqeh88f6gvlj/24.jpg?rlkey=ojlh1q5khlsobtc73vaui68ah&st=sw6v6hmt&dl=1"},
    { lat: 2.31101, lng: 102.32187, title: "DEWAN CANSELOR", check: 24, imgUrl: "https://www.dropbox.com/scl/fi/k9ti31dbvovq61lpvrnn9/25.jpg?rlkey=z0qw1o4hbzl1hvyjky5zu6wlm&st=qjeu6lmu&dl=1"},
    { lat: 2.30838, lng: 102.32262, title: "FTKM", check: 25, imgUrl: "https://www.dropbox.com/scl/fi/2ila8fv4elqm7pnm22448/26.jpg?rlkey=6jiivn5aje86nrsjnep8iz3kf&st=td8swvri&dl=1" },
    { lat: 2.30813, lng: 102.32101, title: "FTKIP", check: 26, imgUrl: "https://www.dropbox.com/scl/fi/plp1kbe54it20rk3swwve/27.jpg?rlkey=vxo3qdqlimkzbu140esxstdl1&st=39use363&dl=1" },
    { lat: 2.30645, lng: 102.31904, title: "KOMPLEKS PENYELIDIKAN DAN INOVASI", check: 27, imgUrl:"https://www.dropbox.com/scl/fi/rj2z4c8l54zfnzyq3x1wd/28.jpg?rlkey=8bem1k9a7lh4zy0df23cg4jjn&st=rtm59yvm&dl=1" },
    { lat: 2.30608, lng: 102.3187, title: "SEKOLAH PENGAJIAN SISWAZAH", check: 28, imgUrl:"https://www.dropbox.com/scl/fi/cl6yj4ajz644tsxe4cd3i/29.jpg?rlkey=8whe77fl14feifq1gdcxuj5r8&st=tmbdmlwz&dl=1" },
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

    // Create an InfoWindow with an image
    const infowindow = new google.maps.InfoWindow({
      content: `
        <div>
          <strong>${location.title}<strong><br>
          Checkpoint: ${location.check}<br>
          Latitude: ${location.lat}<br>
          Longitude: ${location.lng}<br>
          <img src="${location.imgUrl}" alt="${location.title}" style="width:200px;height:auto;">
        </div>`,
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

