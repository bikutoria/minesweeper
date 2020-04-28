// content.js

chrome.browserAction.onClicked.addListener(function(tab) {
    window.alert("content clicked");
    var keyword = 'Victoria';
    window.alert("the keyword is "+keyword);

    //var element = document.getElementByClassName("ember-view");
    //element.classList.add("highlight");
    /*
    var context = document.querySelector(".person-details");
    var instance = new Mark(context);
    */
    //window.alert(keyword);

    //var context = document.querySelector(".context");

    //instance.mark(keyword);
});