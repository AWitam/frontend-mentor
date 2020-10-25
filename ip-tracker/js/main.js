//Form UI
class formUI {
  constructor(userInput, submitBtn, form, ipAdressDiv, locationDiv, timezoneDiv, ispDiv) {
    this.userInput = userInput;
    this.submitBtn = submitBtn;
    this.form = form;
    this.ipAdressDiv = ipAdressDiv;
    this.locationDiv = locationDiv;
    this.timezoneDiv= timezoneDiv;
    this.ispDiv = ispDiv;
  }

  //Event listener

  listen() {
    this.submitBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.validate(this.userInput.value);
    });

  }

  validate(userInput) {
    let ipRegEx = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (userInput.match(ipRegEx)) {
      this.fetchData();  
    } else {
      console.log('Wrong'); // display 'danger' message
    }
  }


  fetchData() {
    console.log("clicked");
    fetch(
      `https://geo.ipify.org/api/v1?apiKey=at_1iQPSJoXR5SRqSbqOibbBjnjkgplA&ipAddress=${this.userInput.value}`
    )
      .then((response) => {
        let data = response.json();
        return data;
      })
      .then((data) => {
        this.updateUI(data);
        this.updateMap(data);
      });
  }

  updateUI(data) {
    console.log(data);
    let span = document.createElement('span');
    this.ipAdressDiv.after(span.textContent = this.userInput);
    this.locationDiv.after(span.textContent = data.location.city);
    this.timezoneDiv.after(span.textContent = data.location.timezone);
    this.ispDiv.after(span.textContent = data.isp);
  }
  
}

const IpForm = new formUI(
  document.querySelector('input[type="text"]'),
  document.querySelector('input[type="submit"]'),
  document.querySelector('form'),
  document.querySelector('.ip-adress'),
  document.querySelector('.location'),
  document.querySelector('.timezone'),
  document.querySelector('.isp'),
);

IpForm.listen();

var mymap = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYXdpdGFtIiwiYSI6ImNrZ28yeWRyMDI3ajIyc3RlaTZnOGM0eXIifQ.5VruTebscTfC7wLmCMdCqg'
}).addTo(mymap);