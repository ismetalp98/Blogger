function signUp(){
    var userEmail = document.getElementById("input-email").value;
    var userPassword = document.getElementById("input-pss").value;
    var userFullName = document.getElementById("input-name").value;
    var birthdate = document.getElementById("input-birth").value;


        firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).then((success) => {
            var user = firebase.auth().currentUser;
            var uid;
            if (user != null) {
                uid = user.uid;
            }
            
            var newUser = db.collection("Users").doc(uid);
            var userData = {
                userFullName: userFullName,
                birthDate: birthdate,
                userEmail: userEmail,
                userFb: "https://www.facebook.com/",
                userTw: "https://twitter.com/",
                userGp: "https://plus.google.com/",
                userBio: "User biography",
            }
            newUser.set(userData).then((value) => {
                setTimeout(function(){
                    window.location.replace("../Index.html");
                }, 1000)
            });
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            
        });
    
}

