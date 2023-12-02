function onClick_Schedule() {
  location.href = '../../pages/Page_2_Schedule/Page_2_Schedule.html';
}

function onClick_Friends() {
  location.href = '../../pages/Page_3_Add_Friends/Page_3_Add_Friends.html';
}

function onClick_Home() {
  location.href = '../../../Final_part1/pages/Page_1_Main_Page/Page_1_Main_Page.html';
}

function onClick_Map() {
  location.href = '../../pages/Page_4_Map_A/Page_4_Map_A.html';
}

function onClick_Money() {
  location.href = '../../pages/Page_5_Money/Page_5_Money.html';
}


/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// The following example creates complex markers to indicate beaches near
// Sydney, NSW, Australia. Note that the anchor is set to (0,32) to correspond
// to the base of the flagpole.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: { lat: 39.9502159, lng: -75.1901092 },
  });

  setMarkers(map);
}

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
let beaches = [
  // ["Upenn", 39.9522188, -75.1932137, 3],
  // ["Hospital", 39.9501339,  -75.1938649, 2],
  ["Franklin Field", 39.9502159, -75.1901092, 1],
];


function successCallback(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  beaches.push(["Me", latitude, longitude, 4]);
  initMap();
}

function errorCallback(error) {
  console.log("Error getting geolocation:", error);
}


function setMarkers(map) {
  // Adds markers to the map.
  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.
  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  const image_1 = {
    url: './icon/boy.png',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(50, 50),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 0),
  };
  const image_2 = {
    url:  './icon/boy.png',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(50, 50),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 0),
  };
  const image_3 = {
    url:  './icon/girl.png',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(50, 50),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 0),
  };
  let icons = [
    image_1,
    // image_2,
    image_3,
  ];
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
  const shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: "poly",
  };
  
  for (let i = 0; i < beaches.length; i++) {
    const beach = beaches[i];

    new google.maps.Marker({
      position: { lat: beach[1], lng: beach[2] },
      map,
      icon: icons[i],
      shape: shape,
      title: beach[0],
      zIndex: beach[3],
    });
  }
}

window.initMap = initMap;
addMyLocation();

function addMyLocation() {
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
} else {
  console.log("Geolocation is not supported by this browser.");
}
}

document.addEventListener('DOMContentLoaded', function() {
  var switchButton = document.getElementById('mySwitch');
  // 1 is on, 0 is off
  var myVariable = 1;
  switchButton.onclick = function() {
    if (myVariable === 0) {
      myVariable = 1;
      addMyLocation();
    } else {
      myVariable = 0;
      beaches.splice(beaches.length-1, 1); 
      initMap();
    }
  };
});
