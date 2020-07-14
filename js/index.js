const BASE_URL = "http://localhost:8090";

function postTrip() {
  const userTripInput = document.getElementById("user-input-trip-name");
  axios
    .post(BASE_URL + "/createTrip", {
      tripName: userTripInput.value,
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
}
