const API_PHONE =
  "https://my-json-server.typicode.com/Jeck99/fake-server/devices";

async function phoneFunc() {
  try {
    return await fetch(API_PHONE).then((res) => res.json());
  } catch (error) {
    console.log(error);
  } finally {
  }
}
phoneFunc().then((data) => printCards(data));
function printCards(array) {
  array.forEach((element,i) => {
    document.getElementById(
      "product_main"
    ).innerHTML += `
    <div class="card col-4 mb-3" style="width: 14rem;">
        <img src="/images/proudects/${imagesArray[i]}" class="card-img-top" alt="...">
        <div class="card-body">
          <h3 class="${element.id}">${element.brand}</h3>
          <p class="card-text">In Store : ${element.isAvailable} </p>
          <p> Price :${element.price} </p>
          <p>Realse Date : ${element.createdAt} </p>
          <p>Color : ${element.color} </p>
          <p>Brand : ${element.brand} </p>
          <p>Ram : ${element.ram} </p>
          <a href="#" class="btn btn-primary">DELETE</a>
        </div>
      </div>
      `;
  });
}

imagesArray = [
  "samsung-gold.png",
  "samsung-white.png",
  "iphone-white.png",
  "xiomi-black-grey.png",
  "sony-green.png",
  "google-gold.png",
  "iphone-white-2.png",
  "iphone-gold.png",
  "sony-blue.png",
  "iphone-blue.png",
  "iphone-white.png",
  "google-black.png",
  "sony-white.png",
  "xiomi-mouse-grey.png",
  "iphone-light-blue.png",
];
