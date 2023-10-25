
document.addEventListener("DOMContentLoaded", function() {
    // gereklı elementler secıldı
    let ınputDOM = document.querySelector("#taskInput");

    let buttonDOM = document.querySelector("#addTask");

    let listDOM = document.querySelector("#taskLıst");

    // butonumuzun clıck eventını dınlıyoruz

    buttonDOM.addEventListener("click", function () {
        let taskText = taskInput.value;

        if(taskText.trim().length >=1) {
            let li = document.createElement("li");
            li.innerHTML = `<span> ${taskText} </span> <button style="Background-color: red" class= "delete"> sil </button>`;
            taskLıst.appendChild(li);
            taskInput.value = "" ;
            setLocalStroageItem(listDOM)
           

        }


        else {
            alert("lütfen en az 1 karakter giriniz")
            
        }
    }    

    );
    
    // gorev lıstesıne sıl butonuna tıklama olayını dınlıyoruz
    taskLıst.addEventListener("click", function(event) {
        if (event.target.classList.contains("delete")) {
            let listItem =event.target.parentElement;
            taskLıst.removeChild(listItem);

            setLocalStroageItem(listDOM);
            
        }
    })

    let taskListItems = localStorage.getItem("taskList");
    if (taskListItems) {
        listDOM.innerHTML = taskListItems;
    }

})


function setLocalStroageItem (domList) {
    let taskListItems = domList.innerHTML;
    localStorage.setItem("taskList", taskListItems);


}
