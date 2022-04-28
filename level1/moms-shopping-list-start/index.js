const form = document.addItem

form.addEventListener("submit", function(event){
    event.preventDefault()

    const title = form.title.value
    const listItem = document.createElement('li')
    form.title.value = ""
    listItem.textContent = title  
    
    
    document.getElementsByTagName("ul")[0].append(listItem)
    let delbtn = document.createElement("button")
    delbtn.textContent = "X"
    listItem.append(delbtn)
    delbtn.addEventListener("click", () => {
        listItem.remove("li");
    })
})
   