const posting = document.querySelector("#posting__container");
const posting__button = document.querySelector("#posting__button");
const show__postingBtn = document.querySelector("#show__posting");
const main = document.querySelector("#main");

document.addEventListener("domcontentloaded",function(){
getData();
})


const getData=()=>{
  $.ajax({
    url: "http://spartacodingclub.shop/post",
    type: "get",
    dataType: "json",
    data: "",
    success: function (data) {
      const { articles } = data;
  
      const tag = articles.map(
        (item) =>
          `
          <article class="main__card">
          <a class="link" href=${item["url"]}>
  
          <img
            src=${item["image"]}
            alt="card__img"
            class="card__img"
          />
          <div class="card__info">
            <p>${item["title"]}</p>
            <p>${item["desc"]}</p>
          </div>
          </a>
        </article>`
      );
  
      main.innerHTML = tag.join("");
    },
    error: function (request, status, error) {},
  });
}



const showPosting = () => {
  posting.classList.toggle("show");
};

show__postingBtn.addEventListener("click", showPosting);
