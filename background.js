// background.js

chrome.runtime.onInstalled.addListener(function() {
    //window.alert('background.js works');
});

chrome.browserAction.onClicked.addListener(function(tab) {
    //window.alert("onClicked works");
    var keywords = ['Coveo','BRP','Valnet','Lightspeed'];
    //window.alert("the keyword is "+keyword);
    
    //document.querySelectorAll("div").style.backgroundColor = "red";
    //window.alert("red worked");
    
    var context = document.querySelector(".pv-entity__secondary-title");

    var instance = new Mark(context);
    instance.mark("Victoria", {
    "element": "span",
    "className": "mark"
    });
    
    //window.alert("mark is done");
});
