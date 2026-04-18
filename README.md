# 202254580-ZahraAlmadeh-Assignment3
# Zahra Almadeh Portfolio Website

## Project Title
Personal Portfolio Website for Zahra Almadeh

## Overview
This project is a personal portfolio website developed as part of a university assignment. The website presents personal, academic, and technical information in a professional and interactive format. It is designed to showcase the student’s background, selected projects, technical interests, and contact information while demonstrating front-end web development skills.

The website combines clean visual design with practical functionality. It includes responsive sections, project filtering and sorting, form validation, theme switching, personalization using browser storage, and dynamic GitHub repository integration. The overall goal of the project is to build a modern and user-friendly portfolio that reflects both design awareness and technical ability.

---

## Purpose of the Project
The main purpose of this project is to create a complete portfolio website that can serve as both:
1. An academic assignment submission
2. A personal professional portfolio foundation for future use

---

## Project Objectives
The project was designed to achieve the following objectives:

- Build a fully functional and responsive website
- Apply HTML, CSS, and JavaScript concepts in a real project
- Demonstrate project work in an organized way
- Implement dynamic front-end features
- Improve user interaction and usability
- Use API integration to display live data
- Provide professional-level documentation

---

## Features

### 1. Navigation Bar
- Sticky header for easy navigation
- Links to About, Projects, and Contact sections
- Theme toggle button for switching between light and dark mode

### 2. Hero / About Section
- Displays name and role
- Short introduction
- Skill badges
- Call-to-action buttons
- Personalized welcome message
- Live visit timer
- Profile image

### 3. Projects Section
- Displays project cards with:
  - Title
  - Description
  - Date
  - Category
- Filtering system (AI, Database, Java, GitHub)
- Sorting system (name and date)
- Empty message when no projects match

### 4. GitHub Integration
- Fetches repositories from GitHub API
- Displays latest repositories dynamically
- Handles loading and error states

### 5. Contact Form
- Fields: Name, Email, Message
- Validation includes:
  - Required fields
  - Email format checking
  - Minimum message length
- Displays success and error messages

### 6. Theme Toggle
- Switch between light and dark mode
- Saves preference in localStorage

### 7. Personalization
- Prompts user for name
- Stores name in localStorage
- Displays welcome-back message

### 8. Timer Feature
- Shows how long the user has stayed on the website
- Updates every second

### 9. Footer
- Displays current year automatically
- Email link
- LinkedIn link
- Back-to-top link

---

## Technologies Used

### HTML5
- Semantic structure
- Accessibility-friendly elements

### CSS3
- CSS variables
- Flexbox and Grid
- Responsive design
- Theme support

### JavaScript
- DOM manipulation
- Event handling
- Form validation
- Local storage
- Fetch API

### GitHub API
- Used to fetch live repositories

---

## File Structure

```
project-folder/
│
├── index.html
├── styles.css
├── script.js
└── assets/
    └── images/
        └── me.png
```

---

## Setup Instructions

### Option 1: Open in Browser
1. Place all files in one folder
2. Ensure correct structure
3. Open `index.html` in a browser

### Option 2: Use VS Code Live Server
1. Open project in VS Code
2. Install Live Server extension
3. Right-click index.html
4. Click "Open with Live Server"

---

## How to Use

- Use navigation bar to move between sections
- Toggle theme using the button
- Filter and sort projects
- Fill contact form correctly to submit
- View GitHub repositories automatically

---

## Functional Highlights

- Dynamic filtering and sorting
- Real-time validation
- Persistent theme using localStorage
- API integration for live data
- Personalized user experience

---

## Accessibility

- Semantic HTML structure
- Labels for all inputs
- Alt text for images
- ARIA attributes for accessibility
- Clear user feedback messages

---

## Browser Compatibility

Works on:
- Chrome
- Edge
- Firefox
- Safari

---

## Known Limitations

- Contact form does not send real emails
- GitHub API depends on internet
- Prompt-based input is basic UX
- LinkedIn link is placeholder

---

## Improvements from Assignment 2

- Fixed email validation issue
- Added detailed setup instructions
- Improved documentation depth
- Enhanced user feedback messages
- Added better explanation of features

---

## Future Improvements

- Connect form to backend service
- Add project images
- Replace prompt with modal
- Add search feature
- Improve animations
- Enhance accessibility further

---

## Author

Zahra Almadeh  
Software Engineering Student at KFUPM

---

## Contact

Email: almadehzahra05@gmail.com  
LinkedIn: (update with real link)

---

## Final Note

This project demonstrates the ability to build a complete, interactive, and responsive portfolio website using core front-end technologies. It also reflects improvements based on previous feedback and focuses on both functionality and documentation quality.