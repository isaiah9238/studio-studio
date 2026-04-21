import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';
import * as admin from "firebase-admin";

// 1. Initialize Genkit (The Brain)
export const ai = genkit({
  plugins: [googleAI()],
  model: 'googleai/gemini-2.5-flash', 
});

// 2. Initialize Firebase Admin (The Authority)
if (!admin.apps.length) {
  admin.initializeApp({
    // Using the absolute path to your secrets folder
    credential: admin.credential.cert(require("../../secrets/serviceAccountKey.json")),
    databaseURL: `https://${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseio.com`
  });
}

export const adminDb = admin.firestore();