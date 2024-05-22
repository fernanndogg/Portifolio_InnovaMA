
// typewriter
document.addEventListener("DOMContentLoaded", function () {
    const element = document.getElementById("typewriter");
    const text = element.textContent;
    element.textContent = "";
    let index = 0;
  
    function typeWriter() {
      if (index < text.length) {
        if (text[index] === '<') {
          while (text[index] !== '>') {
            element.innerHTML += text[index];
            index++;
          }
          element.innerHTML += text[index];
        } else {
          element.innerHTML += text[index];
        }
        index++;
        setTimeout(typeWriter, 100);
      }
    }
  
    element.innerHTML = "";
    typeWriter();
  });