# Centra: recruitment

As a recruitment task you will be creating an app that lists airports and allows to search for connections between them.

## Product requirements

We talked with our clients and we came up with some user stories that might be useful for you.

As an airlines customer:

- I want to see a grid of places that I can travel to.
- I want to search for non-direct connections and see a list of possible connections with layovers.
- I want to share a link with search results with my friends.
- I want to easily navigate the app on any device using any input method.
- I want to see the connections with fewest layovers first in search results.

## Views

Here you can find a basic overview of the views in the app and some details on how things should work. Please check the [Figma file](https://www.figma.com/file/paWS3q2udGZJkgmJzGQLq9/Front-end-recruitment-task) to see the detailed application layout. You may need to create a Figma account to be able to check size of elements and export content.

### Home page

- Display a grid of airports. Each airport should have:
  - Name,
  - Image,
  - Rating,
  - List of direct connections (shown as airport code),
  - _Start from_ / _Go to_ button (after clicking each the _From_ / _To_ fields in search box should be updated accordingly).
- Loading spinner should be visible while loading the data.
- Search box with _From_/_To_ selects and _Search_ button.

### Search results

- Display the name and images of places that the user departs from and arrives at.
- Display the list of possible connections with layovers.
- Loading spinner should be visible while loading the data.

## API

Our flights API is available under this url: `https://centra-flights-api.herokuapp.com/`. You need to provide an authorisation token (`PprxhenEbxzmL7YrOuRZ0EqSwpCzcqU2`) in the header to be able to access it. Sample request:

```
curl -H 'auth: PprxhenEbxzmL7YrOuRZ0EqSwpCzcqU2' 'https://centra-flights-api.herokuapp.com/airports'
```

The API consists of two endpoints:

### `GET /airports`

This endpoint lists all the available airports with some metadata about them. You can expect the following JSON in response:

```json
[
  {
    "name": "Dakar-Léopold Sédar Senghor In.",
    "code": "DKR",
    "country": "Senegal",
    "id": 1084,
    "images": {
        "small": "http://centra-flights-api.herokuapp.com/images/dkr-small.jpg",
        "big": "http://centra-flights-api.herokuapp.com/images/dkr-big.jpg",
        "full": "http://centra-flights-api.herokuapp.com/images/dkr-full.jpg"
    },
    "averageRating": 4.3
  },
  ...
]
```

### `GET /connections`

This endpoint returns information about all possible connections between each airport as a list of airport IDs. The data comes straight from a legacy system and will probably require some parsing. You can expect the following string in response:

```
1084: 248, 1382, 2188, 1218
3941: 1218, 1382, 1665, 1452, 507, 1335, 346, 644, 1587, 1590, 679, 1551, 609, 421, 599, 2188, 2939, 2985
...
```

### Disclaimer

Please note that we are currently experiencing some stability issues and our API may sometimes fail to respond.

## Technical requirements

This repository already includes React, SCSS and TypeScript. You are free to choose whatever auxiliary libraries you like — we recommend `react-router` for routing, `axios` (HTTP requests), `redux-observable` (async actions) and `redux` (state management).

## Optional tasks

- Bonus points for creating test for React component or creating any unit test.
- It would be really nice to see the app running in a real production environment (we suggest Heroku or Vercel).

## Rules and hints

- We estimated this task for about 3-4 hours. We value your time so if after this time the task is not completely finished and you do not want to spend more time on it, then please send us your current code with a note saying what you would improve. On the other hand if you are having fun or want to make the app really shine then you are free to take as much time as you need.
- Using newest ECMAScript, CSS and HTML standards is a huge plus.
- Pay attention to code quality, formatting, conventions and our linter.
- You can export all the required icons from the Figma file.
- We value the code that you wrote on your own, so not overusing third party frameworks and libraries is a huge plus.
- We require writting all the code in TypeScript with appropriate types (no AnyScript™ please).
- Some code was already written, but if you see any possibility to improve it you are more than welcome to do so.
- As a part of the review we will read your commit history.
- Pay close attention to the design.

## Submitting your work

To submit your work you can put the repository on a _**private**_ GitHub repository and invite the **jagoda.przybyla@centra.com** as a collaborator, or if you are not using GitHub, zip the entire repository and send it via email (please make sure to include `.git` folder).

Don't worry if you need a little assistance — if you have any questions, just shoot us an e-mail. We're happy to help.
