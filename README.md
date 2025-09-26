# 📚 Cognitive Edge Library Showcase

**A clean, responsive, and interactive front-end website designed to showcase a curated collection of insightful books, featuring smooth navigation and detailed views.**

This project serves as a compelling landing page or a small, dynamic library application. It utilizes modern HTML, CSS, and JavaScript to deliver an engaging user experience, including dynamic content loading, smooth scrolling effects, and a thematic, inviting design.

---

## ✨ Features

This showcase is built to highlight content effectively while providing a polished user experience:

* **Dynamic Book Navigation:** Seamlessly cycle through different book profiles using dedicated 'Previous' and 'Next' buttons.
* **Dedicated Detail Views:** Separate, clean sections for **Book Details** and in-depth **Author Profiles**.
* **Interactive E-book Download Modal:** A stylish, form-based modal is triggered from multiple points (Hero/Navbar) to capture user information for an instant e-book download (e.g., *Thinking, Fast and Slow*).
* **Smooth UX Enhancements:** Implements a content fade-in animation on scroll using the **Intersection Observer API** for a modern, focused feel.
* **Fully Responsive Design:** Ensures a visually appealing and functional layout across all devices (mobile, tablet, and desktop).
* **Thematic Aesthetic:** A warm, library-inspired color palette utilizing custom CSS properties (`--dark-brown`, `--beige`, etc.).

---

## 🛠️ Technology Stack

This project is purely a client-side web application built with foundational web technologies:

* **HTML5:** Semantic structure for accessibility and clarity.
* **CSS3:** Includes custom properties for easy theming, Flexbox/Grid for layout, and media queries for responsiveness.
* **JavaScript (ES6+):** Handles all client-side logic, including DOM manipulation, event listeners, modal control, and the dynamic content display/navigation.

---

## 🧭 Interactive Guide

The primary purpose of this project is its interactive experience. Here's a breakdown of how a user interacts with the application:

| Element | Interaction | Location |
| :--- | :--- | :--- |
| **Download E-book** Button | **Click to open** a full-screen, focused download form modal. | Navbar and Hero Section |
| **Close Modal** Button | **Click `&times;` or press `ESC`** to instantly close the download form and reset the fields. | Download Modal |
| **Previous/Next** Buttons | **Click to cycle** through the pre-defined book objects in `script.js`, dynamically updating the cover, details, and description. | Book Detail Section |
| **Learn More About the Author** Button | **Click to toggle** the view from the Book Details section to the dedicated **Author Detail Card**. | Book Detail Section |
| **Back to Book Details** Button | **Click to return** to the main book information card without losing your current book selection. | Author Detail Card |
| **Scrolling** | **Scroll down** the page to see content sections elegantly fade and slide into view for a smooth visual transition. | All Main Sections |

---

## 📁 Project Structure

The codebase is organized into three clean and standard files:
