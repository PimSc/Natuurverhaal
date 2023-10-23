
document.addEventListener("DOMContentLoaded", function () {
    const collapsibleArticles = document.querySelectorAll(".collapsible-article");

    collapsibleArticles.forEach(function (article) {
        const toggleCheckbox = article.querySelector(".toggle");
        const videoPlayer = article.querySelector("#videoPlayer-Camera-op-de-nieuw-ontdekte-beverburcht");

        article.addEventListener("click", function () {
            toggleCheckbox.checked = !toggleCheckbox.checked;

            // Stop video when the collapsible is closed
            if (!toggleCheckbox.checked) {
                pauseVideo(videoPlayer);
            }
        });
    });

    // Function to pause YouTube video
    function pauseVideo(player) {
        const videoSrc = player.src;
        player.src = videoSrc;
    }
});



//
// // This code makes the whole collapsible field is clickable. start
// document.addEventListener("DOMContentLoaded", function () {
//     const collapsibleArticles = document.querySelectorAll(".collapsible-article");
//
//     collapsibleArticles.forEach(function (article) {
//         const toggleCheckbox = article.querySelector(".toggle");
//
//         article.addEventListener("click", function () {
//             toggleCheckbox.checked = !toggleCheckbox.checked;
//         });
//     });
// });
// // This code makes the whole collapsible field is clickable. End
//
//
// // This code makes the youtube video stop playing when folding the collapsible in. Start
// document.addEventListener("DOMContentLoaded", function () {
//     const collapsibleArticles = document.querySelectorAll(".collapsible-article");
//
//     collapsibleArticles.forEach(function (article) {
//         const toggleCheckbox = article.querySelector(".toggle");
//         const videoPlayer = article.querySelector("#videoPlayer-Camera-op-de-nieuw-ontdekte-beverburcht");
//
//         article.addEventListener("click", function () {
//             toggleCheckbox.checked = !toggleCheckbox.checked;
//
//             // Stop video when the collapsible is closed
//             if (!toggleCheckbox.checked) {
//                 pauseVideo(videoPlayer);
//             }
//         });
//     });
//
//     // Function to pause Youtube
//     function pauseVideo(player) {
//         const videoSrc = player.src;
//         player.src = videoSrc;
//     }
// });
// // This code makes the youtube video stop playing when folding the collapsible in. End








    const blog = {
    blog1: {
        title: "Placeholder titel blog 1",
        text1: "Placeholder text blog 1",
        img1: null,
        text2: null,
        img2: null,
        text3: null,
    },
    blog2: {
        title: "Placeholder titel blog 2",
        text1: "Placeholder text blog 2",
        img1: null,
        text2: null,
        img2: null,
        text3: null,
    },
    blog3: {
        title: "Placeholder titel blog 3",
        text1: "Placeholder text blog 3",
        img1: null,
        text2: null,
        img2: null,
        text3: null,
    },
    blog4: {
        title: "Placeholder titel blog 4",
        text1: "Placeholder text blog 4",
        img1: null,
        text2: null,
        img2: null,
        text3: null,
    },
    blog5: {
        title: "Placeholder titel blog 5",
        text1: "Placeholder text blog 5",
        img1: null,
        text2: null,
        img2: null,
        text3: null,
    },
    blog6: {
        title: "Placeholder titel blog 6",
        text1: "Placeholder text blog 6",
        img1: null,
        text2: null,
        img2: null,
        text3: null,
    },
}



// Voorziet blog 1 van tekst en afbeeldingen (Start)
// let blog1TitleElement = document.getElementById("titleBlog1");
// let blog1TextElement = document.getElementById("textBlog1");
//
// blog1TitleElement.textContent = blog.blog1.title;
// blog1TextElement.textContent = blog.blog1.text1;
// Voorziet blog 1 van tekst en afbeeldingen (End)




// Voorziet blog 2 van tekst en afbeeldingen (Start)
let blog2TitleElement = document.getElementById("titleBlog2");
let blog2TextElement = document.getElementById("textBlog2");

blog2TitleElement.textContent = blog.blog2.title;
blog2TextElement.textContent = blog.blog2.text1;
// Voorziet blog 2 van tekst en afbeeldingen (End)



// Voorziet blog 3 van tekst en afbeeldingen (Start)
let blog3TitleElement = document.getElementById("titleBlog3");
let blog3TextElement = document.getElementById("textBlog3");

blog3TitleElement.textContent = blog.blog3.title;
blog3TextElement.textContent = blog.blog3.text1;
// Voorziet blog 2 van tekst en afbeeldingen (End)



// Voorziet blog 4 van tekst en afbeeldingen (Start)
let blog4TitleElement = document.getElementById("titleBlog4");
let blog4TextElement = document.getElementById("textBlog4");

blog4TitleElement.textContent = blog.blog4.title;
blog4TextElement.textContent = blog.blog4.text1;
// Voorziet blog 2 van tekst en afbeeldingen (End)



// Voorziet blog 5 van tekst en afbeeldingen (Start)
let blog5TitleElement = document.getElementById("titleBlog5");
let blog5TextElement = document.getElementById("textBlog5");

blog5TitleElement.textContent = blog.blog5.title;
blog5TextElement.textContent = blog.blog5.text1;
// Voorziet blog 2 van tekst en afbeeldingen (End)



// Voorziet blog 6 van tekst en afbeeldingen (Start)
let blog6TitleElement = document.getElementById("titleBlog6");
let blog6TextElement = document.getElementById("textBlog6");

blog6TitleElement.textContent = blog.blog6.title;
blog6TextElement.textContent = blog.blog6.text1;
// Voorziet blog 2 van tekst en afbeeldingen (End)