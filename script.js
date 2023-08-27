const joke = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");

const generateJoke = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.kanye.rest");

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        joke.innerHTML = JSON.parse(this.responseText).quote;
      } else {
        joke.innerHTML = "Something went wrong (Not Funny)";
      }
    }
  };
  xhr.send();
};

jokeBtn.addEventListener("click", generateJoke);
document.addEventListener("DOMContentLoaded", generateJoke);
