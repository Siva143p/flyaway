import axios from "axios";

export const fetchAirports = async (setAirports) => {
  try {
    const url = import.meta.env.VITE_GET_AIRPORT;
    const response = await axios.get(url);

    setAirports(response.data.data);
    // console.log("Fetched Airports:", response.data);
  } catch (error) {
    console.error(
      "Error Fetching Airports:",
      error.response ? error.response.data : error.message
    );
  }
};

//
export const findParkingDeals = async ({ requestData }, setSearchResults) => {
  try {
    const url = import.meta.env.VITE_COMPARE_RATE;

    const response = await axios.post(url, requestData);

    console.log("====================================");
    console.log(requestData);
    console.log("====================================");

    setSearchResults(response.data);
    console.log("====================================");
    console.log(response.data.data);
    console.log("====================================");
  } catch (error) {
    console.error(
      "Error Finding Parking Deals:",
      error.response ? error.response.data : error.message
    );
  }
};

//
export const sendTokenToServer = async (token) => {
  try {
    const url = import.meta.env.VITE_DEVICE_TOKEN;
    const response = await axios.post(url, {
      token: token,
      email: "sims91502@gmail.com",
    });

    console.log("Token sent to backend:", response.data);
  } catch (error) {
    console.error("Error sending token:", error);
  }
};
