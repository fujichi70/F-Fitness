"use strict";

{
  const obj = [
    {
      image: "img/main/main_m.jpg",
      text: "NEW ME.",
      h1: "入会応援キャンペーン！",
      h2: "今なら入会金、月会費２か月分無料♪",
      p: "入会金、事務手数料、月会費2か月分が無料になります！さらに水素水オプション、オンラインヨガ月会費１か月分無料のどちらか選べる！この機会にぜひご入会ください♪万が一ご満足いただけない場合は初期費用全額返金なので安心してご利用いただけます。",
    },
    {
      image: "img/main/remote_m.jpg",
      text: "NEW ME.",
      h1: "オンラインヨガ始めました♪",
      h2: "月2000円で始めませんか？",
      p: "お試し期間なんと3か月！代金はもちろん無料！",
    },
    {
      image: "img/main/sanitize_m.jpg",
      text: "NEW ME.",
      h1: "感染対策しっかり実施中",
      h2: "器具等のアルコール除菌の徹底♪",
      p: "従業員は全員ワクチン接種済み。PCR検査も定期的に受けているのでご安心ください。",
    },
  ];

  const mainImage = document.getElementById("carousel__main");
  const prev = document.getElementById("carousel__prev");
  const next = document.getElementById("carousel__next");
  const newMe = document.getElementById("new-me");
  const h1 = document.getElementById("h1");
  const h2 = document.getElementById("h2");
  const p = document.getElementById("p");

  let currentIndex = 0;
  let timeOutId;

  mainImage.src = obj[currentIndex].image;

  let arr = [];
  const list = obj.map((val) => {
    const arrH1 = arr.push(val.h1);
    const arrH2 = arr.push(val.h2);
    const arrP = arr.push(val.p);

    forEach()


  });
    list();



  const chars = obj[currentIndex].text.trim().split("");
  const charsSplit = chars.map((val) => {
    if (val === " ") {
      val = val.replace(" ", "&nbsp;");
      return `<span>${val}</span>`;
    } else {
      return `<span>${val}</span>`;
    }
  });

  const charsJoin = charsSplit.join("");
  newMe.innerHTML = charsJoin;

  Array.from(newMe.children).forEach((e, index) => {
    setTimeout(() => {
      e.classList.remove("move");
      e.classList.add("move");
    }, 100 * index);
  });
  
  setTimeout(() => {
    newMe.children.classList.remove('move');
  }, 400);

  h1.textContent = obj[currentIndex].h1;
  h2.textContent = obj[currentIndex].h2;
  p.textContent = obj[currentIndex].p;

  function createThumbnailItem() {
    obj.map((val, index) => {
      const img = document.createElement("img"); //空のimgタグ
      const li = document.createElement("li"); //空のliタグ
      img.src = val.image; //イメージ画像入れる

      // クラス付与してメイン画像を映す
      if (index === currentIndex) {
        li.classList.add("current");
      }

      // クリックされた画像を表示
      li.addEventListener("click", () => {
        mainImage.src = val.image; //クリックされた画像取得

        // アニメーション
        mainImage.classList.add("active");
        setTimeout(() => {
          mainImage.classList.remove("active");
        }, 800);

        const thumbnails = document.querySelectorAll(
          ".carousel__thumbnails > li"
        );
        thumbnails[currentIndex].classList.remove("current"); // 現在のcurrentのclassを消す
        currentIndex = index; //クリックした画像のインデックスを取得
        thumbnails[currentIndex].classList.add("current"); // クリックした画像にclass付与
      });

      li.appendChild(img);
      document.querySelector(".carousel__thumbnails").appendChild(li);
    });
  }

  // カルーセルを前に戻す
  prev.addEventListener("click", () => {
    clearTimeout(timeOutId);
    let target = currentIndex - 1;
    if (target < 0) {
      target = obj.length - 1;
    }
    document.querySelectorAll(".carousel__thumbnails > li")[target].click();
    autoPlay();
  });

  // カルーセルを次に進める
  next.addEventListener("click", () => {
    clearTimeout(timeOutId);
    let target = currentIndex + 1;
    if (target === obj.length) {
      target = 0;
    }
    document.querySelectorAll(".carousel__thumbnails > li")[target].click();
    autoPlay();
  });

  // 自動再生
  // document.addEventListener("DOMContentLoaded", () => {
  //   autoPlay();
  // });

  function autoPlay() {
    timeOutId = setTimeout(() => {
      let target = currentIndex + 1;
      if (target === obj.length) {
        target = 0;
      }
      document.querySelectorAll(".carousel__thumbnails > li")[target].click();
      autoPlay();
    }, 10000);
  }

  createThumbnailItem();
}
