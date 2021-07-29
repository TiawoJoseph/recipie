  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAwDeuUVBJ_ZI7yx3jAxnRFI85k9kv5Ar8",
    authDomain: "recipie-6a2f3.firebaseapp.com",
    projectId: "recipie-6a2f3",
    storageBucket: "recipie-6a2f3.appspot.com",
    messagingSenderId: "419980667971",
    appId: "1:419980667971:web:37702536084de0336678f6",
    measurementId: "G-MXK9LN4Y12"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
     Redirect();




    } else {
      
    }
  });

function login(){
    var userEmail= document.getElementById("email_feild").value;
    var userPass= document.getElementById("password_feild").value;

 

}
firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " +errorMessage);
  });
function Redirect (){
    window.location="index.html";
}