const btn = document.querySelector("#btn");
const video = document.querySelector("#video");

btn.addEventListener("click", function () {
  const myvideo = videojs(video);
  myvideo.play();
});
