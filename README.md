# GigBite

GigBite is a micro-task and earning platform designed to connect workers and buyers for task-based collaborations. The platform ensures seamless task management, coin-based payments, and role-specific dashboards. This repository contains the client-side code built with React, Tailwind CSS, and other modern libraries.



## Admin
- Admin Email: shahreza.dev@gmail.com
- Admin Password: HappyCoding01

## Live Site
- https://gig-bite.web.app/


## Features

### **Authentication**
- User authentication via Firebase.
- Role-based access control: `Admin`, `Buyer`, and `Worker`.

### **Buyer Features**
- Add new tasks with a detailed form.
- Manage tasks and workers.
- Approve or reject submissions.
- View pending tasks and payments made.

### **Worker Features**
- View available tasks.
- Submit work for approval.
- Track submission status.
- View total earnings and pending submissions.

### **Admin Features**
- Manage all users (Update roles, remove users).
- Approve or reject withdrawal requests.
- View platform-wide statistics, including total users, coins, and payments.

### **Payment System**
- Stripe-based integration for purchasing coins.
- Dynamic pricing cards for coin purchases.
- Payment history tracking for buyers.

### **Notification System**
- Real-time notifications for task updates and approvals.
- Notifications sorted by time and shown as a dropdown in the navbar.

### **Responsive Design**
- Fully responsive design optimized for all devices.
- Sidebars and modals adapt dynamically based on the user interface.



## Installation

### Prerequisites
Make sure you have the following installed:
- Node.js
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/gigbite-client.git
   ```

2. Navigate to the project directory:
   ```bash
   cd gigbite-client
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open the application in your browser:
   ```
   http://localhost:5173
   ```



## Dependencies

Below is the list of dependencies used in the project:

- **Core**:
  - `react`: ^18.3.1
  - `react-dom`: ^18.3.1
  - `react-router-dom`: ^7.1.1

- **UI Libraries**:
  - `@mui/material`: ^6.4.0
  - `@mui/icons-material`: ^6.4.0
  - `@heroicons/react`: ^2.2.0
  - `@material-tailwind/react`: ^2.1.10
  - `tailwindcss-animate`: ^1.0.7
  - `swiper`: ^11.2.1

- **Forms and Validation**:
  - `react-hook-form`: ^7.54.2
  - `react-select`: ^5.9.0
  - `react-datepicker`: ^7.6.0

- **State Management**:
  - `@tanstack/react-query`: ^5.64.1

- **Animations**:
  - `framer-motion`: ^11.18.1
  - `motion`: ^11.18.1

- **Payment Integration**:
  - `@stripe/react-stripe-js`: ^3.1.1
  - `@stripe/stripe-js`: ^5.5.0

- **Notifications and Alerts**:
  - `react-hot-toast`: ^2.5.1
  - `sweetalert2`: ^11.15.10

- **Icons**:
  - `lucide-react`: ^0.471.1
  - `react-icons`: ^5.4.0

- **Networking**:
  - `axios`: ^1.7.9

- **Utilities**:
  - `clsx`: ^2.1.1

- **Firebase**:
  - `firebase`: ^11.1.0

---

## Folder Structure

```plaintext
├── src
│   ├── Components   
│   ├── Pages         
│   ├── Hooks        
│   ├── Layouts      
│   ├── Context        
│   ├── Router         
│   └── Libs        
├── public           
├── README.md        
└── package.json      
```

---

## Scripts

- **Start Development Server**:
  ```bash
  npm run dev
  ```

- **Build for Production**:
  ```bash
  npm run build
  ```

- **Preview Production Build**:
  ```bash
  npm run preview
  ```

---


## Author

Developed by [Shah Reza](https://github.com/Rza-O). Feel free to reach out for collaboration or suggestions!

---

## Feedback

If you encounter any issues or have suggestions for improvement, please open an issue in this repository.
