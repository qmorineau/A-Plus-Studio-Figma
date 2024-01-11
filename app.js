const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
  });

  // Variables

  let contactButton  = document.querySelector("#hero-button");
  /* let burger = document.querySelector("#wrap-burger"); */
  /* let menu = document.querySelector("#menu"); */
  let menuIsActive = false;
  let email = document.querySelector("#email");
  let emailButton = document.querySelector('#email-button');

  // Functions

  // Functions

let buttonAction = () => {
  let modal = document.createElement("div");
  let body = document.querySelector("body");
  let div = body.appendChild(modal);
  div.id = "modal";
  let box = document.createElement("div");
  let whiteWindow = div.appendChild(box);
  whiteWindow.id = "whiteW";
  whiteWindow.innerHTML = `<form><label for="name">Name :</label><input type="text" placeholder="Enter your name" id="name"></input><label for="name">Company's name :</label><input type="text" placeholder="Enter your company name" id="company"></input><label for="email-modal">Email :</label><input type="email" placeholder="Enter your email" id="email-modal"></input><button type="button" id="modal-send">Send</button>
    </form>`;
  let crossButton = document.createElement("span");
  whiteWindow.appendChild(crossButton);
  crossButton.innerHTML = "X";
  disable()
  contactButton.removeEventListener("click", buttonAction);
  document.addEventListener("click", (e) => {
    if (e.target.matches("#modal") || e.target.matches("span")) {
    let modalBox = document.querySelector("#modal");
    modalBox.remove();
    contactButton.addEventListener("click", buttonAction);
    enable()
    } /* else if (e.target.matches("#modal-send")) {
      let emailModal = document.querySelector("#email-modal");
      let name = document.querySelector("#name");
      let company = document.querySelector("#company");
      
    } */
  })
}

let disable = () => {
  document.querySelector("body").classList.add('disable-scroll');
}

let enable = () => {
document.querySelector("body").classList.remove('disable-scroll');
}
  
let emailCheck = (email) => {
  if (validateEmail(email.value)) {
    console.log(email.value)
  } else if (!validateEmail(email.value)) {
    alert("You need to enter a valid email")
  };
};
  
let validateEmail = (value) => {
  return value.toLowerCase().match(
      /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/
    );
};

  // What happened

//contact modal

contactButton.addEventListener("click", buttonAction)


//email check

emailButton.addEventListener("click", () => {
    if (email.value.trim()) {
    emailCheck(email);
    email.value = "";
    }
})
