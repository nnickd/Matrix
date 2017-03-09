var ip = require('ip');
var request = require("request");

var address = ip.address();

var latitude;
var longitude;
var country;
var region;
var city;
var zipCode;
var timeZone;

function locate() {
  matrix.type('location').send({
      'latitude': latitude,
      'longitude': longitude,
      'country': country,
      'region': region,
      'city': city,
      'zipCode': zipCode,
      'timeZone': timeZone
  });
}

request('https://freegeoip.net/json/#' + address, function(error, response, body) {
    var res = JSON.parse(body);
    console.log(res);
    latitude = res.latitude;
    longitude = res.longitude;
    country = res.country_name;
    region = res.region_name;
    city = res.city;
    zipCode = res.zip_code;
    timeZone = res.time_zone;
    locate();
});
