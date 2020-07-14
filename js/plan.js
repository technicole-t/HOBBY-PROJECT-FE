const BASE_URL = "http://localhost:8090";

function createJourney() {
  const tripID = new URLSearchParams(window.location.search).get("trip");

  axios
    .post(BASE_URL + "/createJourney", {
      departureAirport: document.getElementById("departure-airport").value,
      destinationAirport: document.getElementById("destination-airport").value,
      modeOfTravel: document.getElementById("mode-of-travel").value,
      date: document.getElementById("date-of-travel").value,
      trip: {
        tripId: tripID,
      },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
}
