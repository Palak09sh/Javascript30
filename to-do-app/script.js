const inputBox = document.getElementById("add-input")
const listContainer = document.getElementById("list-container")
function addTask() {
    if (inputBox.value === '') {
        alert('You must add your task')
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = ""
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        // to interact with css element's class
        e.target.classList.toggle('checked')
        saveData();
    }
    else {
        e.target.tagName === "SPAN"
        e.target.parentElement.remove();
        saveData();

    }
});
function saveData() {
    localStorage.setItem("data", listContainer.innerHTMl)
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data")

}
showTask();