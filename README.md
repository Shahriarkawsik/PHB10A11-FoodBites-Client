# FoodBites

## Purpose

FoodBites is a food-sharing platform dedicated to reducing food waste and helping those in need. It enables users to donate surplus food and organize events to support underprivileged communities. Logged-in users can create food donation listings, and other users can request to receive these donations, fostering a collaborative and compassionate environment.

## Screenshots

### Home Page

![Screenshot 1](https://github.com/Shahriarkawsik/PHB10A11-FoodBites-Client/blob/main/src/assets/screenshot/foodbites-p1.png)

### Available Foods

![Screenshot 2](https://github.com/Shahriarkawsik/PHB10A11-FoodBites-Client/blob/main/src/assets/screenshot/foodbites-p2.png)

## 🛠 Technologies Used

- **Frontend:** TailwindCSS,daisyUI, React.js,
- **Backend:** Node.js, Express.js,
- **Database:** MongoDB
- **Authentication:** JSON Web Token (JWT), firebase auth

## 📦 Dependencies Used

- **Frontend Dependencies:**

  - @tanstack/react-query
  - aos
  - axios
  - firebase
  - localforage
  - lottie-react
  - match-sorter
  - motion
  - react
  - react-dom
  - react-icons
  - react-modal
  - react-multi-carousel
  - react-router-dom
  - react-toastify
  - sort-by
  - surge
  - sweetalert2

- **Backend Dependencies:**

  - cors
  - dotenv
  - express
  - jsonwebtoken
  - mongoose
  - vercel

## 🛠 How to Run Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/programming-hero-web-course2/b10a11-client-side-Shahriarkawsik.git
cd task2earn
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Set Up Environment Variables

Create a `.env.local` file in the root directory and add:

```env
VITE_apiKey= API KEY
VITE_authDomain= foodbites-2008e.firebaseapp.com
VITE_projectId= foodbites-2008e
VITE_storageBucket= foodbites-2008e.firebasestorage.app
VITE_messagingSenderId= 570578796956
VITE_appId= 1:570578796956:web:486fc0dd9291e87e34c859
VITE_measurementId= G-F7FPLKC44
```

### 4️⃣ Start the Server

```bash
npm run dev
```

## Key Features

1. A visually appealing homepage with smooth animations using AOS (Animate on Scroll).
2. Interactive recipe cards with dynamic visuals powered by Lottie animations.
3. A customizable modal system for detailed recipe information using React Modal.
4. A responsive multi-carousel to showcase featured recipes and user reviews.
5. Real-time notifications for user interactions, powered by React Toastify.
6. Elegant and intuitive alerts for user actions using SweetAlert2.
7. Integration of React Icons for a modern and cohesive design aesthetic.

## Packages Used

1. **AOS**: For smooth and engaging scroll animations.

   - [AOS Documentation](https://michalsnik.github.io/aos/)

2. **Lottie-React**: For integrating high-quality animations into the user interface.

   - [Lottie-React Documentation](https://www.npmjs.com/package/lottie-react)

3. **React-Modal**: For creating accessible and customizable modal dialogs.

   - [React-Modal Documentation](https://reactcommunity.org/react-modal/)

4. **React-Multi-Carousel**: For implementing responsive and visually appealing carousels.

   - [React-Multi-Carousel Documentation](https://www.npmjs.com/package/react-multi-carousel)

5. **React-Toastify**: For providing stylish and customizable toast notifications.

   - [React-Toastify Documentation](https://fkhadra.github.io/react-toastify/)

6. **SweetAlert2**: For adding elegant pop-up messages and alerts.

   - [SweetAlert2 Documentation](https://sweetalert2.github.io/)

7. **Surge**: For deploying the project to a live environment.

   - [Surge Documentation](https://surge.sh/)

8. **React Icons**: For incorporating scalable vector icons in the design.

   - [React Icons Documentation](https://react-icons.github.io/react-icons/)

9. **tanstack/react-query**: For efficient and flexible data fetching and caching in React applications.

   - [tanstack/react-query Documentation](https://tanstack.com/query/latest)

## Live URL

- **Firebase Live Link**: [FoodBites on Firebase](https://foodbites-2008e.web.app)
- **Surge Live Link**: [FoodBites on Surge](https://sparkling-cow.surge.sh)
- **GitHub Repository**: [FoodBites Repository](https://github.com/Shahriarkawsik/PHB10A11-FoodBites-Client.git)

---
