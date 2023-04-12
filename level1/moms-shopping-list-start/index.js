const form = document.addItem

console.log(form)

form.addEventListener("submit", function(e){
 e.preventDefault()

    const title = form.title.value
    console.log(title)
    const listItem = document.createElement('li')
    console.log("List item created")
    form.title.value = ""
    listItem.textContent = title  
    
    
    document.getElementsByTagName("ul")[0].append(listItem)
    console.log(listItem)
    let delbtn = document.createElement("button")
    delbtn.textContent = "X"
    listItem.append(delbtn)
    delbtn.addEventListener("click", () => {
        listItem.remove("li");
    })
})
   

