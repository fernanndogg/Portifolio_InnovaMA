lucide.createIcons();

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.a_header');

    links.forEach(link => {
        link.addEventListener('click', function() {
            
            links.forEach(l => l.classList.remove('active'));

            link.classList.add('active');
        });
    });
});

// typewriter
document.addEventListener("DOMContentLoaded", function () {
    const element = document.getElementById("typewriter");
    const text = "Fernando Cantanhede"; 
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
  