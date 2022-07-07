//const textArray =[];

document.getElementById('add').addEventListener("click", createListItem); //Esto sustituye al "onclick"

function generateList(text)
{
    document.getElementById('listGroup').innerHTML += `<li class="list-group-item">${text}</li>`;
}

function createListItem()
{
    const value = document.querySelector("#task").value;

    generateList(value);

}