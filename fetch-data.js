document.addEventListener("DOMContentLoaded", function () {
  // Define the async function to fetch user data
  async function fetchUserData() {
    const apiUrl = "https://jsonplaceholder.typicode.com/users"; // API URL
    const dataContainer = document.getElementById("api-data"); // Data container

    try {
      // Fetch data from the API
      const response = await fetch(apiUrl);
      const users = await response.json(); // Convert response to JSON

      // Clear loading message
      dataContainer.innerHTML = "";

      // Create a user list (<ul>)
      const userList = document.createElement("ul");

      // Loop through the users array and append each user's name to the list
      users.forEach((user) => {
        const listItem = document.createElement("li");
        listItem.textContent = user.name; // Set user name
        userList.appendChild(listItem); // Append <li> to <ul>
      });

      // Append the user list to the data container
      dataContainer.appendChild(userList);
    } catch (error) {
      // Handle errors during fetching
      dataContainer.innerHTML = "Failed to load user data.";
      console.error("Error fetching user data:", error);
    }
  }

  // Call the function after DOM has fully loaded
  fetchUserData();
});
