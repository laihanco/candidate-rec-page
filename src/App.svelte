<script>
  import Header from './lib/Header.svelte'

  const events = [
    {
      image: 'event-pirmary@3x.png',
      date: '2023/12/26',
      title: '參與台北寵物論壇，爭取貓咪友善環境',
      content: '炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。'
    },
    {
      image: 'event20231224@3x.png',
      date: '2023/12/24',
      title: '掃街模式開啟！帶著你的貓耳，來和我一起走！',
      content: '街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！'
    },
    {
      image: 'event20231220@3x.png',
      date: '2023/12/20',
      title: '收容所模特兒大比拼！',
      content: '今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！'
    },
    {
      image: 'event20231226@3x.png',
      date: '2023/12/26',
      title: '參與台北寵物論壇，爭取貓咪友善環境',
      content: '炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。'
    }
  ];
  const policies = [
    {
      image: 'policy-health@3x.png',
      title: '為毛孩子謀福利！<br>推動寵物醫療保障方案',
    },
    {
      image: 'policy-heaven@3x.png',
      title: '打造休閒天堂！<br>推廣寵物休閒與娛樂場所',
    },
    {
      image: 'policy-teach@3x.png',
      title: '推廣寵物飼養教育，讓愛更加專業',
    },
  ];
</script>

<Header />

<main class="pt-[32px] md:pt-[100px]">
  <section>
    <h2 class="h0 text-center leading-[1.1]">
      <span>台灣的明天</span>
      <span>喵先鋪路</span>
    </h2>

    <div class="flex flex-col text-center md:flex-row justify-center items-center py-4 px-4 rouned-4">
      <div class="tag">2024 立委參選人</div>

      <div class="flex h3 gap-3 justify-center items-center py-3 px-4 rounded-2xl shadow-sm">
        <span class="w-10 h-10 flex justify-center items-center bg-gradient text-white rounded-full">
          3
        </span>
        <span class="text-pirmary">喵立翰 Miao Li-Han</span>
      </div>
    </div>

    <img src="./images/banner-man.png" alt="Miao Li-Han" class="px-4 mx-auto">
  </section>

  <ul class="flex flex-nowrap gap-6 overflow-hidden text-[40px] xl:text-[64px] font-semibold	 text-white bg-pirmary">
    <li class="shrink-0">為喵星人，護台灣！</li>
    <li class="shrink-0">從喵的眼中，看見台灣</li>
    <li class="shrink-0">喵的未來，人的希望</li>
  </ul>

  <section id="positions" class="bg-pirmary-light py-16 px-4">
    <div class="xl:max-w-7xl mx-auto flex flex-col xl:flex-row">
      <div class="xl:w-1/2 bg-white rounded-t-3xl xl:rounded-tr-none xl:rounded-l-3xl p-5 px-6 space-y-6">
        <div class="text-center">
          <span class="tag">ADVOCATE</span>
          <h2 class="h0">候選人主張</h2>
        </div>

        <h3 class="h3">
          我堅信 ! 藉由推動更完善的<span class="text-pirmary">貓咪福利</span>和相關政策，更是間接地投資於<span class="text-pirmary">台灣的未來</span>。
        </h3>

        <p>
          畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
        </p>
      </div>

      <img src="./images/praying-man@3x.png" alt="praying Miao Li-Han" 
        class="xl:w-1/2 rounded-b-3xl xl:rounded-bl-none xl:rounded-r-2xl"
      >
    </div>
  </section>

  <section id="events" class="xl:max-w-7xl mx-auto py-16 px-4">
    <div class="text-center mb-10">
      <span class="tag">LASTEST EVENTS</span>
      <h2 class="h0">最新活動</h2>
    </div>

    <article class="mb-6">
      <img src="./images/events/{events[0].image}" alt="{events[0].image}" 
        class="w-full object-fill object-center rounded-2xl"
      >
      
      <div class="mt-4 space-y-2">
        <span class="text-slate-500">{events[0].date}</span>
        <h4 class="h5">{events[0].title}</h4>
        <p>{events[0].content}</p>
      </div>
    </article>

    {#each events.slice(1) as {image, date, title, content}}
      <article class="flex mb-6 gap-2">
        <div class="flex-none">
          <img
            src="./images/events/{image}" alt="{image}"
            class="w-[109px] object-fill object-center rounded-xl"
          >
        </div>
        
        <div class="flex-auto space-y-2">
          <span class="text-slate-500">{date}</span>
          <h4 class="h5 line-clamp-1">{title}</h4>
          <p class="line-clamp-2">{content}</p>
        </div>
      </article>
    {/each}

    <button class="btn flex items-center">
      查看更多
      <img src="./icons/arrow-right.svg" alt="arrow right" class="ml-4 text-8">
    </button>
  </section>

  <section id="policies" class="bg-light py-16 px-4">
    <div class="text-center mb-10">
      <span class="tag">POLICY ISSUES</span>
      <h2 class="h0">政策議題</h2>
    </div>

    <ul class="xl:max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-y-16 md:space-x-6">
      {#each policies as {image, title}}
      <li class="flex flex-col justify-between">
        <h3 class="h4 mb-4">{@html title}</h3>
        <img src="./images/policies/{image}" alt="{image}" class="h-[267px] rounded-3xl object-cover">
      </li>
      {/each}
    </ul>
  </section>

  <section class="bg-light py-16 px-4">
    <div class="xl:max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
      <div id="donate" class="md:w-1/2 bg-pirmary py-5 px-6 rounded-[32px] space-y-4 md:scroll-mt-16">
        <h3 class="text-white font-black text-[40px]">小額支持喵喵</h3>

        <p class="text-white font-semibold text-xl">您的小筆捐款，是每隻毛孩未來的大大動力！</p>

        <div class="flex flex-nowrap gap-2 justify-between items-center">
          <div class="w-1/2">
            <button class="btn flex items-center">
              小額捐款
              <img src="./icons/arrow-right.svg" alt="arrow right" class="ml-4 text-8">
            </button>
          </div>

          <img src="./images/donate@3x.png" alt="donate" class="w-1/2">
        </div>
      </div>

      <div id="mail" class="md:w-1/2 bg-dark py-5 px-6 rounded-[32px] space-y-4 md:scroll-mt-16">
        <h3 class="text-white font-black text-[40px]">民眾服務信箱</h3>
        
        <p class="text-white font-semibold text-xl">親愛的鄉親，每一位市民的意見都是我們社區前進的原動力</p>
        
        <div class="flex flex-nowrap gap-2 justify-between items-center">
          <div class="w-1/2">
            <button class="btn flex items-center">
              填寫表單
              <img src="./icons/arrow-right.svg" alt="arrow right" class="ml-4 text-8">
            </button>
          </div>
          
          <img src="./images/envelope@3x.png" alt="donate" class="w-1/2">
        </div>
      </div>
    </div>
  </section>

  <section class="bg-light py-16 px-4">
    <h2 class="h0 text-center py-10 leading-[1.1]">
      <span>台灣的明天</span>
      <span>喵先鋪路</span>
    </h2>

    <div class="flex h4 gap-3 justify-center items-center mb-10">
      <span class="w-10 h-10 flex justify-center items-center bg-gradient text-white rounded-full">
        3
      </span>
      <span class="text-pirmary">喵立翰 Miao Li-Han</span>
    </div>
  </section>
</main>

<footer class="pt-16 pb-32 md:pb-16 px-4 bg-pirmary-light space-y-6">
  <div class="space-y-4">
    <div class="flex h3 gap-3 items-center">
      <span class="w-10 h-10 flex justify-center items-center bg-gradient text-white rounded-full">
        3
      </span>
      <span class="text-pirmary h3">喵立翰 Miao Li-Han</span>
    </div>

    <ul class="flex gap-2">
      <li class="w-12 h-12 flex justify-center items-center bg-white rounded-full cursor-not-allowed">
        <img src="./icons/fb.svg" alt="fb" class="w-[28px]">
      </li>
      <li class="w-12 h-12 flex justify-center items-center bg-white rounded-full cursor-not-allowed">
        <img src="./icons/ig.svg" alt="ig" class="w-[28px]">
      </li>
      <li class="w-12 h-12 flex justify-center items-center bg-white rounded-full cursor-not-allowed">
        <img src="./icons/youtube.svg" alt="youtube" class="w-[28px]">
      </li>
    </ul>

    <p class="text-sm">© 2023 喵立翰 Miao Li-Han 版權所有</p>
  </div>

  <article class="space-y-4">
    <h4 class="h4">競選總部</h4>
    <p>
      辦公室地址：喵星區，毛茸茸大道88號，喵喵大樓3樓<br>
      電話：(02) 888-5678<br>
      電子郵件地址：meowoffice@linmeow.tw
    </p>
  </article>
</footer>

<style></style>