const form = document.addItem

form.addEventListener("submit", function(event){
    event.preventDefault()

    const title = form.title.value
    console.log(title)
    const listItem = document.createElement('li')
    console.log("List item created")
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
   