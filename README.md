A React Native mobile application that demonstrates full CRUD (Create, Read, Update, Delete) operations using Google Firebase Firestore as the backend database. The app allows users to manage a list of user profiles with name, email, and mobile information, accessible on both Android and iOS platforms.

### Stack
- **Language(s):** JavaScript (React Native)
- **Framework / runtime:** React Native 0.63.2, React 16.13.1
- **Notable libraries:** React Navigation (Stack Navigator), Firebase Firestore, React Native Elements (UI components), React Native Vector Icons

## How it's organized

```
android/                       Android native project files
  app/src/screens/             Screen components (UI)
    AddUserScreen.js           Create new user form
    UserScreen.js              List all users
    UserDetailScreen.js        View/edit/delete single user
ios/                          iOS native project files
App.js                        Navigation setup and stack navigator
index.js                      App entry point
package.json                  Dependencies and scripts
```

**How it fits together:**

The app uses React Navigation's Stack Navigator to manage screen transitions. When the app starts, `App.js` initializes the navigation stack with three screens: `AddUserScreen` (form to create users), `UserScreen` (list view), and `UserDetailScreen` (detail/edit view). Each screen interacts with Firebase Firestore's 'Users' collection—AddUserScreen creates records, UserScreen reads and displays them in real-time via `onSnapshot()`, and UserDetailScreen reads individual documents for editing or deletes them.

## How to run it

### Prerequisites
- Node.js and npm installed
- React Native CLI
- Android SDK / Android Studio (for Android)
- Xcode (for iOS)
- Firebase project with Firestore database configured

### Setup & Installation

```bash
# Install dependencies
npm install

# For Android
npm run android
# or
react-native run-android

# For iOS
npm run ios
# or
react-native run-ios

# Start Metro bundler (if not started automatically)
npm start
# or
react-native start
```

### Required Configuration
You must configure Firebase credentials in your native Android/iOS project files (google-services.json for Android, GoogleService-Info.plist for iOS). Ensure your Firebase project has a Firestore database initialized with a 'Users' collection.

### Scripts
- `npm start` — Start the Metro bundler
- `npm run android` — Build and run on Android emulator/device
- `npm run ios` — Build and run on iOS simulator/device
- `npm test` — Run Jest tests
- `npm run lint` — Run ESLint

---

````markdown name=README.md
# React Native CRUD Firebase

A React Native mobile application for managing user profiles with full CRUD functionality using Google Firebase Firestore.

## Features

- **Create** — Add new users with name, email, and mobile number
- **Read** — View all users in a searchable list with real-time updates
- **Update** — Edit existing user information
- **Delete** — Remove users with confirmation dialog
- **Real-time Sync** — Automatic updates using Firestore listeners
- **Cross-platform** — Runs on Android and iOS

## Stack

- **React Native** 0.63.2 — Cross-platform mobile framework
- **React** 16.13.1 — UI component library
- **Firebase Firestore** 7.5.1 — NoSQL cloud database
- **React Navigation** 5.7.3 — Screen navigation and routing
- **React Native Elements** 2.1.0 — Pre-built UI components

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v12 or later)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- Android SDK or Android Studio (for Android development)
- Xcode (for iOS development)
- A [Firebase](https://firebase.google.com/) project with Firestore enabled

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/omeshkumarfso/React-native-Crud-firebase.git
   cd React-native-Crud-firebase
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure Firebase**

   - Add `google-services.json` to `android/app/` (Android)
   - Add `GoogleService-Info.plist` to `ios/` (iOS)
   - Both files can be downloaded from your Firebase Console

4. **Start the Metro bundler**

   ```bash
   npm start
   ```

5. **Run on your device/emulator**

   ```bash
   # Android
   npm run android

   # iOS
   npm run ios
   ```

## Project Structure

```
react-native-crud-firebase/
├── android/
│   └── app/src/screens/
│       ├── AddUserScreen.js        # Form to create new users
│       ├── UserScreen.js           # Display list of all users
│       └── UserDetailScreen.js     # View/edit/delete single user
├── ios/                            # iOS native files
├── App.js                          # Navigation setup
├── index.js                        # App entry point
├── package.json                    # Dependencies
└── metro.config.js                 # Metro bundler config
```

## Usage

### Add User

1. Navigate to the "Add User" screen
2. Enter user details (name is required)
3. Tap "Add User" to save to Firestore
4. User appears immediately in the Users List

### View Users

- The Users List screen displays all users from Firestore
- Real-time updates appear automatically when users are added/deleted
- Tap a user to view/edit their details

### Update User

1. Tap a user from the list
2. Modify any field (name, email, mobile)
3. Tap "Update" to save changes
4. Redirected to Users List

### Delete User

1. Tap a user from the list
2. Tap the "Delete" button
3. Confirm deletion in the alert dialog
4. User is removed from Firestore

## Available Scripts

```bash
npm start          # Start Metro bundler
npm run android    # Build and run on Android
npm run ios        # Build and run on iOS
npm test           # Run Jest tests
npm run lint       # Run ESLint
```

## Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | 16.13.1 | UI library |
| `react-native` | 0.63.2 | Mobile framework |
| `@react-native-firebase/firestore` | 7.5.1 | Firestore integration |
| `@react-navigation/native` | 5.7.3 | Screen navigation |
| `@react-navigation/stack` | 5.9.0 | Stack navigator |
| `react-native-elements` | 2.1.0 | UI components |

## Firebase Firestore Setup

1. Create a Firestore database in your Firebase Console
2. Create a collection named `Users`
3. Each user document should have these fields:
   ```json
   {
     "name": "string",
     "email": "string",
     "mobile": "string"
   }
   ```

## Troubleshooting

**Firebase connection errors:** Verify `google-services.json` (Android) and `GoogleService-Info.plist` (iOS) are correctly placed and up-to-date from Firebase Console.

**Metro bundler errors:** Try clearing cache with `npm start -- --reset-cache`

**Build errors:** Clean build directories with `npm install && npm run android` or `npm run ios`

## License

Unlicensed — Open source project available for learning and modification.

## Author

[Omesh Kumar](https://github.com/omeshkumarfso)
````
