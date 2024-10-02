
# Mental Health Awareness

## Overview

### Purpose

This single-page website aims to provide accessible information on mental health, including how to recognize common issues and manage stress, with links to external resources. The design will be welcoming and supportive, and will be achieved using HTML, CSS, and Bootstrap.

### Target Audience

- Individuals seeking beginner-friendly information about mental health.
- Individuals who may be mild mental health issues.
- People who are looking for tips to improve their mental health.
- Friends and family members of individuals dealing with mental health issues, looking to offer support.

## User Stories

### Must-Have:

- As a user, I want to see an encouraging message about mental health when I first visit the site, so I feel welcomed and supported.
- As a user, I want to easily find information about common mental health issues, so I can gain a comprehensive understanding.
- As a user, I want to access tips for managing stress, so I can apply them in day to day life.
- As a user, I want the website to have a calming colour scheme and layout, so I feel at comfortable.
- As a user, I want to see calming images, to be better engaged in the page content.

Should-Have:

- As a user, I want to see a positive thoughts section, for motivation.
- As a user, I want access to external mental health resources, so I can find additional help if needed.
- As a user, I want the website to be fully responsive, so I can access it comfortably on any device.

Could-Have:

- As a user, I want to see subtle animations or transitions, so the website feels more engaging, without being too overwhelming.
- As a user, I want to be able to toggle between light and dark modes, so that I can choose what is most comfortable to me.

## Design Decisions

### Wireframe

A simple layout, which is designed to be easily navigable and responsive. The number of cards in each section is arbitrary.

![Computer Wireframe](assets/images/Mental-Health-Awareness-Wireframe.png)

<img src="assets/images/iPhone mental health.png" alt="Phone Wireframe" width=300>

### Colour Scheme:

The colour scheme selected, was chosen to be calming, with contrast being considered for background and text.
- Primary: #7FDBFF (Light Blue)
- Secondary: #0074D9 (Darker Blue) 
- Accent: #2ECC40 (Green)
- Text: #001f3f (Dark Navy)
- Background: #F8F9FA (Off-White)

<br>

![Colour Scheme](assets/images/colourscheme.png)

---



### Fonts:

The fonts were selected for their modern style, and high level of readability.
- Headings: 'Montserrat', sans-serif.
- Body: 'Open Sans', sans-serif.

<br>

![Fonts](assets/images/fonts.png)

## Features Implementation

### Core Features (Must-Haves)

1. As a user, I want to see an encouraging message about mental health when I first visit the site, so I feel welcomed and supported.
- Implemented a jumbotron, for the hero section of the page, covering the whole page.

<br>

2. As a user, I want to easily find information about common mental health issues, so I can gain a comprehensive understanding.
- Information is organised into sections, with nav bar elements linking to them.

<br>

3. As a user, I want to access tips for managing stress, so I can apply them in day to day life.
- Implemented a 'Coping Strategies' section, with tips on managing mental health.

<br>

4. As a user, I want the website to have a calming colour scheme and layout, so I feel at comfortable.
- Used a colour scheme, utilising an off-white background colour.
- Spaced the sections on the page so that that it is more easily navigable and readable.

<br>

5. As a user, I want to see calming images, to be better engaged in the page content.
- Added relevant nature-inspired images.

### Advanced Features (Should-Haves)

1. As a user, I want to see a positive thoughts section, for motivation.
- The first section, when scrolling down is a bootstrap card with an introduction and keeping positive section.

<br>

2. As a user, I want access to external mental health resources, so I can find additional help if needed.
- Added a resources section, with bootstrap cards, linking to external resources.

<br>

3. As a user, I want the website to be fully responsive, so I can access it comfortably on any device.
- Utilised bootrap classes and media queries to ensure full responsivity and ease of use on all devices.

### Optional Features (Could-Haves)

1. Added a smooth-scrolling feature when navigation links are clicked on.

2. Added a parallax to the hero image, for a smooth transition to the rest of the page.

## AI Tools Usage

### ChatGPT

ChatGPT was utilised in order to provide content for the page. Most of the page content was prompted, then modified in order to suit.

## Testing and Validation

### Testing finds

The site was tested on various screen sizes throughtout the creation process, the main issues found were with text spacing, which was fixed through the use of bootstrap margin and border classes. 

Additionally, bootstrap column classes were set up differently depending on the screen sizing, in order to increase readability on smaller devices. As a part of this, the tree image was resized and reshaped, so that it wouldn't take up the whole screen on smaller devices.

### Screenshots  taken from the deployed website:

<br>

<p float="left">
    <img src="assets/images/Phone-site.png" alt="Image of the site on a phone" width=300>
    <img src="assets/images/tablet-site.png" alt="Image of the site on a tablet" width=500>
    <img src="assets/images/Laptop-site.png" alt="Image of the site on a laptop" width=700>
</p>


### Validation

The HTML and CSS were validated using W3C and Jigsaw validators, with no errors found.

<br>

<img src="assets/images/html validation .png" alt="Image showing HTML validation">

<br>

<img src="assets/images/CSS validation.png" alt="Image showing CSS validation">

## Deployment

### GitHub Pages

The site was deployed using GitHub pages, from the main branch.

<a href="https://oliver-tommy.github.io/Mental-Health-Awareness/" target="_blank">Link to the site</a>

## Reflection on Development Process

### Successes

- Managed to create a fully functioning page, with no huge issues.
- The layout and design is better than originally planned.
- Added some javascript functionality to make the website feel more smooth and responsive.

### Challenges

- Sticking to the predetermined plan.
- Once I got going, I couldn't stop, as there was a constant stream of new ideas to implement.

### Final Thoughts

- In the next project I plan to utilise a kanban board or similar process to break-down the features to implement.

## Code Attribution

### Bootstrap

The bootstrap framework was utilised for this project (version 4.6.2).

Reference to the <a href="https://getbootstrap.com/docs/4.0/getting-started/introduction/" target="_blank">bootstrap documentation</a> was used to implement several features across the site.

### Javascript Features

As I have no prior experience in JavaScript, references were used in order to implement the smooth-scroll and parallax features.

Smooth-scroll reference: https://stackoverflow.com/questions/10063380/smooth-scroll-without-the-use-of-jquery

Parallax reference: https://dev.to/ibrahima92/make-a-parallax-effect-with-10-lines-of-javascript-3hia

## Sources for Images, Icons and Logo

### Images

Hero background image source: https://unsplash.com/photos/photo-of-ocean-during-golden-hour-zsgiZnQtvsY

Tree image source: https://unsplash.com/photos/sun-light-passing-through-green-leafed-tree-EwKXn5CapA4

Yoga in nature image source: https://www.pexels.com/photo/a-woman-drinking-water-6298338/

### Icons

<a href="https://fontawesome.com/icons" target="_blank">Font Awesome</a> was used to provide the '>' icons for the bullet points.

### Logo

The logo was sourced from <a href="https://www.flaticon.com/free-icon/male-head-side-view-with-brains_30549?term=head&page=1&position=9&origin=search&related_id=30549" target="_blank">Flaticon.com</a>, and the base image was converted to a favicon using the website <a href="https://favicon.io/favicon-converter/" target="_blank">Favicon.io</a>.

## Future Improvements

- In the future, a light/dark mode would make the site more customisable to the users preference.
- More javascript features, to improve the modern aesthetic of the site, but not too much to overwhelm.
- Site performance optimisation.
- More pages and content.
- User interaction (Form sign-up for newsletter).
