{
  /* <div class="toast">Sample toast Message</div> */
}
const action = document.querySelector(".action");
const error = document.querySelector(".btn--error");
const success = document.querySelector(".btn--success");
const dfault = document.querySelector(".btn--dfault");

// event listeners
action.addEventListener("click", e => {
  let state = null;
  let item = e.target.className;
  if (item == "btn btn--error") {
    state = "error";
    Toast.show("Please try again; Something went wrong", state);
  } else if (item == "btn btn--success") {
    state = "success";
    Toast.show("Congratration! You are all set to go", state);
    // console.log("success");
  } else if (item == "btn btn--dfault") {
    Toast.show(
      "Don't forget to modify your Default Setting for security reasons"
    );
    // console.log("default");
  }
});

const Toast = {
  init() {
    this.hideTimeout = null; //restart the timer
    // this.state = null;

    //create a toast div
    this.el = document.createElement("div");
    this.el.className = "toast";
    document.body.appendChild(this.el);
  },

  show(message, state) {
    clearTimeout(this.hideTimeout);

    this.el.textContent = message;
    this.el.classList.add("toast--visible");

    if (state) {
      this.el.classList.add(`toast--${state}`);
    }
    this.hideTimeout = setTimeout(() => {
      this.el.classList.remove("toast--visible");
      this.el.classList.remove(`toast--${state}`);
      this.state = null;
    }, 3000);
  }
};
//wait till DOM loads then add the toast div
document.addEventListener("DOMContentLoaded", () => Toast.init());
