const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false; // A flag to track whether new images can be loaded
let imagesLoaded = 0; // The count of images that have finished loading
let totalImages = 0; // The total number of images to be displayed
let photosArray = []; // An array to store fetched photo data
let initialLoad = true; // A flag to identify the initial page load

// Unsplash API
const count = 5; // The number of images fetched per request initially
const apiKey ='ID_dLhzlfNq9KhVQUsDD9NkE71j9tmvKp1lX4zRvr_w'; // Normally, don't store API Keys like this, but an exception made here because it is free, and the data is publicly available!
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Check if all images were loaded
function imageLoaded() {
    imagesLoaded++;
    if (imagesLoaded == totalImages) {
        ready = true; // All images are loaded, ready for more
        loader.hidden = true; // Hide the loading spinner
        count = 30; // Increase the count for future requests
    }
}
// Helper Function to Set Attributes on DOM Elements
function setAttributes(element, attributes) {
    for (const key in attributes) {
      element.setAttribute(key, attributes[key]);
    }
  }

// Create Elements For Links & Photos, Add to DOM
function displayPhotos() {
    imagesLoaded = 0; // Reset the count of loaded images
    totalImages = photosArray.length;  // Update the total images count
    // Run Function for each object in photos Array
    photosArray.forEach((photo) => {
         // Create an <a> element to link to the Unsplash photo
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');

        // Create an <img> element for the photo
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);

        
        
        // Add an event listener to track when each image finishes loading
        img.addEventListener('load', imageLoaded);

        // Append the <img> inside the <a>, and both inside the imageContainer
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}
// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();  // Display the fetched photos
    } catch (error) {
        // Handle errors here
    }
}

// Check to see if scrolling near bottom of page, Load More Photos
window.addEventListener('scroll', () => {
if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
    ready = false; // Prevent loading until images are ready
    getPhotos(); // Fetch and display more photos
  }
});

// On Load
getPhotos();  // Initial fetching of photos when the page loads