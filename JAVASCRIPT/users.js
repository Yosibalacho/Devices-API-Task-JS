const USERS_API =
  "https://my-json-server.typicode.com/Jeck99/fake-server/users";
let table = document.getElementById("user_Table");
async function getUsers() {
  try {
    return await fetch(USERS_API).then((res) => res.json());
  } catch (error) {
    console.log("error");
  } finally {
  }
}
let counter = 40
function usersTable() {
    user_spiner.innerHTML = `<div class="d-flex justify-content-center" id="spiner">
  <div class="spinner-border" role="status"></div>
  </div>`;
    setTimeout(() => {
      getUsers().then((result) => {
        result.forEach((item) => {
          table.innerHTML += ` 
                  <tr class="bg-black bg-gradient text-light">
                  <td>${item.age}</td>
                  <td>${item.name.first}</td>
                  <td>${item.name.last}</td>
                  <td>${item.email}</td>
                  <td>${item.index}</td>
                  <td>${item.phone}</td>
                  <td><img src="https://randomuser.me/api/portraits/med/men/${counter++}.jpg"></td>
                  <td><button onclick="deleteId()" style="background:red; color:white;">Delete</button></td>
                  </tr>
                  `;
        });
      });
      document.getElementById("spiner").remove();
    }, 850);
  }
  usersTable();
  
  
  async function deleteId() {
    try {
      return await fetch(USERS_API)
      .then((res) => {return res.json()}
      );
    } catch (error) {
      console.log("error");
    } finally {
      alert("THE USER WAS DELETED!")
    }
  }

