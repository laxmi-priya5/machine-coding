const section = [
    {
        title:"section 1" , 
        content:"content for section 1"
    },
    {
        title:"section 2" , 
        content:"content for section 2"
    },
    {
        title:"section 3" , 
        content:"content for section 3"
    }
]


document.addEventListener("DOMContentLoaded" , ()=>{
    let accordionContainer = document.querySelector(".accordion-container")
    
    section.forEach((item , index)=>{
        let sectionItem = document.createElement("div");
        sectionItem.classList.add("accordion-Item")
        let header = document.createElement("div");
        header.classList.add("section-header")
        header.innerText = item.title;

        let content =  document.createElement("div");
        content.classList.add("section-content")
        content.innerHTML= `<p>${item.content}</p>`;
        
        sectionItem.appendChild(header);
        sectionItem.appendChild(content);

        accordionContainer.appendChild(sectionItem)

        if(index == 0) {
            sectionItem.classList.add("active");
            content.style.display = "block"
        } 
        else{
             content.style.display = "none";
        }

    })

    accordionContainer.addEventListener("click",(event)=>{
        const header = event.target.closest(".section-header");

      
        if(!header)  return;
        const itemSection =  header.parentNode;

        const isActive  = itemSection.classList.contains("active");


        document.querySelectorAll(".accordion-Item").forEach((item)=>{
            item.classList.remove("active");
            item.querySelector(".section-content").style.display = "none";
        })

        itemSection.classList.add("active");
        itemSection.querySelector(".section-content").style.display = "block";
    })
})