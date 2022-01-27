"use strict";

{
  const carouselParts = [
    {
      newMe: 'NEW ME.',
      message1: "入会応援キャンペーン！",
      message2: "今なら入会金、月会費２か月分無料♪",
      message3:
      "入会金、事務手数料、月会費2か月分が無料になります！さらに水素水オプション、オンラインヨガ月会費１か月分無料のどちらか選べる！この機会にぜひご入会ください♪万が一ご満足いただけない場合は初期費用全額返金なので安心してご利用いただけます。",
      image: "img/main/main_m.jpg",
    },
    {
      newMe: 'NEW ME.',
      message1: "オンラインヨガ始めました♪",
      message2: "月2000円で始めませんか？",
      message3: "お試し期間なんと3か月！代金はもちろん無料！",
      image: "img/main/remote_m.jpg",
    },
    {
      newMe: 'NEW ME.',
      message1: "感染対策しっかり実施中",
      message2: "器具等のアルコール除菌の徹底を行っております",
      message3:
        "従業員は全員ワクチン接種済み。PCR検査も定期的に受けているのでご安心ください。",
      image: "img/main/sanitize_m.jpg",
    },
  ];

  const mainImage = document.getElementById("carousel--main");
  const prev = document.getElementById("carousel--prev");
  const next = document.getElementById("carousel--next");
  const mainMessage = document.getElementById("js-main-message");
  const subMessage = document.getElementById("js-sub-message");
  const detailMessage = document.getElementById("js-detail-message");
  const newMe = document.getElementById("js-new-me");

  let currentIndex = 0;
  let timeOutId;
  let target;

  const chars = carouselParts[currentIndex].newMe.trim().split("");
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

  mainImage.src = carouselParts[currentIndex].image;
  newMe.innerHTML = carouselParts[currentIndex].newMe;
  document.addEventListener("DOMContentLoaded", () => {
    autoPlay();
    createThumbnailItem();
    nextElement();
    prevBtn();
    nextBtn();
  });

  function charsAnimation() {
    Array.from(newMe.children).forEach((e, index) => {
      setTimeout(() => {
        e.classList.add("move");
      }, 100 * index);
    });
  }
  
  function nextElement() {
    mainMessage.textContent = carouselParts[currentIndex].message1;
    subMessage.textContent = carouselParts[currentIndex].message2;
    detailMessage.textContent = carouselParts[currentIndex].message3;
  }

  function nextImage() {
    document.querySelectorAll(".carousel--thumbnails > li")[target].click();
    nextElement();
  }

  function prevBtn() {
    prev.addEventListener("click", () => {
      autoPlay();
      target = currentIndex - 1;
      if (target < 0) {
        target = carouselParts.length - 1;
      }
      nextImage();
    });
  }

  function nextBtn() {
    next.addEventListener("click", () => {
      autoPlay();
      target = currentIndex + 1;
      if (target === carouselParts.length) {
        target = 0;
      }
      nextImage();
    });
  }

  function autoPlay() {
    stopAutoPlay();
    timeOutId = setInterval(() => {
      target = currentIndex + 1;
      if (target === carouselParts.length) {
        target = 0;
      }
      nextImage();
	  charsAnimation();
    }, 10000);
  }

  function stopAutoPlay() {
    clearInterval(timeOutId);
  }

  function createThumbnailItem() {
    for (let [index, val] of carouselParts.entries()) {
      const img = document.createElement("img");
      const li = document.createElement("li");
      img.src = val.image;

      if (index === currentIndex) {
        li.classList.add("current");
      }

      li.addEventListener("click", () => {
        mainImage.src = val.image;

        mainImage.classList.add("active");
        setTimeout(() => {
          mainImage.classList.remove("active");
        }, 800);

        const thumbnails = document.querySelectorAll(
          ".carousel--thumbnails > li"
        );
        thumbnails[currentIndex].classList.remove("current");
        currentIndex = index;
        thumbnails[currentIndex].classList.add("current");
      });

      li.appendChild(img);
      document.querySelector(".carousel--thumbnails").appendChild(li);
    }
  }
}
