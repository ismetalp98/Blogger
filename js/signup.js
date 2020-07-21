function signUp(){
    var email = document.getElementById("input-email").value;
    var password = document.getElementById("input-pss").value;
    var name = document.getElementById("input-name").value;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
            
      }).then(function(){
            var user = firebase.auth().currentUser;
            user.updateProfile({
            displayName: name ,
            }).then(function() {
                window.location.href = "../htmls/userpage.html";
            }).catch(function(error) {
            // An error happened.
            });
      });
}