const inputElement = document.querySelector("#favchap");

const buttonElement = document.querySelector("button");

const listElement = document.querySelector("#list");

buttonElement.addEventListener("click", () => {

    if (inputElement.value !== "") {
        
        // document.getElementById("button").focus()

        const li = document.createElement("li");

        const deleteButton = document.createElement("button");
        
        // li.innerHTML = inputElement.value;
        li.textContent = inputElement.value;
        
        deleteButton.textContent = "❌";
        
        li.append(deleteButton);
        
        list.append(li);
        
        deleteButton.addEventListener("click", () => {
            list.removeChild(li);
            inputElement.focus();
        })}
    
        inputElement.value = "";
        inputElement.focus();
});


            