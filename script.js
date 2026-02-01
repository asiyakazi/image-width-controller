let imageElement = document.getElementById("image");
let errorwarning = document.getElementById("warningMessage");
let imagewidthelement = document.getElementById("imageWidth");

let maxImageWidth = 300;
let minImageWidth = 100;
let originalImagewidth = 200;
imageElement.style.width = originalImagewidth + "px";
originalImagewidth.textContent = originalImagewidth + "px";
let maxwarningmessage = "Too big.Decrease the size of image."
let minwarningmessage = "Can't Visible.Increase the size of image."

function increment() {
    if (originalImagewidth >= maxImageWidth) {
        errorwarning.textContent = maxwarningmessage;
    } else {
        originalImagewidth = originalImagewidth + 5;
        let finaloriginalImagewidth = originalImagewidth + "px";
        errorwarning.textContent = "";
        imageElement.style.width = finaloriginalImagewidth;
        imagewidthelement.textContent = finaloriginalImagewidth;
    }
}

function decrement() {
    if (originalImagewidth <= minImageWidth) {
        errorwarning.textContent = minwarningmessage;
    } else {
        originalImagewidth = originalImagewidth - 5;
        let finaldecreaseImagewidth = originalImagewidth + "px";
        errorwarning.textContent = "";
        imageElement.style.width = finaldecreaseImagewidth;
        imagewidthelement.textContent = finaldecreaseImagewidth;
    }
}
