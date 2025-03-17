# Google PageSpeed Insights API for Node.js

Script to extract Google PageSpeed API Data from multiple URLs. The script allows to perform multiple tests in the same run and calculate the median value for each extracted speed metric and Core Web Vitals metric from the total number of results.

## Table of Contents

- [Google PageSpeed Insights API for Node.js](#google-pagespeed-insights-api-for-nodejs)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [How to install and run the script](#how-to-install-and-run-the-script)
  - [The output](#the-output)

## Prerequisites

- Docker

## How to install and run the script

1. Check your Docker version. Make sure you have Docker installed and running. To check what version you are running type in your terminal:

   ```bash
   docker -v
   ```

2. Install the modules from the script using Docker. Type in your terminal:

   ```bash
   docker compose run node npm install
   ```

3. Create a copy of the `.env.example` file with the name `.env`.
4. Get a Google API Key. You can do it from your [GCP console](https://console.cloud.google.com/apis/credentials) or from [from Google's documentation](https://developers.google.com/speed/docs/insights/v5/get-started)
5. Add your key to the `.env` file.
6. Add URLs into the `urls.csv` file but keep the "url" header.
7. You can change the number of tests per URL you'd like to perform. Change the variable `NUM_TESTS` in the `.env` file to your desired number of tests. Maximum recommended 5.
8. You can also change the device variable from `MOBILE` to `DESKTOP` on the `STRATEGY` key of the `.env` file  is you want to get different viewport results.
9. Run the script using Docker. Type in your terminal:

   ```bash
   docker compose run node npm start
   ```

## The output

Once the script has finished, you will find the output under the "results" folder. There you will find at least 2 files:

- results-test.csv
- results-test.json

These files will contain the lab metrics for each succesful test result from the URLs in your 'urls.csv' file. The metrics extarcted are:

- Time To First Byte in milisenconds (TTFB)
- First Contentful Paint in miliseconds (labFCP)
- Largest Contentful Paint in miliseconds (labLCP)
- Cummulative Layout Shift (labCLS)
- Time To Interactive in miliseconds (TTI)
- Speed Index in miliseconds (speedIndex)
- Total Blocking Time in miliseconds (TBT)
- Max Potential First Input Delay in miliseconds (labMaxFID)
- Size fo the page in Megabytes(pageSize)

You may also find 6 additional files:

- results-median.csv
- results-median.json
- results-field.csv
- results-field.json
- results-origin.csv
- results-origin.json

The "results-median" files are the median values for each lab metric extracted as long as there were a minimum of 3 rounds of testing performed.

The "results-field" files will contain the Chrome User Experience Report (CrUX) field data for every succesful test with results. The metrics extarcted are:

- First Contentful Paint in miliseconds (FCP)
- First Input Delay in miliseconds (FID)
- Largest Contentful Paint in miliseconds (LCP)
- Cummulative Layout Shift (CLS)

In some cases, the is no CrUX data for the URLs specified in the 'urls.csv'. For these cases, the script will try to extract the origin domain data (aggregation of all URLs from that domain). If there is no origin data, no files will be created.
