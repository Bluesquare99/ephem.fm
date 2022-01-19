"use strict";

// const kutx = "https://kut.streamguys1.com/kutx-web";
// const h1 = document.querySelector("h1");
// var player = new Audio();
// player.autobuffer = true;
// player.src = kutx;
// player.volume = 1;

// h1.addEventListener("click", function () {
//   player.play();
// });

const imageLink =
  "https://images.unsplash.com/photo-1548266652-99cf27701ced?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
const precision = "json";
const url = `http://mkweb.bcgsc.ca/color-summarizer/?url=${imageLink}&precision=${precision}&json=1`;
console.log(url);

const imageColors = async function (image, precision) {
  try {
    const url = `http://mkweb.bcgsc.ca/color-summarizer/?url=${image}&precision=${precision}&json=1`;
    console.log("🕶", url);
    const imageData = await fetch(url, {
      mode: "no-cors", // 'cors' by default
    });
    const colorClusters = await imageData.json();
    return colorClusters;
  } catch (err) {
    console.error(err);
  }
};

console.log(
  imageColors(
    "https://images.unsplash.com/photo-1548266652-99cf27701ced?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "medium"
  )
);

const data = {};
