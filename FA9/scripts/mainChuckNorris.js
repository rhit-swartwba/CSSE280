document.addEventListener('DOMContentLoaded', (event) => {
    const fetchDataButton = document.getElementById("fetchDataButton");
    const dataDisplay = document.getElementById("dataDisplay");

    fetchDataButton.addEventListener("click", function() {
        let userInput = document.getElementById("dataIndexInput").value;
        let userInputString = "";
        // Convert the user input to a string
        userInputString = userInput.toString();
  
        // Log the string to the console (you can process it as needed)
        console.log("User input as a string: " + userInputString);
        if(userInputString) {
            fetch(`https://api.chucknorris.io/jokes/random?category=${userInputString}`)
            .then(response => response.json())
            .then(data => {
                dataDisplay.innerHTML = `<strong>ID:</strong> ${data.id} <br> <strong>
                url:</strong>${data.url} <br> 
                <strong>Joke:</strong> ${data.value} <br> <strong>`;
                $("#dataIndexModal").modal('hide');
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
                dataDisplay.innerHTML = "Error fetching data. Please try again.";
            })
            .finally(() => {
                $("#dataIndexModal").modal('hide');
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
            });
        };
    });
})

