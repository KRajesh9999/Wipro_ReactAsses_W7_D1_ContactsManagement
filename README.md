## React Authentication & Contact App
📌 Overview:
This is a simple React.js application demonstrating:
User Registration & Login functionality (using localStorage).
Protected Route (only logged-in users can access the Contact page).
React Context API for global authentication state.
React Hooks (useState, useContext, useEffect, useNavigate) for state and navigation handling.
Styled using Bootstrap + custom App.css.

## How to Run Locally
Clone this repository
git clone <your-repo-url>
cd <your-repo-folder>

Install dependencies
npm install

Start the development server
npm start

Open your browser and go to
http://localhost:3000

## Application Architecture
src/
 ├── components/
 │    ├── Login.js         # Login page
 │    ├── Register.js      # Register page
 │    ├── Contact.js       # Protected Contact page
 │    ├── ProtectedRoute.js# Restricts access to logged-in users
 │
 ├── context/
 │    └── AuthContext.js   # React Context API for authentication
 │
 ├── App.js                # Main app, routes defined here
 ├── App.css               # Styling (Bootstrap + Custom CSS)
 └── index.js              # App entry point

## React Hooks & Context API Implementation
🔹 React Hooks Used
useState → Manage form inputs, authentication state, and errors.
useEffect → Sync authentication state with localStorage when app loads.
useContext → Consume authentication values (user, login, logout) across components.
useNavigate (from React Router) → Redirect user after successful login/register.

🔹 Context API
AuthContext is created using React.createContext().
It wraps the entire app (<AuthProvider>) in index.js.

Application Snap Shots:
1. Login Page:
   <img width="1904" height="907" alt="image" src="https://github.com/user-attachments/assets/a958ef68-831d-43f8-afc7-08c4e8b725f3" />

2. Register Page:
   <img width="1898" height="940" alt="image" src="https://github.com/user-attachments/assets/0d94c913-bbb0-4d35-adf1-18845b46e442" />
   
3. Contacts Page:
   <img width="1910" height="927" alt="image" src="https://github.com/user-attachments/assets/1dfc6765-d302-4b05-9600-4903d028bede" />

4. Contacts Addin page:
   <img width="1909" height="939" alt="image" src="https://github.com/user-attachments/assets/3fcdab87-80a1-4d83-bbe9-9079b8279828" />

