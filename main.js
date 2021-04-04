
let UserID = 0;
const LinkFetch = ("https://next.json-generator.com/api/json/get/NJ-UoW2Xq")
let UserArry = []


function fetchFunction() {
    return fetch(LinkFetch)
        .then((response) => { return response.json() })
}

class User {
    constructor(firstName, lastName, email, phone, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.age = age;

    }
}


async function functionGetUser() {
    try {
        UserArry = await fetchFunction()
        UserArry.forEach(element => {

           let userIDpersonObject = new User(element.name.first, element.name.last, element.email, element.phone, element.age)
           
            console.log(userIDpersonObject);

            UsersCard.innerHTML += ` 
            <div class="card" <div id="UserID${UserID}" style="width: 17rem;">
            <img src=" ${element.picture} " class="card-img-top" alt="photoUserId">
             <div class="card-body">
             
            <h5 class="card-title"> FullName: ${element.name.first}  ${element.name.last}</h5><br>
            <p class="card-text"> Email: ${element.email}<br>
            PhoneNumber: <br> ${element.phone}<br>
             Age: ${element.age}
           </p>
            <button onclick="printOneUser(${UserID++})" id="buttonShowUser" class="btn btn-primary">Red About ${element.name.first} </button>
         </div>
         </div>
         </div>
         `

        });
    }

    catch (res) {
        console.log(res);
    }

}


function displayNoneRegistrationform() {
    NewUser.style = "display:none;"
}
displayNoneRegistrationform()


functionGetUser()
let catchTable;
buttonTableUserId.addEventListener('click', async () => {
    try {

        UsersTable.innerHTML += ''
        catchTable = ''
        NewUser.style = "display:none"
        UsersCard.style = "display:none;"
        UserPersonId.style = "display:none"
        UsersTable.style = "display:table;"
        UserArry = await fetchFunction()
        UserArry.forEach(element => {
            catchTable +=
                `
                <tr>
             <td>${element.name.first}</td>
             <td>${element.name.last}</td>
             <td>${element.email}</td>
             <td>${element.age}</td>
             <td>${element.phone}</td>
             </tr>
    `
        });
        UsersTable.innerHTML = `
        
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>phone Number</th>
        
        ${catchTable}
        </tr>
    `
    }
    catch (error) {
        console.log(error);
    }

})



buttonNewUserId.addEventListener('click', () => {
    UsersTable.style = "display:none;"
    UsersCard.style = "display:none;"
    UserPersonId.style = "display:none"
    NewUser.style = "display: flex;"
})

chekEmailButton.onclick = function chekEmail() {


    if (FirstEmail.value == TwoEmail.value) {
        return true
    } else {
        alert('The Email Not The Same')
        return false
    }
}





async function printOneUser(userID) {

    UserPersonId.style = "display:flex;"
    UserPersonId.innerHTML = ""
    UsersCard.style = "display:none;"
    try {
        UserArry = await fetchFunction()
        UserPersonId.innerHTML += `

 <div class="container">
 <div class="card" style="width:350px">
  <img class="card-img-top" src="${UserArry[userID].picture}">
  <div class="card-body">
    <h4 class="card-title">FullName: ${UserArry[userID].name.first} ${UserArry[userID].name.last} </h4>
    <p class="card-text">Email Addres: ${UserArry[userID].email}</p>
    <p class="card-text">Number Phone: ${UserArry[userID].phone}</p>
    <p class="card-text">Age: ${UserArry[userID].age}</p>
   
  </div>
 </div>
 <br> 
    `
    }
    catch (rej) {
        console.log(rej);
    }

}

buttonHomePage.addEventListener('click', () => {
    UsersTable.style = "display:none;"
    NewUser.style = "display: none;"
    UserPersonId.style = "display:none"

    UsersCard.style = "display:flex;"

})




// class Users {
//     constructor(UserName, UserLastName, FirstEmail, TwoEmail, pwd2) {
//         this.UserName = UserName.value;
//         this.UserLastName = UserLastName.value;
//         this.FirstEmail = FirstEmail.value;
//         this.TwoEmail = TwoEmail.value;
//         this.pwd2 = pwd2.value;

//     }
// }