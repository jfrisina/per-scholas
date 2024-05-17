// Caching DOM Elements
const cList = document.getElementById("commentList");
const cInput = document.getElementById("commentInput");
const cBtn = document.getElementById("addCommentBtn");

cBtn.addEventListener("click", addComment);
cInput.addEventListener("keypress", (e) => {
  console.log(e.key);
  if (e.key === "Enter") addComment();
});
//  any keypress
// cInput.addEventListener("keypress", () => {
//     console.log("pressed key");
//   });

// event handler function
function addComment() {
  // read and cache the value from the input Elements
  let comment = cInput.value;
  if (comment === "") return;

  // add the value to the commentlist Elements
  let listItem = document.createElement("li");
  listItem.textContent = comment;
  cList.appendChild(listItem);

  // clear the input Elements
  cInput.value = "";

  // focus the input element
  cInput.focus();
}
addComment();
