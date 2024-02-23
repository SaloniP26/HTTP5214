
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
    import {
    getDatabase,
    ref,
    child,
    get,
    onValue
  } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAf-AkbvhDa7UVma5Ok-ePN7V1oV07yXP8",
    authDomain: "fir-database-42e5b.firebaseapp.com",
    projectId: "fir-database-42e5b",
    storageBucket: "fir-database-42e5b.appspot.com",
    messagingSenderId: "184956790284",
    appId: "1:184956790284:web:5c1739043d87fc97eeb029"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

//<script type="module">
// Import the functions you need from the SDKs you need

  const database = getDatabase();
  const messages = ref(database, '/messages');

  onValue(
    messages,
    (snapshot) => {
    const ul = document.getElementById("messages");
    ul.replaceChildren();
    snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();

        console.log(childKey);
        console.log(childData);

        const text = document.createTextNode(childData.message);
        const li = document.createElement("li");

        li.appendChild(text);
        ul.appendChild(li);
    });

    // console.log(snapshot)
  }, 
  {
    onlyOnce: false,

  });
//</script>