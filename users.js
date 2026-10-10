/* 
1. Build the UI
2. Access the users-wrapper
3. fetch users data from the server
4. display the data in the dom

*/

const usersWrapper = document.getElementById("users-wrapper");


async function fetchUsersData() {
    try {
        const response = await fetch("https://dummyjson.com/users");
        const usersData = await response.json();
        return usersData;

    } catch(error) {
        console.error(error);
    }
}

function sortUsersData(data) {
    const usersArray = data.users;
    // console.log(usersArray);
    const sortedUsersData = usersArray.map(user => {
        return {
            fullname: `${user.firstName} ${user.lastName}`,
            email: user.email,
            src: user.image
        }
    });
    return sortedUsersData;
}

async function displayUsersData() {
    const usersData = await fetchUsersData();
    const data = sortUsersData(usersData);
    console.log(data);
    data.forEach(userData => {
        usersWrapper.innerHTML += `
            <div>
                <div class="image-wrapper">
                    <img src="${userData.src}">
                </div>
                <h3>${userData.fullname}</h3>
                <p>${userData.email}</p>
            </div>
        `
    });
    
}

document.addEventListener("DOMContentLoaded", displayUsersData);