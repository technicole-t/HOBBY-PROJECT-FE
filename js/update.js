const BASE_URL = "http://localhost:8090";

function seeJourneyValues() {
  const journeyID = new URLSearchParams(window.location.search).get("journey");
  axios.get(BASE_URL + "/getJourneyById/" + journeyID).then((res) => {
    document.getElementById("update-departure-airport").value =
      res.data.departureAirport;
    document.getElementById("update-destination-airport").value =
      res.data.destinationAirport;
    document.getElementById("update-mode-of-travel").value =
      res.data.modeOfTravel;
    document.getElementById("update-date-of-travel").value = res.data.date;
  });
}
