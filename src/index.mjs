import "./styles.css";

const onClickAdd=()=>{
  // テキストボックスの値を取得し、
  const inputText= document.getElementById("add-text").value;
  document.getElementById("add-text").value="";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;
  
  // button完了
  const completeButton =document.createElement("button");
  completeButton.innerText="完了";
  completeButton.addEventListener("click",()=>{
    const completeTarget=completeButton.parentNode;
    document.getElementById("incomplete-list").removeChild(completeTarget);


    //div生成
    const div2 = document.createElement("div");
    div2.className = "list-row";


    // liタグ生成
    const li2 = document.createElement("li");
    console.log(completeTarget);
    li2.innerText = completeTarget.firstChild.innerText;
    console.log(li2.innerText);


    // button完了
    const returnButton =document.createElement("button");
    returnButton.innerText="戻す";

    // divタグの子要素に各要素を設定
    div2.appendChild(li2);
    div2.appendChild(returnButton);

    document.getElementById("complete-list").appendChild(div2);
  })

  const deleteButton =document.createElement("button");
  deleteButton.innerText="削除";
  deleteButton.addEventListener("click",()=>{
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    const deleteTarget=deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  })

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
}

document
  .getElementById("add-button")
  .addEventListener("click",()=>onClickAdd());
