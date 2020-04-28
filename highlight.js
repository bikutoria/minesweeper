// highlight.js

/*
chrome.runtime.onInstalled.addListener(function() {
 
    window.alert('pre code');

    var context = document.querySelector(".context");
    var instance = new Mark(context);
    instance.mark("Victoria");

    window.alert('after code');
});
*/
chrome.browserAction.onClicked.addListener(function(tab) {
    window.alert("highlight js clicked");
    
    var markInstance = new Mark(document.querySelector(".context"));

    //var keywordInput = ['Victoria'];
    var keyword = keywordInput.value;
    window.alert(keyword);

    var context = document.querySelector(".context");
    window.alert(context);

    var instance = new Mark(context);

instance.mark(keyword);
});

// search in the ATS by selecting the text
/*
chrome.runtime.onInstalled.addListener(function() {
 
 function searchsmartrecruiters(info)
{
 var searchstring = info.selectionText;
 chrome.tabs.create({url: "https://www.smartrecruiters.com/app/people/?keyword=" + searchstring})
}

chrome.contextMenus.create({title: "Search in SmartRecruiters", contexts:["selection"], onclick: searchsmartrecruiters});

});
*/

//need to be finished, search by clicking the button
/*
chrome.browserAction.onClicked.addListener(function(tab) {
 
    window.alert('button works');
    //var list = document.getElementsByTagName("div");
    //window.alert('list works '+list.firstChild.innerHTML);
    var name = document.getElementsByClassName("li.inline.t-24.t-black.t-normal.break-words");
    window.alert('name works');
    window.alert("it is "+name.textContent);
    var recr_name = document.getElementsByClassName("searchable");
    window.alert("it is "+recr_name[0]);
    
});
*/
