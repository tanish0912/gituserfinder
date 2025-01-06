
var button = document.querySelector("#sbtn").addEventListener("click", getData);


async function getData(){
    var username = document.querySelector("#username-input").value;


    const url = `/api/github?username=${username}`;
    try{

        const response = await fetch(url);
        
        if(!response.ok){
            throw new Error(`Response status: ${response.status}`);
        }
        
        const json = await response.json();

        var userDetails = {
            "name": json.name,
            "profileImg": json.avatar_url,
            "bio": json.bio,
            "twitter": json.twitter_username,
            "followers": json.followers,
            "publicRepos": json.public_repos,
            "location": json.location,
            "following": json.following,
            "blog": json.blog,
        }

     
        var pimg = document.querySelector(".pimg");
        pimg.classList.add("profile-img");
        pimg.setAttribute("src",userDetails.profileImg);
        
        var udetails = document.querySelector(".udetails");
        udetails.classList.add("user-details");


    
        var fullName = udetails.querySelector("#fullName");
        fullName.innerHTML = userDetails.name;


     
        var userName = udetails.querySelector("h5");
        userName.innerHTML = username;
        userName.style.color = "rgb(0,123,251)";


        var bio = udetails.querySelector("#bio");
        bio.innerHTML = userDetails.bio;

        var mpd = document.querySelector(".mpd");
        mpd.classList.add("main-profile-details");

        mpd.querySelector("#public-repos").innerHTML = "Repos";
        mpd.querySelector(".repos h3").innerHTML = userDetails.publicRepos;

        mpd.querySelector(".followers h4").innerHTML = "Followers";
        mpd.querySelector(".followers h3").innerHTML = userDetails.followers;

        mpd.querySelector(".following h4").innerHTML = "Following";
        mpd.querySelector(".following h3").innerHTML = userDetails.following;


        var userDataResult = document.querySelector(".user-data-result");
        var twitterIcon = userDataResult.querySelector(".ti");
        var locationIcon = userDataResult.querySelector(".loc");
        var linkIcon = userDataResult.querySelector(".link");

        twitterIcon.classList.add('bi', 'bi-twitter');
        locationIcon.classList.add('bi', 'bi-geo-alt-fill');
        linkIcon.classList.add('bi', 'bi-link');

        twitterIcon.textContent = " " + userDetails.twitter;
        locationIcon.textContent = " " + userDetails.location;
        linkIcon.textContent = " " + userDetails.blog;

        

        }


    catch (error) {
        return error.message;
      }

}