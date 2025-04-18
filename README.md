  title: "👩‍🏫 Skill Exchange Platform"
  description: "A full-stack Skill Exchange Platform connecting students and mentors using React, Node.js, MongoDB, and WebSocket."
  sections:

    - heading: "📁 Project Structure"
      subsections:
        - title: "Frontend/"
          description: "Built using React"
          content: |
            Frontend/
            ├── components/         # Reusable UI components
            │   ├── Navbar.jsx
            │   └── Footer.jsx
            ├── pages/              # Main application pages
            │   ├── LandingPage.jsx
            │   ├── ProfilePage.jsx
            │   ├── Register.jsx
            │   ├── Login.jsx
            │   ├── Chat.jsx
            │   ├── Testimonial.jsx
            │   └── Report.jsx
            ├── utils/              # Utility functions
            ├── App.jsx             # Root component
            ├── main.jsx            # Entry point for React
            └── index.css           # Global styles

        - title: "Backend/"
          description: "Built using Node.js & Express"
          content: |
            Backend/
            ├── config/             # Configuration files (e.g., DB connection)
            ├── controllers/        # Route logic
            ├── middlewares/        # Auth, error handling
            ├── models/             # MongoDB Schemas
            ├── routes/             # API routes
            ├── utils/              # Helper functions & constants
            ├── app.js              # Initializes Express app
            ├── index.js            # Entry point of backend
            └── constants.js        # Constant values

    - heading: "🔐 Authentication Flow"
      content: |
        1. Login via Google:
           - Click Login → Redirects to http://localhost:8000/auth/google
           - Backend handles Google OAuth
           - Generates JWT and stores it in cookies

        2. Redirect Logic:
           - New User → Redirected to Registration Page
           - Existing User → Redirected to Discover Page

    - heading: "📝 Features"
      content: |
        1. 🏠 Landing Page:
           - Simple landing interface with login option

        2. 🧾 Registration Page:
           - Collects user data
           - Mentor-specific fields: experience, projects

        3. 🔍 Discover Page:
           - Browse all users
           - Filter and view mentor/student profiles

        4. 🙋‍♂️ Mentorship Request:
           - Students can request mentorship
           - Mentors accept/reject
           - Accepted → Enables communication

        5. 📅 Meeting Scheduler:
           - No direct calls
           - Students request date/time
           - Mentors respond via Nodemailer (email)

        6. 💬 Chat System:
           - Real-time chat using WebSocket.io
           - Share resources, text messages

        7. 🌟 Testimonial System:
           - Students & mentors can write testimonials
           - Displayed on respective profiles

    - heading: "🚀 Getting Started"
      subsections:
        - title: "Prerequisites"
          content: |
            - Node.js & npm
            - MongoDB
            - Google OAuth credentials

        - title: "Backend Setup"
          content: |
            cd Backend
            npm install
            npm start

        - title: "Frontend Setup"
          content: |
            cd Frontend
            npm install
            npm run dev

    - heading: "🛡️ Tech Stack"
      content: |
        - Frontend: React, JSX, CSS
        - Backend: Node.js, Express
        - Database: MongoDB
        - Auth: Google OAuth 2.0, JWT
        - Realtime: WebSocket.io
        - Emails: Nodemailer

 
