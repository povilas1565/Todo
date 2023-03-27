import { initializeApp } from "firebase/app";
importScripts("https://www.gstatic.com/firebasejs/9.8.4/firebase-app-compat.js")
importScripts("https://www.gstatic.com/firebasejs/9.8.4/firebase-messaging-compat.js")
const firebaseConfig = {
  messagingSenderId: "349551352050",
};
const app = initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);
messaging.onBackgroundMessage(payload => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "https://img5.goodfon.ru/original/1920x1080/4/88/derevo-tsvety-vesna.jpg"
  }
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  )
})