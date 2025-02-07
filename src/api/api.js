import axios from "axios";

export const fetchAirports = async (setAirports) => {
  try {
    const url = import.meta.env.VITE_GET_AIRPORT;
    const response = await axios.get(url);

    setAirports(response.data.data);
    console.log("Fetched Airports:", response.data);
  } catch (error) {
    console.error(
      "Error Fetching Airports:",
      error.response ? error.response.data : error.message
    );
  }
};

export const findParkingDeals = async ({ requestData }) => {
  try {
    const url = import.meta.env.VITE_COMPARE_RATE;

    const response = await axios.post(url, requestData);

    console.log("====================================");
    console.log(response.data);
    console.log("====================================");
  } catch (error) {
    console.error(
      "Error Finding Parking Deals:",
      error.response ? error.response.data : error.message
    );
  }
};
