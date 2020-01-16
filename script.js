//Первая кнопка
var button1 = document.getElementById('one_button');
function links() {
   window.open('http://www.onliner.by','_blank')
}
//Вторая кнопка
function styleBody() {
  if (document.body.style.backgroundColor == "grey") {
    document.body.style.backgroundColor = "white";
  }
  else {
    document.body.style.backgroundColor = "grey"
  }
}
//Третья кнопка
function flexBox() {
  document.body.innerHTML = '<div class="container"><header>Header</header><nav><p>Навигация</p></nav><article><h1>Что такое Lorem Ipsum?</h1></article><aside><p>Sidebar</p></aside></div>';
  var style = document.createElement('style');
    style.innerHTML = `
      .container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        text-align: center;
      }
      .container p {
        font-size: 28px;
      }
      header {
        width: 100%;
        background-color: #256987;
        color: white;
        font-size: 36px;
        padding: 20px 0;
      }
      nav, article, aside {
        padding: 20px 0;
        width: 20%;
      }
      nav {
        background-color: #734;
      }
      article {
        flex-grow:2;
        background-color: #697;
      }
      aside {
        background-color: #465;
      }
    `;
  document.head.appendChild(style);
}
