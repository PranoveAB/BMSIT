function onSignIn(googleUser){

    var profile=googleUser.getBasicProfile();
    $(".g-signin2").css("display","none");
    $(".tname2").css("display","block");
    $(".imagize").attr('src',profile.getImageUrl());
   
}