function flipCoins() {
    var coins = document.getElementsByClassName("coin");
    var headsCount = 0;
    var tailsCount = 0;
  
    for (var i = 0; i < coins.length; i++) {
      coins[i].classList.remove("heads", "tails");
  
      // Reset animation by cloning and replacing the element
      var newCoin = coins[i].cloneNode(true);
      coins[i].parentNode.replaceChild(newCoin, coins[i]);
  
      var random = Math.random();
      if (random < 0.5) {
        newCoin.classList.add("heads");
        headsCount++;
      } else {
        newCoin.classList.add("tails");
        tailsCount++;
      }
  
      newCoin.style.animationName = "coinFlip";
    }
  
    const probability = 1 / 8;
    document.getElementById("headsCount").innerText = headsCount;
    document.getElementById("tailsCount").innerText = tailsCount;
    document.getElementById("result").innerText = probability;
  }