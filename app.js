const URL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const imgSrc = document.querySelector(".qr-img img");
const inp = document.querySelector("#input");
const msg = document.querySelector("#msg");

async function genetareQR() {
  if (inp.value !== undefined && inp.value !== "") {
    imgSrc.style.visibility = "visible";
    imgSrc.style.height = "150px";
    imgSrc.style.width = "150px";
    msg.style.visibility = "hidden";
    msg.style.fontSize = "0rem";
    inp.style.outline = "none";

    try {
      const response = await fetch(`${URL}${inp.value}`);
      if (response.ok) {
        imgSrc.src = response.url;
      } else {
        throw new Error("Failed to generate QR code");
      }
    } catch (error) {
      msg.style.visibility = "visible";
      msg.style.fontSize = "1rem";
      imgSrc.style.visibility = "hidden";
      imgSrc.style.height = "0";
      imgSrc.style.width = "0";
      msg.textContent = `Error: ${error.message}`;
    }
  } else {
    msg.style.visibility = "visible";
    msg.style.fontSize = "1rem";
    msg.textContent = "please enter text or URL";
    imgSrc.style.visibility = "hidden";
    imgSrc.style.height = "0";
    imgSrc.style.width = "0";
    inp.style.outline = "solid";
    inp.style.outlineColor = "red";
  }
}
