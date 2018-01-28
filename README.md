# Link
[live site](https://jeffreychuc.github.io/Link-Frontend/)

Link helps homeless with only SMS texting capabilities find critical information like the location of nearby shelters and soup kitchens. If you are in need of this service, please text (510) 999 6129.

## Features
### Find information through Text
Users can text our toll free number and include what they are in need of and their current location. We'll return the names and address of the three nearest locations that match their query.

### Natural Language Processing
Utilizing Google's Natural Language API, we parse through users' texts to decipher their needs and location. We pass the result into Google's Places API to find nearby matches.

### Display Nearby Resources
Our app includes a lightweight website built in React/Redux. The site includes a google-map-react display of all shelters and soup kitchens in San Francisco.

## Technologies
* React
* Redux
* Express
* Node.js
* Twilio
* Google Natural Language API
* Google Places API
* google-map-react

## Possible Future Features
* Save queries from users to report areas with shortages of food or shelter.
* Filter shelters by demographic restrictions (female only shelters, etc).
* Text users regarding nearby events (monthly free clinics, etc).
