
function animateText() {
    var textElement = document.getElementById('animated-text');
    var fontSize = 10; 
    var growing = true; 
  
    var animationInterval = setInterval(function() {
      if (growing) {
        fontSize++;
        textElement.style.fontSize = fontSize + 'pt';
        textElement.style.color = 'red';
      } else {
        fontSize--;
        textElement.style.fontSize = fontSize + 'pt';
        textElement.style.color = 'blue';
      }
  
      if (fontSize === 50) {
        growing = false;
        textElement.textContent = 'TEXT-SHRINKING';
      }
  
      if (fontSize === 5) {
        clearInterval(animationInterval);
      }
    }, 100);
  }
  

  animateText();
  