import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //li生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //div タグの子要素に各要素を追加
  div.appendChild(li);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
  console.log(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
