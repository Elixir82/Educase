# PopX Account Management

A Simple React application for user account creation and management with responsive design.

## 🚀 Features

- **Account Settings Page** with user profile display
- **HTML5 Form Validation** with built-in browser validation
- **Responsive Design** optimized for mobile and desktop
- **Redux Integration** for state management
- **React Router** for navigation
- **Tailwind CSS** for styling

## 📱 Screenshots

### Sign-up Page
- Clean, modern interface with floating labels
- Form validation with HTML5 attributes
- Purple-themed UI matching modern design trends

### Account Settings
- User profile display with verification badge
- Clean card-based layout
- Responsive design

## 🛠️ Technologies Used

- **React** - Frontend framework
- **Redux Toolkit** - State management
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **HTML5** - Form validation and accessibility

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Signuppage.js      # Main sign-up form component
│   └── AccountSettings.js  # User profile settings page
├── Store/
│   └── authSlice.js       # Redux authentication slice
└── assets/
    └── icons/             # SVG icons and images

public/
├── images/
│   └── Group1585.svg      # Verification badge icon
└── index.html
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Elixir82/popx-account-management.git
cd popx-account-management
```

2. Install dependencies
```bash
npm install
```

## 🎨 Key Components

### Floating Label Form
- Custom CSS using Tailwind's peer selectors
- Smooth animations with duration controls
- Accessible form structure with proper labels

### Form Validation
- HTML5 built-in validation
- Required field validation
- Email format validation
- Phone number pattern validation
- Password minimum length validation

### Redux Integration
- Centralized state management
- Authentication slice for user data
- Dispatch actions for sign-up process

## 🌐 Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy your app
4. Static assets in the `public` folder are served via Vercel's CDN

## 📝 Form Features

### Sign-up Form Fields
- **Full Name** - Required text input
- **Phone Number** - Required with pattern validation
- **Email Address** - Required with email validation
- **Password** - Required with minimum length
- **Company Name** - Optional text input
- **Agency Status** - Required radio button selection

### Validation Rules
- All required fields must be filled
- Email must be in valid format
- Phone number must be 10 digits
- Password must be at least 8 characters
- Agency status must be selected

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 👏 Acknowledgments

- Design inspiration from modern UI/UX patterns
- Tailwind CSS for the utility-first approach
- React community for excellent documentation

## 📞 Contact

For any questions or suggestions, feel free to reach out!
