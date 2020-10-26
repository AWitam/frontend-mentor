//Form class
class formUI {
  constructor(
    userInput,
    submitBtn,
    form,
    ipAdressSpan,
    locationSpan,
    timezoneSpan,
    ispSpan,
    map
  ) {
    this.userInput = userInput;
    this.submitBtn = submitBtn;
    this.form = form;
    this.ipAdressSpan = ipAdressSpan;
    this.locationSpan = locationSpan;
    this.timezoneSpan = timezoneSpan;
    this.ispSpan = ispSpan;
    this.map = map;
  }

  //Sets the map view for the same cordinates as used in design
  init() {
    this.fetchData();
    this.userInput.value = "";
    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1IjoiYXdpdGFtIiwiYSI6ImNrZ28yeWRyMDI3ajIyc3RlaTZnOGM0eXIifQ.5VruTebscTfC7wLmCMdCqg",
      }
    ).addTo(this.map);
    L.control.zoom( {
      position: 'bottomright'
    }).addTo(this.map);
  
  }

  //Triggers validation and fetching data
  listen() {
    this.submitBtn.addEventListener("click", (e) => {
      console.log(this.userInput)
      e.preventDefault();          
      if (this.ipAdressSpan.innerText != "") {
        this.clearForm();
        this.validate(this.userInput.value);
      } else {
        this.validate(this.userInput.value);
      }
      this.userInput.value = "";
    });
  }

  validate(input) {
    let ipRegEx = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (input.match(ipRegEx)) {
      this.fetchData();
    } else {
      console.log("Wrong"); // display 'danger' message
    }
  }

  fetchData() {
    fetch(
      `https://geo.ipify.org/api/v1?apiKey=at_1iQPSJoXR5SRqSbqOibbBjnjkgplA&ipAddress=${this.userInput.value}`
    )
      .then((response) => {
        let data = response.json();
        return data;
      })
      .then((data) => {
        this.updateUI(data);
        this.map.setView([data.location.lat, data.location.lng], 13)
        L.marker([data.location.lat, data.location.lng]).addTo(this.map); 
      });
  }

  clearForm() {
    this.ipAdressSpan.innerText = "";
    this.locationSpan.innerText = "";
    this.timezoneSpan.innerText = "";
    this.ispSpan.innerText = "";
  }

  updateUI(data) {
    this.ipAdressSpan.innerText = data.ip;
    this.locationSpan.innerText = data.location.city;
    this.timezoneSpan.innerText = data.location.timezone;
    this.ispSpan.innerText = data.isp;
  }

}

const IpForm = new formUI(
  document.querySelector('input[type="text"]'),
  document.querySelector('input[type="submit"]'),
  document.querySelector("form"),
  document.querySelector(".ip-adress"),
  document.querySelector(".location"),
  document.querySelector(".timezone"),
  document.querySelector(".isp"),
  L.map("map", { zoomControl: false })
);


IpForm.init();
IpForm.listen();
