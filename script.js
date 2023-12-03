function renderProduct(user) {
  const userCard = document.createElement("div");
  userCard.classList.add("userCard");

  const userName = document.createElement("h3");
  userName.textContent = user.firstName;
  userName.classList.add("userName");

  const userLastName = document.createElement("h3");
  userLastName.textContent = user.lastName;
  userLastName.classList.add("userLastName");

  const userAge = document.createElement("p");
  userAge.textContent = user.age;
  userAge.classList.add("userAge");

  const userEmail = document.createElement("p");
  userEmail.textContent = user.email;
  userEmail.classList.add("userEmail");

  const userPhone = document.createElement("p");
  userPhone.textContent = user.phone;
  userPhone.classList.add("userPhone");

  const usertImage = document.createElement("img");
  usertImage.src = !!user.image ? user.image : "";
  usertImage.classList.add("usertImage");

  userCard.append(
    usertImage,
    userName,
    userLastName,
    userAge,
    userEmail,
    userPhone
  );

  return userCard;
}

const usersContainer = document.querySelector(".usersContainer");

fetch("https://dummyjson.com/users")
  .then((res) => res.json())
  .then((response) => {
    console.log(response.users);
    for (let i = 0; i < 15; i++) {
      const userItem = renderProduct(response.users[i]);
      usersContainer.append(userItem);
    }
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
