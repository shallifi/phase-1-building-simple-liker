  
// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


/* function testFunction(loveHearts) {
  const butHeart = document.querySelector(".like-glyph");
  butHeart.addEventListener("click",heartCall)
}
 */
// console.log(loveHearts);

//class to the error modal in the HTML so it does not appear when the page first loads

// *******changed the html to add class = hidden***************

//Set up an event listener to respond to a user action

// loverHearts.addEventListener("click", heartCall);



// function handleButtonClick(toClick){
  
  // }
  
  const loverHearts = document.querySelectorAll(".like-glyph")



//Submit a request to a mocked-up server

function heartCall(e) {
  const hearts = e.target;
  mimicServerCall("fake")
  .then(function(){
    if (hearts.innerText === EMPTY_HEART) {
      hearts.innerText = FULL_HEART;
      // activated-heart on css gives red color
      hearts.className = "activated-heart";
    } else {
      hearts.innerText = EMPTY_HEART;
      hearts.className = "";
    }
  })
  .catch(function(error) {
    const modal = document.querySelector("#modal");
      modal.className = "";
      modal.innerText = error;
      setTimeout(() => modal.className = "hidden", 3000);
  });
}

for (const glyph of loverHearts) {
  glyph.addEventListener("click", heartCall);
}



// Update the DOM based on the mock server's response







//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
