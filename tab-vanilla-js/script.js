const tabData = [
    {
        id:"tab1",
        title:"Tab 1",
        content:"This is a content of Tab1"
    },
    {
        id:"tab2",
        title:"Tab 2",
        content:"This is a content of Tab2"
    },
    {
        id:"tab3",
        title:"Tab 3",
        content:"This is a content of Tab3"
    }
]

document.addEventListener("DOMContentLoaded" , function(){
    let activeTab = tabData[0].id;

    //  function renderTabs(){

    //  }

    // render tabs
    const tabContainer = document.querySelector("#tabContainer")
    const tabContentContainer = document.querySelector(".tabContentContainer")
    tabData.forEach((tab)=>{
        const tabButton = document.createElement("button");
        tabButton.className = "tabLinks";
        tabButton.setAttribute("data-tab" , tab.id)
        tabButton.textContent = tab.title;
        tabContainer.appendChild(tabButton)

        const tabContent = document.createElement("div");
        tabContent.id = tab.id;
        tabContent.className = "tabContent";
        tabContent.innerHTML = `<h3>${tab.title}</h3><p>${tab.content}</p>`
        tabContentContainer.appendChild(tabContent)
    })


    document.addEventListener("click" , (event)=>{
        if(event.target.matches('.tabLinks') ){
           const tabId = event.target.getAttribute("data-tab")
           if(tabId !== activeTab){
              openTab(tabId);
              activeTab=tabId;
           }
        }
    })

    function openTab(tabId){
        const tabLinks = document.querySelectorAll('.tabLinks')
        const tabContent = document.querySelectorAll('.tabContent')
        
        tabLinks.forEach(tab=>tab.classList.remove("active"))
        tabContent.forEach(tab=>tab.classList.remove("active"))

        document.getElementById(tabId).classList.add("active");  // add active to tab content
        document.querySelector(`button[data-tab]`).classList.add("active")
    }
})

