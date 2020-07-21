function logIn(){
    var email = document.getElementById("input-email").value;
    var pss = document.getElementById("input-pss").value;
    firebase.auth().signInWithEmailAndPassword(email, pss).then(function(){
      window.location.href = "../htmls/userpage.html"
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
}

function logIngoogle(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        alert(errorMessage)
      });
}


/*firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
          }).catch(function(error) {
            // An error happened.
          });
    } else {
      
    }
  });*/