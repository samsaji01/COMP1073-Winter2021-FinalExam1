
    let listItem = document.getElementById("list"); //
    let addButton = document.querySelector("#listItem + input");
    let ul = document.querySelector("ul"); //

    addButton.onclick = (e) => {
        //

        let li = document.createElement("li");
        let delButton = document.createElement("button");
        let checkBox = document.createElement("input");

        let item = li.value;
        li.textContent = item;
        delButton.textContent = "Got It!";

        li.appendChild(delButton);
        ul.appendChild(li);//

        delButton.onclick = deleteIt;
        e.preventDefault();
        };

    function deleteIt(e) {
        alert("Are you sure you want to delete this from your grocery list?");
        let delItem = e.target.closest("li");//
        delItem.remove();
    }