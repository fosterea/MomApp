import { Injectable } from '@angular/core';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRMjkQPFS2lHoDu7o-ytBAh8x40vsLMes",
  authDomain: "yomamacentral-b1d2b.firebaseapp.com",
  projectId: "yomamacentral-b1d2b",
  storageBucket: "yomamacentral-b1d2b.appspot.com",
  messagingSenderId: "868886475052",
  appId: "1:868886475052:web:db982739e6998e9cdbfc89",
  measurementId: "G-6X5MJRTS9T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }
}
