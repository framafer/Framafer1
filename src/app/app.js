// login

import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();



$('#login').click(function(){
    firebase.auth()
    .SignInWithPopup(provider)
    .then(function(result){
        console.log(result.user);
        $('#login').hide();
        $('#root').append("<img src='"+ result.user.photoURL + "'/>");
    });
});

