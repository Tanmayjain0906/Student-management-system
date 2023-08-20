
let button = document.getElementsByClassName("student-detail")[0];
let editButton = document.getElementById("editBtn");
let tbody = document.getElementsByClassName("my-tbody")[0];
let idNo = 1;
button.addEventListener('submit', (e) => {
    e.preventDefault();


    if (editButton.style.display === "") {
        
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let gpa = document.getElementById("gpa").value;
        let age = document.getElementById("age").value;
        let degree = document.getElementById("degree").value;

        let tr = document.createElement("tr");
        tr.className = `${idNo}`
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

        td6.innerHTML = `<div>${degree}</div> <div class="edit-buttons"><button class="edit"  onclick="editBtn(${idNo})"><i class="fa-solid fa-pen-to-square" style="color: #0c4cbb;"></i></button><button class="delete"  onclick="deleteBtn(${idNo})"><i class="fa-solid fa-trash" style="color: #0c4cbb;"></i></button></div>`;

        tr.append(td1, td2, td3, td4, td5, td6);
        tbody.appendChild(tr);

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("gpa").value = "";
        document.getElementById("age").value = "";
        document.getElementById("degree").value = "";
    }
    else {
        editButton.style.display = "";
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("gpa").value = "";
        document.getElementById("age").value = "";
        document.getElementById("degree").value = "";
    }


})


function search() {
    let searchInput = document.getElementById("search").value.toUpperCase().trim();



    let tr = tbody.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++) {


        let tdName = tr[i].getElementsByTagName("td")[1];
        let tdNameText = tdName.innerText.toUpperCase();

        let tdEmail = tr[i].getElementsByTagName("td")[2];
        let tdEmailText = tdEmail.innerText.toUpperCase();

        let tdDegree = tr[i].getElementsByTagName("td")[5];
        let tdDegreeText = tdDegree.innerText.toUpperCase();

        if ((tdNameText.indexOf(searchInput) > -1) || (tdEmailText.indexOf(searchInput) > -1) || (tdDegreeText.indexOf(searchInput) > -1)) {
            tr[i].style.display = "";
            
        }
        else {
            tr[i].style.display = "none";
            
        }
    }
}


function deleteBtn(data) {

    let a = confirm("Are you sure");

    if (a) {

        let removeId = (data - 1).toString();
        
        

        let tr = tbody.getElementsByTagName("tr");

        for (let i = 0; i < tr.length; i++) {
            let trId = tr[i].className;

            if (removeId === trId) {
                tbody.removeChild(tr[i]);
                
            }
        }
    }



}


function editBtn(data) {
    let changeId = (data - 1).toString();
    
    editButton.style.display = "block";

    let index = -1;
    let tr = tbody.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++) {
        let trId = tr[i].className;

        if (changeId === trId) {
            document.getElementById("name").value = tr[i].getElementsByTagName("td")[1].innerText;
            document.getElementById("email").value = tr[i].getElementsByTagName("td")[2].innerText;
            document.getElementById("age").value = tr[i].getElementsByTagName("td")[3].innerText;
            document.getElementById("gpa").value = tr[i].getElementsByTagName("td")[4].innerText;
            document.getElementById("degree").value = tr[i].getElementsByTagName("td")[5].getElementsByTagName("div")[0].innerText;
            index = i;
        }
    }

    editButton.addEventListener("click", () => {
        
        if(index > -1)
        {
            tr[index].getElementsByTagName("td")[1].innerText = document.getElementById("name").value;
            tr[index].getElementsByTagName("td")[2].innerText = document.getElementById("email").value;
            tr[index].getElementsByTagName("td")[3].innerText = document.getElementById("age").value;
            tr[index].getElementsByTagName("td")[4].innerText = document.getElementById("gpa").value;
            tr[index].getElementsByTagName("td")[5].getElementsByTagName("div")[0].innerText = document.getElementById("degree").value;
        }
        
        index = -1;
    })

}