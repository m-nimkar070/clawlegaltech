const axios = require("axios");

const checkHoliday = async (date, country) => {
  const year = new Date(date).getFullYear();
  const apiKey = process.env.CALENDARIFIC_API_KEY; // Replace with your API key
  const url = `https://calendarific.com/api/v2/holidays?api_key=${apiKey}&country=${country}&year=${year}`;

  try {
    const response = await axios.get(url);
    const holidays = response.data.response.holidays;
    const isHoliday = holidays.some((holiday) => holiday.date.iso === date);
    return isHoliday;
  } catch (err) {
    console.error("Error checking holidays:", err.message);
    return false;
  }
};

module.exports = checkHoliday;
