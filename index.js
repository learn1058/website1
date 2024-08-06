// index.js

// Initialize and add the map
let map;

async function initMap() {
  // Define an array of locations with latitude, longitude, and title
  const locations = [
    { lat: 2.30475, lng: 102.3169, title: "POS A KAMPUS INDUK", check: 1, imgUrl: "https://www.dropbox.com/scl/fi/cnhcbcu8th0ckdehgvu2a/1.jpg?rlkey=ypv7h2zz8z7yxrqq1411wjmac&st=z7ish8kf&dl=1" },
    { lat: 2.30505, lng: 102.31645, title: "PEJABAT KESELAMATAN", check: 2, imgUrl: "https://www.dropbox.com/scl/fi/rvz6csrpt9cl8juix8sit/2.jpg?rlkey=e1vrgvp5cifl13rdjun3urjz0&st=9pv58un1&dl=1" },
    { lat: 2.30807, lng: 102.31889, title: "FTMK", check: 3, imgUrl:"https://www.dropbox.com/scl/fi/n6jfly3i7ulxfqadgchkb/3.jpg?rlkey=vinunc5x320xlekxwf2ibosfb&st=fpu3h1ok&dl=1" },
    { lat: 2.30992, lng: 102.31744, title: "PKU", check: 4, imgUrl: "https://www.dropbox.com/scl/fi/w50oc2rgap0vdmnqykf35/4.jpg?rlkey=ip0bemayjbgfejndgwvnokln6&st=zmm18bgm&dl=1" },
    { lat: 2.31131, lng: 102.31409, title: "KOLEJ KEDIAMAN SATRIA", check: 5, imgUrl: "https://www.dropbox.com/scl/fi/n83f5ivbqx9xbw7uub3ss/5.jpg?rlkey=wcxjjd5fg9il5a3svgvjzkkuw&st=w4tvxdw2&dl=1" },
    { lat: 2.31676, lng: 102.31588, title: "KOLEJ KEDIAMAN LESTARI", check: 6, imgUrl: "https://www.dropbox.com/scl/fi/d5wf5w9wg79g7tzklgmdy/6.jpg?rlkey=iwww0cb8l868v6zv34ibzqhrg&st=iigndzwh&dl=1" },
    { lat: 2.31435, lng: 102.31793, title: "FTKEK", check: 7, imgUrl: "https://www.dropbox.com/scl/fi/eis2aepyl1phf0ipu13nx/7.jpg?rlkey=4z9h2omssidty3rlw2i5ihq6g&st=u9u5llsn&dl=1" },
    { lat: 2.31441, lng: 102.32007, title: "FTKE", check: 8, imgUrl:"https://www.dropbox.com/scl/fi/b9ouilsj2o1nnpjbfxdg4/8.jpg?rlkey=r9ggezbxyglvp9zmf21ajkbew&st=xqa8v8bg&dl=1" },
    { lat: 2.31816, lng: 102.3212, title: "PUSAT SUKAN", check: 9},
    { lat: 2.31683, lng: 102.32676, title: "BANGUNAN TNB", check: 10, imgUrl: "https://www.dropbox.com/scl/fi/4cb0bqdj6c7jc39qbtdcn/10.jpg?rlkey=fakvnezrxay88orkc7kgresbk&st=kcpkqel9&dl=1" },
    { lat: 2.31249, lng: 102.32657, title: "RUMAH TUNGGU SEDIA", check: 11, imgUrl:"https://www.dropbox.com/scl/fi/3eavb0gwklp1q6q7dc047/11.jpg?rlkey=mngarixf9ck4pfub2toykkmpu&st=hkvlxvow&dl=1" },
    { lat: 2.31513, lng: 102.32522, title: "PPKU", check: 12, imgUrl: "https://www.dropbox.com/scl/fi/apxoyyy3fxzrj61s1afrw/12.jpg?rlkey=1y4k275ob5p8mkiycxextx5kk&st=sctvrqag&dl=1"},
    { lat: 2.31583, lng: 102.32453, title: "PEJABAT PEMBANGUNAN", check: 13, imgUrl: "https://www.dropbox.com/scl/fi/g2sn8sjxj54m4fi04dsdl/13.jpg?rlkey=a1y60sb2x1o3odlmvn9xdyh7w&st=epvvvc1m&dl=1" },
    { lat: 2.31433, lng: 102.32353, title: "PUSAT KOKU", check: 14, imgUrl: "https://www.dropbox.com/scl/fi/2fsc9i9ynxjk3h6t4x429/14.jpg?rlkey=28e3srdjk2q2ew6aoe8btbtdu&st=k76h7i9z&dl=1" },
    { lat: 2.3126, lng: 102.32269, title: "KDK", check: 15, imgUrl:"https://www.dropbox.com/scl/fi/u8azhpo7jyx8947hq23ec/15.jpg?rlkey=knwawd3jpm06w1p0cncxhpjzb&st=t7x61kx9&dl=1" },
    { lat: 2.32388, lng: 102.32127, title: "CANSELORI ARAS 1", check: 16, imgUrl:"https://www.dropbox.com/scl/fi/m3wmerh9t99hjusd9cvaa/16.jpg?rlkey=gw7s2y6i1f0j41uek9mogsw91&st=isvs7t4h&dl=1" },
    { lat: 2.31382, lng: 102.32126, title: "LOBBY CANSELORI", check: 16, imgUrl: "https://www.dropbox.com/scl/fi/99p0s7woyzbfx4xhiw5yw/17.jpg?rlkey=rg9hxrnvhewsqup98gef22owr&st=8adbf2pn&dl=1" },
    { lat: 2.31376, lng: 102.32174, title: "PEJABAT NC", check: 17},
    { lat: 2.31343, lng: 102.32081, title: "HEPA(ATM)", check: 18, imgUrl: "https://www.dropbox.com/scl/fi/vdegzo99vd4bcr9qi1gy2/19.jpg?rlkey=oqmwynuo8wmp1o0zsg8rya2n9&st=hyg6i0q3&dl=1" },
    { lat: 2.31168, lng: 102.31905, title: "MASJID", check: 19, imgUrl:"https://www.dropbox.com/scl/fi/vm2gg5w6ah1xpxghwphbu/20.jpg?rlkey=bwe59hvyzkpuccmy6y9hieo80&st=9b93a68y&dl=1" },
    { lat: 2.31077, lng: 102.31902, title: "PPPK", check: 20, imgUrl:"https://www.dropbox.com/scl/fi/6gxg251c20aktrh6ete7m/21.jpg?rlkey=83s58g0d0kzeuzke0g5d83pfj&st=erdriad4&dl=1" },
    { lat: 2.31, lng: 102.31853, title: "PPP", check: 21, imgUrl:"https://www.dropbox.com/scl/fi/xfigf0frzc2x1wefk3b4d/22.jpg?rlkey=flnpznc85dd3lgvzmv1imvk3r&st=h6tfr3cc&dl=1" },
    { lat: 2.30903, lng: 102.31964, title: "PBB", check: 22, imgUrl:"https://www.dropbox.com/scl/fi/17qq988mon7j4ermkfcg6/23.jpg?rlkey=n9pafflouqao15xwkp1mn4l46&st=fgbdw3bo&dl=1" },
    { lat: 2.30895, lng: 102.32009, title: "LAMAN HIKMAH", check: 23, imgUrl: "https://www.dropbox.com/scl/fi/01l9qjjy4hob2xyqdzg66/24.jpg?rlkey=fxqu70ve1qppdf80m730ctyoa&st=yhl67ulq&dl=1"},
    { lat: 2.31101, lng: 102.32187, title: "DEWAN CANSELOR", check: 24, imgUrl: "https://www.dropbox.com/scl/fi/g3bupq6ttxeuh84xypfxg/25.jpg?rlkey=ncggdzyh66xtrirjfpyauiy48&st=sv2eel64&dl=1"},
    { lat: 2.30838, lng: 102.32262, title: "FTKM", check: 25, imgUrl: "https://www.dropbox.com/scl/fi/a7ivsb38ubiqcdaio3kkz/26.jpg?rlkey=5p6p54nqwun36t7paz9crfxmy&st=95ocevp3&dl=1" },
    { lat: 2.30813, lng: 102.32101, title: "FTKIP", check: 26, imgUrl: "https://www.dropbox.com/scl/fi/wa0x687e8mghdc30idteo/27.jpg?rlkey=6dwc5fvwl16o0w7vefyvvwk32&st=k0ci0r9i&dl=1" },
    { lat: 2.30645, lng: 102.31904, title: "KOMPLEKS PENYELIDIKAN DAN INOVASI", check: 27, imgUrl:"https://www.dropbox.com/scl/fi/0ls0wq9xgq80lnb21uxzg/28.jpg?rlkey=n7dfitcdssxmuea7smf2rccmj&st=1vik26qu&dl=1" },
    { lat: 2.30608, lng: 102.3187, title: "SEKOLAH PENGAJIAN SISWAZAH", check: 28, imgUrl:"https://www.dropbox.com/scl/fi/qkum7lmac2jo4k9wxadtr/29.jpg?rlkey=vb7mpol61gswtf3x214q1ma1r&st=7l82b6b9&dl=1" },
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
          <img src="${location.imgUrl}" alt="${location.title}" style="width:100px;height:auto;">
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

