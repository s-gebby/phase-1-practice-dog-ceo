console.log("%c HI", "color: firebrick");

// Challenge 1: Fetch and display dog images
document.addEventListener("DOMContentLoaded", function () {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

  fetch(imgUrl)
    .then((response) => response.json())
    .then((data) => {
      const imagesContainer = document.getElementById("dog-image-container");

      data.message.forEach((imageUrl) => {
        const imgElement = document.createElement("img");
        imgElement.src = imageUrl;
        imgElement.alt = "Dog Image";
        imagesContainer.appendChild(imgElement);
      });
    })
    .catch((error) => {
      console.error("Error fetching dog images:", error);
    });

  // Challenge 2: Fetch and display dog breeds
  const breedUrl = "https://dog.ceo/api/breeds/list/all";

  fetch(breedUrl)
    .then((response) => response.json())
    .then((data) => {
      const breedsList = document.getElementById("dog-breeds");

      for (const breed in data.message) {
        const breedItem = document.createElement("li");
        breedItem.textContent = breed;
        breedsList.appendChild(breedItem);
      }
    })
    .catch((error) => {
      console.error("Error fetching dog breeds:", error);
    });

  // Challenge 3: Change font color of clicked breed
  function changeFontColor(event) {
    const clickedLi = event.target;
    clickedLi.style.color = "#630a04";
  }

  const breedsList = document.getElementById("dog-breeds");
  breedsList.addEventListener("click", changeFontColor);

  // Challenge 4: Filter breeds by letter
  function filterBreedsByLetter(event) {
    const selectedLetter = event.target.value;
    const breedsList = document.getElementById("dog-breeds");
    const breedItems = breedsList.getElementsByTagName("li");

    for (const breedItem of breedItems) {
      const breedName = breedItem.textContent.toLowerCase();
      if (breedName.startsWith(selectedLetter)) {
        breedItem.style.display = "block";
      } else {
        breedItem.style.display = "none";
      }
    }
  }

  const breedDropdown = document.getElementById("breed-dropdown");
  breedDropdown.addEventListener("change", filterBreedsByLetter);
});
