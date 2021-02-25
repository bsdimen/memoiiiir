const links = document.querySelectorAll(nav-links);

links.forEach((item => {
    item.addEventListener("click",()=> {
        let el = document.getElementById(item.getElementByAtrribut(data-link));
        el.scrollIntoView("smooth", "start")
    }
    
    )
    
}))