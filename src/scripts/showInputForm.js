const saveNLoad = require("./saveNloadDatabase")
const valueAndList = require("./valueAndList")

const modal = document.querySelector(".modal")

const addShowBtn = document.querySelector("#addShowBtn");
addShowBtn.addEventListener("click", () => {
    console.log("button clicked")
    modal.innerHTML = `
    <div class="modal-background has-text-centered"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title has-text-centered">Add New Show</p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body has-text-centered">
            <form>
                <p>Title:</p><input id="showTitle" type="text"></input>
                <p>Plot Summary:</p><input id="plotSummary" type="text"></input>
                <p>Number of Seasons:</p><input id="seasonNumber" type="url"></input>
            </form>
        </section>
        <footer class="modal-card-foot buttons is-centered">
          <button id="saveShowBtn" class="button is-link">Save Show</button>
        </footer>
      </div>
    `;
    modal.classList.add("is-active")

    const saveShowBtn = document.getElementById("saveShowBtn");

    saveShowBtn.addEventListener("click", (valueAndList))

    let deleteBtn = document.querySelector(".delete"); // queries the '.delete' class attached to the delete button above located in the modal.innerHTML
    deleteBtn.addEventListener("click", () => { // adds click event to button
        modal.classList.remove("is-active"); // removes the "is-active" class in order to exit bulma's modal component
    });
})