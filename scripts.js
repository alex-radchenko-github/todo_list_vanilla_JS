let list = [];
document.getElementById("myInput").focus()
function render() {

    list.forEach(element => {
        const listItem = document.createElement("LI");
        listItem.setAttribute("id", "l_items")

        const listItemText = document.createTextNode(element.title);
        listItem.appendChild(listItemText);


        const buttonClose = document.createElement("SPAN");
        const buttonCloseText = document.createTextNode("\u00D7");
        buttonClose.className = "close";
        buttonClose.appendChild(buttonCloseText);
        listItem.appendChild(buttonClose);

        buttonClose.onclick = function () {
            deleteFromList();
        };

        listItem.appendChild(buttonClose)
        buttonClose.appendChild(buttonCloseText);

        document.getElementById("myUL").appendChild(listItem);

    })
}

function addToList() {
    let v = document.getElementById("myInput").value
    if (v !== '') {
        list.push({
            id: Math.random(),
            title: v
        });
        render()
        list = []
        document.getElementById("myInput").value = ""
        document.getElementById("myInput").focus()

    } else {
        document.getElementById("myInput").focus()
    }
}

function deleteFromList() {
    const list1 = document.getElementById('myUL');
    list1.addEventListener('click', function(e){
        if(e.target.nodeName === "BUTTON") {
            e.target.parentNode.remove();
        }
    });
    document.getElementById("myInput").focus()

}

let list1 = document.querySelector('ul');
list1.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);
