function showResponse(apiResponse) {
  const jokeText = apiResponse.data.answer;
  const responseElement = document.querySelector("#joke");
  responseElement.innerHTML = "";

  const typewriter = new Typewriter(responseElement, {
    loop: false,
    delay: 20,
  });

  typewriter.typeString(jokeText).start();

  document.querySelector("#joke-button").disabled = false;
}

function getJoke() {
  const apiKey = "o763ft69073f5418a00d1de2884aa32b";
  const context = `You're a humorous AI with a vast silly joke library.`;
  const prompt =
    "Give me a brand new joke about tech. Always tell a unique, previously untold, and differ the theme of the jokes each time you're prompted.";

  const apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  document.querySelector("#joke-button").disabled = true;

  axios
    .get(apiURL)
    .then(showResponse)
    .catch(function (error) {
      console.error("Error fetching the joke:", error);
      document.querySelector("#joke").innerHTML =
        "Oops! Something went wrong. Try again.";
      document.querySelector("#joke-button").disabled = false;
    });
}

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("#joke-button");
  button.addEventListener("click", getJoke);
});
