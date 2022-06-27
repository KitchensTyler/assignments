function getData(){
    axios.get(“https://api.vschool.io/juanaviles6/todo”)
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}
function listData(data){
    clearList()
        for (let i = 0; i < data.length; i++) {
            const h1 = document.createElement(‘h1’)
            h1.textContent = data[i].title
            const price = document.createElement(‘h3’)
            price.textContent = data[i].price
            const img = document.createElement(‘img’)
            img.src = data[i].imgUrl
            const h3 = document.createElement(‘h3’)
            h3.textContent = data[i].description
            const delButton = document.createElement(‘button’)
            delButton.textContent = “delete”
            delButton.setAttribute(“id”, “deleteButton”)
            delButton.addEventListener(“click”, function() {
                axios.delete(“https://api.vschool.io/juanaviles6/todo/data[i]._id”)
                .then(res => getData())
                .catch(err => console.log(err))
            })
            document.getElementById(‘todo-list’).appendChild(h1)
            document.getElementById(‘todo-list’).appendChild(price)
            document.getElementById(‘todo-list’).appendChild(img)
            document.getElementById(‘todo-list’).appendChild(h3)
            document.getElementById(‘todo-list’).appendChild(delButton)
        }
}
function clearList(){
    const el = document.getElementById(‘todo-list’)
        while(el.firstChild) {
            el.removeChild(el.firstChild)
        }
}
getData()
// form for the post request
const todoForm = document.todoForm
todoForm.addEventListener(“submit”, function(e){
    e.preventDefault()
    const newTodo = {
        title: todoForm.title.value,
        imgUrl: todoForm.imgURL.value,
        price: todoForm.price.value,
        description: todoForm.desc.value
    }
    todoForm.title.value = “”
    todoForm.imgURL.value = “”
    todoForm.price.value = “”
    todoForm.desc.value = “”
    axios.post(“https://api.vschool.io/juanaviles6/todo”, newTodo)
        .then(res => getData())
        .catch(err => console.log(err))
})