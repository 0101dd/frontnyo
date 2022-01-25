<template>
<v-app style="background-color: var(--accent);">
  <div class="banner">
    <div class="container">
      <p>書法是一種書寫的藝術，書法縱向穿透兩個層面：「使用」與「審美」；橫向跨越文字兩個層面：「文字」、「繪畫」。書法除了是書法家用以創作的主要表現和作品形式，也是一種研究書寫者心理與性格的工具。各地域依其在地歷史與文化發展出自有的書法特色，而書法至今仍廣泛應用於生活與藝術文化等層面。</p>
    </div>
  </div>
  <div class="book">

  </div>
</v-app>
</template>

<style>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner {
  width: 100vw;
  height: 100vh;
  background: url(../assets/shou-ye-banner.png) no-repeat top/100% 100%;
  filter: drop-shadow(0px 4px 7px #3b392cd8);
}

.banner p {
  color: black;
  font-size: 36px;
  font-weight: bolder;
  width: 70%;
  text-align: center;
  letter-spacing: 6px;
  line-height: 2.5;
}

.book  {
  height: 500px;
}
</style>
