# Shauryotsava 2025 - Sports Fest Website

Welcome to the official repository for **Shauryotsava 2025**, the annual sports fest of **Dr. A.P.J. Abdul Kalam Technical University (AKTU)**. This website is designed to manage event registrations, showcase event details, and provide a seamless user experience for participants. With a footfall of over **1200 participants**, this platform serves as the digital hub for the fest.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Key Components](#key-components)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Event Registration**: Dedicated registration forms for each event.
- **Event Details**: Comprehensive information about all events, including rulebooks and schedules.
- **Email Notifications**: Automated confirmation emails sent to participants upon successful registration.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Dynamic Event Management**: Easily configurable event data through a centralized data file.
- **Rulebook Downloads**: Participants can download event-specific rulebooks directly from the website.

---

## Project Structure

```
shauryautsav/
├── .env                     # Environment variables
├── public/                  # Static assets (images, PDFs, etc.)
├── src/                     # Source code
│   ├── assets/              # Static assets and data files
│   │   ├── data/            # Event and team data
│   │   └── images/          # Images used across the website
│   ├── components/          # Reusable React components
│   ├── pages/               # Individual pages (e.g., registration forms)
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Entry point for React
│   └── index.css            # Global styles
├── package.json             # Project dependencies and scripts
├── vite.config.js           # Vite configuration
└── README.md                # Documentation
```

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/shauryautsav.git
   cd shauryautsav
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the website in your browser at `http://localhost:5173`.

---

## Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
VITE_API1=<Google Script URL for team data>
VITE_API2=<Google Script URL for player data>
VITE_EMAILJS_SERVICE_ID=<EmailJS Service ID>
VITE_EMAILJS_TEMPLATE_ID=<EmailJS Template ID>
VITE_EMAILJS_PUBLIC_KEY=<EmailJS Public Key>
```

These variables are used for:

- Submitting registration data to Google Sheets.
- Sending confirmation emails using **EmailJS**.

---

## Usage

### Event Registration

1. Navigate to the **Events** page to view all available events.
2. Click on the **Register Now** button for your desired event.
3. Fill out the registration form with team and player details.
4. Submit the form to complete the registration process.

### Rulebook Access

- Each event has a downloadable rulebook available on the **Events** page.

---

## Key Components

### `Basketregistration.jsx`

- Handles the registration process for the Basketball event.
- Validates team and player details.
- Submits data to Google Sheets and sends confirmation emails.

### `Events2.jsx`

- Displays all events with their details, images, and registration links.
- Allows users to view event-specific rulebooks and register for events.

### `EventData.js`

- Centralized data file for managing event details such as names, images, dates, and rulebook links.

---

## Screenshots

### Events Page

![Events Page](public/images/screenshots/events_page.png)

### Registration Form

![Registration Form](public/images/screenshots/registration_form.png)

---

## Contributing

We welcome contributions to improve the website! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your forked repository:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- **AKTU** for organizing Shauryotsava 2025.
- **EmailJS** for enabling email notifications.
- **React** and **Vite** for powering the frontend.
- All contributors and participants for making this event a success!
