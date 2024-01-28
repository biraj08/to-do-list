const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addtask() {
    if (inputbox.value === '') {
        alert("You Need To Write Something");   //if we not write anything in input box then alert shows
    } else {
        let li = document.createElement("li");   //let li = li mai li naam ka element an rha hai wo new list jo input field mai jo likha hai wo add krega
        li.textContent = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");   //adds a cross button
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }

    inputbox.value = ''; // Clear the input box after adding the task
    saveData();
}


listcontainer.addEventListener("click", //when we click list then the function run
function(e){
    if(e.target.tagName ==="LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }

    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
},false);


function saveData()
{
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask()
{
    listcontainer.innerHTML = localStorage.getItem("data");
}

showTask();//call the upper function


