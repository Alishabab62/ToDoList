const input = document.getElementById("input");
const btn = document.getElementById("add");
const ul = document.getElementById("item");
// const main=document.getElementById('ul');
const new_div = document.getElementById("new-div");
const new_btn = document.getElementById("new-btn");

btn.addEventListener("click", () => {
  add_item();
  create_btn();
});

function add_item() {
  const new_div = document.createElement("div");
  new_div.id = "new-div";
  ul.appendChild(new_div);
  const new_li = document.createElement("li");
  new_div.appendChild(new_li);
  new_li.innerText = input.value;
}

function create_btn() {
  const new_btn = document.createElement("button");
  new_btn.innerText = "Delete";
  new_btn.id = "btn";
  // console.log("btn");
  new_div.appendChild(new_btn);
}
