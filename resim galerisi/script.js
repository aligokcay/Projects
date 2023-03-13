const images = document.querySelectorAll("img");

for (let i = 0; i < images.length; i++) {
  images[i].src = `https://source.unsplash.com/random/300x300?${i}`;
}
