// Create accordion container
const accordion = document.createElement("div");
accordion.classList.add("accordion");

const data = [
    {
        name: "Prashant Shinde",
        description: " lorem55 "
    },
    {
        name: "Prerna Sharma",
        description: " lorem66 "
    },
    {
        name: "Shivani jjj",
        description: " lorem77 "
    },
    {
        name: "Mrunal Sarsar",
        description: " lorem97 "
    }
];


const accordionDescriptions = [];  // Array to store all accordion descriptions

data.forEach((item, index) => {
    const accordionBody = document.createElement("div");
    accordionBody.classList.add("accordionbody");
    accordionBody.innerHTML = item.name;

    const accordionDescription = document.createElement("div");
    accordionDescription.classList.add("accordiondescription");
    accordionDescription.innerHTML = item.description;

    accordionBody.addEventListener("click", () => {
        // Close all other accordions
        accordionDescriptions.forEach((desc, i) => {
            if (i !== index) {
                desc.style.display = "none";
            }
        });

        // Toggle the display of the current accordionDescription
        accordionDescription.style.display = (accordionDescription.style.display === "block") ? "none" : "block";
    });

    accordionDescriptions.push(accordionDescription);  // Add the current accordionDescription to the array
    accordionBody.appendChild(accordionDescription);
    accordion.appendChild(accordionBody);
});

document.body.appendChild(accordion);


