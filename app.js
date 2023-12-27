const reviews = [
    {
        id: 1,
        name: "Sara Jones",
        job: "UX Designer",
        img: "Images/woman1.jpg",
        text: "As a UX designer, I focus on creating intuitive interfaces through user-centered design and thorough research. My creative problem-solving approach, coupled with effective team collaboration, results in clear, engaging, and easily navigable products." 
    },
    {
        id: 2,
        name: "Susan Smith",
        job: "Web Developer",
        img: "Images/woman2.jpg",
        text: "I leverage advanced technical skills and creative problem-solving to craft websites that exceed industry standards.My commitment to clear communication ensures a collaborative and streamlined development process."
    },
    {
        id: 3,
        name: "Kim Shelby",
        job: "Manager",
        img: "Images/woman3.jpg",
        text: "As a manager, I prioritize fostering a collaborative and inclusive work environment, empowering my team to achieve their best and exceed expectations. My leadership style emphasizes clear communication, strategic decision-making, and a commitment to continuous improvement."
    }
];

let currentIndex = 0;

const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const randBtn = document.querySelector(".random-btn");
const img = document.getElementById("person-img");
const reviewName = document.getElementById("author");
const reviewJob = document.getElementById("job");
const reviewText = document.getElementById("info");


function getNewReview(index) {
    const review = reviews[index];
    img.src = review.img;
    reviewName.textContent = review.name;
    reviewJob.textContent = review.job;
    reviewText.textContent = review.text;
}

leftBtn.addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    getNewReview(currentIndex);
})

rightBtn.addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % reviews.length;
    getNewReview(currentIndex);
})

getNewReview(currentIndex);