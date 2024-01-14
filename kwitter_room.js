firebaseConfig = {
      apiKey: "AIzaSyBUtux__In3bZ4kJITr2xeLFs9CAdgBEZI",
      authDomain: "new-food-c430f.firebaseapp.com",
      databaseURL: "https://new-food-c430f-default-rtdb.firebaseio.com",
      projectId: "new-food-c430f",
      storageBucket: "new-food-c430f.appspot.com",
      messagingSenderId: "41890507864",
      appId: "1:41890507864:web:621d9cd8ac0f69c2e62e2d"
    };


firebaseConfig = {
      apiKey: "AIzaSyBUtux__In3bZ4kJITr2xeLFs9CAdgBEZI",
      authDomain: "new-food-c430f.firebaseapp.com",
      databaseURL: "https://new-food-c430f-default-rtdb.firebaseio.com",
      projectId: "new-food-c430f",
      storageBucket: "new-food-c430f.appspot.com",
      messagingSenderId: "41890507864",
      appId: "1:41890507864:web:621d9cd8ac0f69c2e62e2d"
    };

    // Initialize Firebase
const app = initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
