$(document).ready(function () {

    var temail = document.getElementById("email");
    var tname = document.getElementById("name");
    var tbirth = document.getElementById("birth");

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            var docRef = db.collection("Users").doc(user.uid);
            docRef.get().then(function(doc) {
                if (doc.exists) {
                    temail.innerHTML = doc.data().userEmail;
                    tname.innerHTML = doc.data().userFullName;
                    tbirth.innerHTML = doc.data().birthDate;
                } else {
                   
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
        } 
        else {
            window.location.replace("../htmls/login.html");
        }
      });
    
    
});

function logOut()
{
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        firebase.auth().signOut().then(function() {
            window.location.replace("../Index.html");
          }).catch(function(error) {
            // An error happened.
          });
    } else {
      
    }
  });
}

