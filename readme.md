## Infinite Scroll Image Gallery ##

A project created as part of the Udemy course "JavaScript Web Projects: 20 Projects to Build Your Portfolio" by Andrei Neagoie and Jacinto Wong. This project focuses on building an infinite scroll image gallery using the Unsplash API.

## Introduction ##
The Infinite Scroll Image Gallery is a web project designed to demonstrate the implementation of an infinite scroll feature using JavaScript and the Unsplash API. The project was developed by David Gray as part of the "JavaScript Web Projects: 20 Projects to Build Your Portfolio" course on Udemy, created by instructors Andrei Neagoie and Jacinto Wong.

## Project Details ##
The project's primary focus is on showcasing the following concepts and skills:

Fetching data from the Unsplash API to display high-quality images
Implementing infinite scroll functionality to enhance user experience
Dynamically creating HTML elements for each image
Efficiently managing loading states for smoother interaction
The original source code for this project, as developed during the course, can be found in the JacintoDesign/infinite-scroll repository.

## Usage ##
The Infinite Scroll Image Gallery provides a seamless browsing experience for users by loading additional images as they scroll down the page. The project demonstrates how to fetch and display images from the Unsplash API, giving credit to the photographers and their work.

Feel free to explore the code, experiment with modifications, and adapt the project to your needs.

## Contributions ##
This project is a result of personal learning and development. While contributions are not actively sought, suggestions, improvements, or fixes are welcome via pull requests.

## License ##
This project is licensed under the MIT License.

## Acknowledgments ##
This project was inspired by the "JavaScript Web Projects: 20 Projects to Build Your Portfolio" Udemy course by Andrei Neagoie and Jacinto Wong. Special thanks to them for providing valuable insights and guidance throughout the course.

The project utilizes the Unsplash API to showcase the remarkable work of photographers. Credit to Unsplash for providing the stunning images used in this project.

Course link: JavaScript Web Projects: 20 Projects to Build Your Portfolio

Original code by JacintoDesign: JacintoDesign/infinite-scroll

Created by David Gray


## LESSON NOTES ##

The ready flag to control whether new images can be loaded.
The imagesLoaded count to track how many images have finished loading.
The totalImages count to know how many images are displayed in the container.
The imageLoaded() function to update these counts and toggle the ready flag when all images are loaded.
The displayPhotos() function to create HTML elements for each image and handle the loading event.
The getPhotos() function to fetch and display images from the Unsplash API.
The scroll event listener that checks if the user is near the bottom of the page and fetches more images when ready.

Original project on Github: https://github.com/JacintoDesign/infinite-scroll