  let places, input, address, city;
  google.maps.event.addDomListener(window, "load", function () {
    var places = new google.maps.places.Autocomplete(
      document.getElementById("searchTextField")
    );
    google.maps.event.addListener(places, "place_changed", function () {
      var place = places.getPlace();
      console.log(place)
      var address = place.formatted_address;
      var latitude = place.geometry.location.lat();
      var longitude = place.geometry.location.lng();
      var latlng = new google.maps.LatLng(latitude, longitude);
      var geocoder = (geocoder = new google.maps.Geocoder());
      geocoder.geocode({ latLng: latlng }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          if (results[0]) {
            var address = results[0].formatted_address;
            var pin =
              results[0].address_components[
                results[0].address_components.length - 1
              ].long_name;
            var country =
              results[0].address_components[
                results[0].address_components.length - 2
              ].long_name;
            var state =
              results[0].address_components[
                results[0].address_components.length - 3
              ].long_name;
            var city =
              results[0].address_components[
                results[0].address_components.length - 4
              ].long_name;
              console.log(country)
              console.log(state)
              console.log(city)
              console.log(pin)
             let row = `
            
             <tr id="country">
        <td>${country}</td>
        <td>${state}</td>
         <td>${city}</td>
         <td>${pin}</td>
      </tr>`
      $("#body").append(row)
          }
        }
      });
    });
  });
