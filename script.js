
let button = document.getElementsByClassName("student-detail")[0];

let tbody = document.getElementsByClassName("my-tbody")[0];
let idNo = 1;
button.addEventListener('submit', (e) => {
    e.preventDefault();
    

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let gpa = document.getElementById("gpa").value;
    let age = document.getElementById("age").value;
    let degree = document.getElementById("degree").value;

    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");

    td1.innerText = `${idNo}`;
    idNo++;

    td2.innerText = name;
 
    td3.innerText = email;

    td4.innerText = age;

    td5.innerText = gpa;

    td6.innerHTML = `${degree} <div class="edit-buttons"><button class="edit">E</button><button class="delete">D</button></div>`;

    tr.append(td1, td2, td3, td4, td5, td6);
    tbody.appendChild(tr);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("gpa").value = "";
    document.getElementById("age").value = "";
    document.getElementById("degree").value = "";
})


function search() 
{
   let searchInput = document.getElementById("search").value.toUpperCase();
   
   let myTable = document.getElementsByClassName("my-tbody")[0];

   let tr = myTable.getElementsByTagName("tr");

   for(let i=0;i<tr.length;i++)
   {
    

    let tdName = tr[i].getElementsByTagName("td")[1];
    let tdNameText = tdName.innerText.toUpperCase();

    let tdEmail = tr[i].getElementsByTagName("td")[2];
    let tdEmailText = tdEmail.innerText.toUpperCase();

    let tdDegree = tr[i].getElementsByTagName("td")[5];
    let tdDegreeText = tdDegree.innerText.toUpperCase();

    if((tdNameText.indexOf(searchInput) > -1) || (tdEmailText.indexOf(searchInput) > -1) || (tdDegreeText.indexOf(searchInput) > -1))
    {
        tr[i].style.display = "";
    }
    else
    {
        tr[i].style.display = "none";
    }
   }
}