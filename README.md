# Hello and welcome 👋

This is a blog that consists of 4 pages, including the home page, portfolio page, blog page, and contact page, all of which were developed using Next.js with the app router feature. The database for this project is powered by Firebase.

This project is open source, which means you are welcome to use it for your own purposes. To get started with installation, you'll need to follow these steps:

1. Create a Firebase project on the Firebase Console ([https://console.firebase.google.com/](https://console.firebase.google.com/)).
2. Within your Firebase project, set up Cloud Firestore as your database. You can do this by navigating to the Firebase Console and selecting "Firestore Database" from the left-hand menu.

Once you have your Firebase project and Cloud Firestore database set up, you can proceed with the installation of this blog. Feel free to refer to the project's documentation or README file for detailed instructions on how to configure and run the application.

## Firebase Admin SDK Configuration

1. Go to the Firebase Console and click on your project. Then, navigate to "Project settings" in the left-hand menu.
2. In the "Project settings" page, click on the "Service accounts" tab.
3. Under the "Firebase Admin SDK" section, you'll find a button that says "Generate new private key." Click on it.
4. This will trigger the download of a JSON file containing your Firebase Admin SDK configuration. Keep this file secure, as it contains sensitive information.
5. Next, open your project directory and create a `.env` file if it doesn't already exist.
6. Inside the `.env` file, you'll want to set the environment variables based on the information in the downloaded JSON file. Typically, you'll need to set variables like `FIREBASE_API_KEY`, `FIREBASE_AUTH_DOMAIN`, `FIREBASE_PROJECT_ID`, `FIREBASE_STORAGE_BUCKET`, `FIREBASE_MESSAGING_SENDER_ID`, and `FIREBASE_APP_ID`. The specific variables and values may vary depending on the structure of your Firebase Admin SDK JSON file.

Here's an example of what your `.env` file might look like:

```dotenv
NEXT_PUBLIC_API_URL=http://localhost:3000
FIREBASE_TYPE=service_account
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_PRIVATE_KEY_ID=your-api-key-id
FIREBASE_PRIVATE_KEY=your-api-key -> like this format {"privateKey": "[key]"}
FIREBASE_CLIENT_EMAIL=your-client-email
FIREBASE_CLIENT_ID=your-firebase-id
FIREBASE_AUTH_URI=https://accounts.google.com/o/oauth2/auth
FIREBASE_TOKEN_URI=https://oauth2.googleapis.com/token
FIREBASE_AUTH_PROVIDER_X509_CERT_URL=https://www.googleapis.com/oauth2/v1/certs
FIREBASE_CLIENT_X509_CERT_URL=your-firebase-client-x509-cert-url
FIREBASE_UNIVERSE_DOMAIN=googleapis.com
GA_MEASUREMENT_ID=your-google-analytics-measurement-id
```

7. Save the `.env` file in your project's root directory.
8. With these environment variables set in your `.env` file, your Next.js application will be able to access the Firebase Admin SDK and interact with your Firebase Cloud Firestore database.

## Installation

To install the project's dependencies, navigate to your project's root directory using your command line terminal, and then run the following commands:

**Yarn:**

```bash
yarn install
```

**npm:**

```bash
npm install
```

This will download and install all the required packages and dependencies specified in your project's `package.json` file.

## Running the Project

After successfully installing the dependencies, you can start your Next.js project using the development server. Here are the commands to do so:

**Yarn:**

```bash
yarn dev
```

**npm:**

```bash
npm run dev
```

Running this command will start the development server, and you should be able to access your Next.js application locally by visiting the specified address (usually something like [http://localhost:3000](http://localhost:3000)) in your web browser.

Make sure your environment variables are correctly set in your `.env` file, as mentioned earlier, to ensure that your Firebase configuration and other services work as expected in your project.
