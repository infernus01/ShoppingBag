// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert")
const form = document.querySelector(".todo-form")
const todo = document.querySelector("#moods")
const submitBtn = document.querySelector(".submit-btn")
const container = document.querySelector(".list-container")
const list = document.querySelector(".todo-list")
const clearBtn = document.querySelector(".clear-btn")

// editing

// ****** EVENT LISTENERS **********
form.addEventListener("submit", addItem)

clearBtn.addEventListener("click", clearItem)
    // ****** FUNCTIONS **********
function addItem(e) {
    e.preventDefault()
    const value = todo.value
    if (value !== "") {

        const element = document.createElement("article")
        element.classList.add("todo-item")

        element.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
          <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
          </button>
        </div>`
        const deleteBtn = element.querySelector(".delete-btn")
        deleteBtn.addEventListener("click", deleteItem)
            // show the item 
        container.classList.add("show-container")
            // append in todo list 
        list.appendChild(element)
            // call display alert
        displayAlert("Added to the LISt.", "success")

        setBackToDefault()
    } else {
        displayAlert("Please type something!", "danger")
    }
}
// display alert function'
function displayAlert(text, nature) {
    alert.textContent = text
    alert.classList.add(`alert-${nature}`)

    setTimeout(function() {
        alert.textContent = ""
        alert.classList.remove(`alert-${nature}`)
    }, 1000)
}

// sets everything back to default
function setBackToDefault() {
    todo.value = ""
}

// clear all the iteams
function clearItem() {
    const items = document.querySelectorAll(".todo-item")

    if (items.length > 0) {
        items.forEach(function(item) {
            list.removeChild(item)
        })
    }
    container.classList.remove("show-container")
    displayAlert("Removed All", "danger")
}

// delete Item
function deleteItem(e) {

    const element = e.currentTarget.parentElement.parentElement

    list.removeChild(element)
    if (list.children.length === 0) {
        container.classList.remove("show-container")
    }
    displayAlert("Okay, removed!", "danger")
}
