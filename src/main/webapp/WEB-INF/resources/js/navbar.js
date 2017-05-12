/**
 * Javascript for the site navigation bar
 * set active tab
 * user login, logout
 */

var profile;
var signedIn = false;
var profileImgUrl;
$(document).ready(function(){

    setActiveNav();
    signedIn = checkIfSignedIn();
    if (signedIn) {
        userSignedInUI();
    }
    else {
        userSignedOutUI();
    }

    // enable button onclick functions
    $("#btn-sign-in").on("click", onSignIn);
    $("#btn-sign-out").on("click", signOut);

});

/**
 * when a user clicks the sign in button
 * @param googleUser
 * @param authResult
 */
function onSignIn(googleUser, authResult) {
    if (signedIn)
        return true;

    var url = window.location.pathname;
    if (url == "/")
        url = url + "login";
    else
        url = url + "/login";

    profile = googleUser.getBasicProfile();
    profileImgUrl = profile.getImageUrl();

    if (!signedIn) {
        if(!url.includes("learn") && !url.includes("home")
            && !url.includes("Course") && !url.includes("Survey")
            && !url.includes("Video") && !url.includes("instructor")
            && !url.includes('settings') && !url.includes('application')
            && !url.includes('forum')) {
            var user = {};
            user["email"] = profile.getEmail();
            user["firstName"] = profile.getGivenName();
            user["lastName"] = profile.getFamilyName();

            $.ajax(url, {
                type: "POST",
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                data: JSON.stringify(user),
                success: function() {
                    //refresh the page
                    if (url.includes("localhost"))
                        window.location.href = "localhost:8080";
                    else
                        window.location.href = "http://psychspace-160921.appspot.com/";
                }
            });
    }


        // // check the user role show the link accordingly
        // var role = $("#user-role").val();
        // if (role == "Instructor") {
        //     var $li = '<li class="menu-item"> <a href="/instructor" class="menu-item-a">Instructor Page </a></li>';
        //     $(".user-dropdown:nth-child(1)").append($li);
        // }
        // else if (role == 'Admin') {
        //     var $li = '<li class="menu-item"> <a href="/admin_addArticle" class="menu-item-a">Admin Page </a></li>';
        //     $(".user-dropdown:nth-child(1)").append($li);
        // }

        //Store the entity object in sessionStorage where it will be accessible from all pages of your site.
        sessionStorage.setItem('user',JSON.stringify(user));
    }

    // hide signin button, show the user icon
    userSignedInUI();

}

/**
 * check if a user is signed in
 * @returns {boolean}
 */
function checkIfSignedIn()
{
    if(sessionStorage.getItem('user') == null){

        return false;

    } else {
        //User already logged in
        var userEntity = {};
        userEntity = JSON.parse(sessionStorage.getItem('myUserEntity'));
        return true;
    }
}

/**
 * user sign out
 */
function signOut() {
    var url = window.location.href;
    url = "/" + url.substring(url.lastIndexOf("/") + 1, url.length);
    if (url == "/")
        url = url + "logout";
    else
        url = url + "/logout";

    var auth2 = gapi.auth2.getAuthInstance();

    var user = {};
    // user["email"] = profile.getEmail();
    // user["firstName"] = profile.getGivenName();
    // user["lastName"] = profile.getFamilyName();

    $.ajax(url, {
        type: "POST",
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify(user),
        success: function() {
            signedIn = false;
        }
    });

    auth2.signOut().then(function () {
        sessionStorage.removeItem("user");
        console.log('User signed out.');
    });

    userSignedOutUI();

    if (url.includes("localhost"))
        window.location.href = "localhost:8080";
    else
        window.location.href = "http://psychspace-160921.appspot.com/";

}

/**
 * ui change when a user is signed in
 */
function userSignedInUI() {
    $("#nav-sign-in").hide();
    $("#nav-profile").show();
    $("#nav-home").show();
    $("#nav-learn").show();

    var userWelcome;
    if (profile != undefined) {
        profileImgUrl = profile.getImageUrl();
        userWelcome = "Hi " + profile.getName();
    }

    $("#user-name").text(userWelcome);
    $("#profile-img").attr(
        'src',
        profileImgUrl);
}

/**
 * ui change when a user is signed out
 */
function userSignedOutUI() {
    $("#nav-sign-in").show();
    $("#nav-profile").hide();
    $("#nav-home").hide();
    $("#nav-learn").hide();
}

/**
 * set the tab where the user is currently on
 */
function setActiveNav() {
    var url = window.location.href;
    url = url.substring(url.lastIndexOf("/") + 1, url.length);

    if (url == "home") {
        $("#nav-home-a").addClass("active");
        $("#nav-learn-a").removeClass("active");
        $("#nav-catalogue-a").removeClass("active");
        $("#nav-news-a").removeClass("active");
    }
    else if (url == "learn") {
        $("#nav-learn-a").addClass("active");
        $("#nav-home-a").removeClass("active");
        $("#nav-catalogue-a").removeClass("active");
        $("#nav-news-a").removeClass("active");
    }
    else if (url == "catalogue") {
        $("#nav-catalogue-a").addClass("active");
        $("#nav-learn-a").removeClass("active");
        $("#nav-home-a").removeClass("active");
        $("#nav-news-a").removeClass("active");
    }
    else if (url == "news") {
        $("#nav-news-a").addClass("active");
        $("#nav-learn-a").removeClass("active");
        $("#nav-catalogue-a").removeClass("active");
        $("#nav-home-a").removeClass("active");
    }
}
