function cleanFeed() {
    var allFeedObj = document.getElementsByClassName("relative ember-view");
    
    //TODO: use children element for better result.
    for(var i=0;i<allFeedObj.length;i++) {
        var text = allFeedObj[i].innerText
        if (text.includes("likes this")) {
            allFeedObj[i].style.display = "none";
        }
    }
}

window.onload = setInterval(cleanFeed, 1000)