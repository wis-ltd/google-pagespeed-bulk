/* Modules */
import axios from 'axios';

/* API Parameters */
const endpoint =
  'https://pagespeedonline.googleapis.com/pagespeedonline/v5/runPagespeed'; // Endpoint
const key = process.env.PAGESPEED_API_KEY; // API Key from environment variable

// Custom function to request PageSpeed API
export const apiRequest = async (url, device) => {
  const { data } = await axios(
    `${endpoint}?url=${url}&strategy=${device}&key=${key}`
  );
  return data;
};
