# Technical Documentation

## 1. Introduction
This document provides a detailed technical explanation of the portfolio website developed by Zahra Almadeh. The purpose of this documentation is to describe how the system is structured, how its components interact, and how the main features are implemented.

The project is a client-side web application built using HTML, CSS, and JavaScript. It does not rely on a backend server. All logic and data handling occur within the browser.

---

## 2. System Overview

The portfolio website is a single-page application (SPA) that includes the following main sections:
- Header (Navigation Bar)
- About / Hero Section
- Projects Section
- Contact Section
- Footer

The system combines:
- Static content (HTML)
- Styled layout (CSS)
- Dynamic interactivity (JavaScript)

---

## 3. Architecture Design

### 3.1 Client-Side Architecture
The application follows a **pure front-end architecture**, meaning:
- No backend server is used
- No database is connected
- All data processing happens in the browser

### 3.2 Data Flow
- Static data (projects) is defined in HTML
- Dynamic data (GitHub repos) is fetched using API
- User inputs are validated in JavaScript
- User preferences are stored in localStorage

---

## 4. File Structure

```
project-folder/
│
├── index.html        # Main HTML structure
├── styles.css        # Styling and layout
├── script.js         # Interactivity and logic
└── assets/
    └── images/
        └── me.png    # Profile image
```

---

## 5. HTML Structure

### 5.1 Semantic Layout
The HTML uses semantic elements for clarity and accessibility:
- `<header>` for navigation
- `<main>` for main content
- `<section>` for grouping content
- `<article>` for project cards
- `<footer>` for bottom information

### 5.2 Sections Breakdown

#### Header
- Contains navigation links
- Includes theme toggle button
- Sticky positioning improves UX

#### Hero Section
- Displays user introduction
- Includes profile image and badges
- Contains dynamic elements (welcome + timer)

#### Projects Section
- Contains project cards
- Includes filter buttons and sorting dropdown
- Displays GitHub data dynamically

#### Contact Section
- Includes form inputs
- Displays validation messages

#### Footer
- Displays dynamic year
- Contains contact links

---

## 6. CSS Design System

### 6.1 CSS Variables
CSS variables are used to manage colors and themes:

Examples:
- `--bg`
- `--text`
- `--brand`
- `--border`

This allows easy switching between themes.

### 6.2 Theme System
The theme is controlled using:
```
html[data-theme="dark"]
```

- Light theme is default
- Dark theme overrides variables
- JavaScript updates the `data-theme` attribute

### 6.3 Layout Techniques
- Grid for main layout sections
- Flexbox for alignment (buttons, nav, forms)

### 6.4 Responsive Design
Media queries adjust:
- Grid layout (2-column → 1-column)
- Form layout
- Navigation spacing

---

## 7. JavaScript Functionality

## 7.1 Year Auto Update
- Retrieves current year using:
```
new Date().getFullYear()
```
- Updates footer dynamically

---

## 7.2 Theme Toggle System

### Logic:
1. Read saved theme from localStorage
2. Apply theme to `<html>` element
3. Update button icon
4. Toggle theme on click
5. Save new theme

### Benefit:
- Improves usability
- Maintains user preference

---

## 7.3 Form Validation System

### Validation Rules:
- All fields must be filled
- Email must follow valid format
- Message must be at least 10 characters

### Email Validation
Uses regex:
```
/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i
```

### Process:
1. Prevent default form submission
2. Read input values
3. Trim whitespace
4. Validate inputs
5. Show feedback message
6. Reset form if valid

### Improvement:
This was enhanced based on previous grading feedback where email validation was incorrect.

---

## 7.4 Project Filtering System

### Mechanism:
- Each project card has `data-category`
- Selected filter determines visibility

### Logic:
- If filter = "all" → show all
- otherwise → show matching category only

### UX Feature:
Displays message if no projects match

---

## 7.5 Project Sorting System

### Sorting Options:
- Default
- Name ascending/descending
- Date newest/oldest

### Implementation:
- Uses `dataset` attributes
- Uses `localeCompare()` for names
- Uses `Date` objects for sorting

### DOM Update:
Sorted cards are re-appended to the grid

---

## 7.6 Personalization Feature

### Process:
1. Check if name exists in localStorage
2. If not → prompt user
3. Save name
4. Display welcome message

### Benefit:
- Improves engagement
- Demonstrates localStorage usage

---

## 7.7 Timer Feature

### Implementation:
- Uses `setInterval()`
- Updates every second

### Output:
Displays:
```
Time on site: X seconds
```

---

## 7.8 GitHub API Integration

### API Used:
```
https://api.github.com/users/Zahraaalmadeh/repos
```

### Steps:
1. Send fetch request
2. Validate response
3. Convert to JSON
4. Extract top repositories
5. Create cards dynamically
6. Append to DOM

### Error Handling:
- Displays error message if fetch fails

### Importance:
- Adds real-time dynamic content
- Demonstrates API usage

---

## 8. Performance Considerations

- No heavy frameworks used
- Minimal DOM updates
- Efficient sorting logic
- Lazy image loading
- Lightweight CSS

---

## 9. Accessibility Considerations

- Semantic HTML structure
- Labels for all inputs
- Alt text for images
- ARIA attributes for dynamic content
- Clear user feedback messages

---

## 10. Browser Compatibility

Supported browsers:
- Chrome
- Edge
- Firefox
- Safari

Requires support for:
- ES6 JavaScript
- CSS variables
- Fetch API

---

## 11. Known Limitations

- No backend (form is simulated)
- GitHub API depends on internet
- Prompt-based input is basic UX
- Static project data

---

## 12. Bugs and Fixes

### Issue:
Email validation failed in previous assignment

### Fix:
- Replaced regex with stronger validation
- Improved validation flow
- Improved user feedback

### Issue:
Incorrect image path

### Fix:
```
assests → assets
```

---

## 13. Future Improvements

- Add backend for contact form
- Replace prompt with modal input
- Add project images
- Add search functionality
- Improve animations
- Add loading indicators
- Improve accessibility further

---

## 14. Conclusion

This project demonstrates a complete front-end application combining structure, styling, and interactivity. It includes advanced features such as API integration, dynamic filtering, validation, and personalization. The system is efficient, user-friendly, and improved based on previous feedback to meet higher academic standards.