#Pokemon Card Viewer

##Technologies Used
React: Used for building the user interface and handling component-based rendering.

React Router: Enables navigation between different pages in the application.

Local Storage: Used to persist user favorites across sessions.

Axios: Used for making API requests to fetch Pokémon card data.

JavaScript (ES6+ features): Utilized for state management and component logic.

CSS: Applied for styling the application and enhancing UI/UX.

##Approach Taken

###Component-Based Architecture: 
The app is structured into multiple components such as MainPage, Favorites, Search, and Nav, making it modular and maintainable.

###State Management with Hooks:

useState for managing local state such as the list of Pokémon cards, search queries, and favorites.

useEffect for fetching data and loading favorites from local storage on component mount.

###Fetching Pokémon Data:

Uses Axios to make API requests to the Pokémon TCG API.

Supports fetching Pokémon cards by page number and search queries.

###Navigation with React Router:

Users can navigate between the main page, favorites page, and search results using Routes and Link components.

###Local Storage for Favorites:

Favorites are stored in localStorage to persist data even after page refreshes.

Users can add/remove cards from their favorites list.

###Carousel Navigation:

Users can browse through Pokémon cards using next/previous buttons.

Favorites can be navigated similarly.

###Search Functionality:

Users can search for Pokémon cards by name.

Partial name searches are supported.

##Live Site
View the live application here:

##Usage Instructions
Open the application in your browser.

Browse through Pokémon cards using the next/previous buttons.

Use the search bar to find specific Pokémon cards by name.

Click the "Add to Favs" button to save a card to your favorites.

Navigate to the Favorites page to view saved cards.

Remove favorites by clicking "Remove from Favorites".

###Unsolved Problems
Pagination does not support dynamic page selection, only random page selection.

No error handling for failed API requests.

Limited UI customization options and styling improvements needed.

The search function does not provide auto-suggestions or filtering options.

