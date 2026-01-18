// ====== 字幕效果 ======
const subtitles = [
  {
    cn: "韩晶，不知道从什么时候开始，你在我生活里变得越来越清晰。不是某一个瞬间，而是很多细小的时刻，慢慢叠在了一起。\
        回头看才发现，那些被记住的，往往是不经意的瞬间。"
  },
  {
    cn: "从相识到逐渐熟悉，我记下的，并不是你最精致、最想被看见的样子，而是那些不被刻意修饰的瞬间。是夏天从温室里出来，身上还带着汗水和泥土的你；\
        是清晨赶实验，来不及收拾自己的你；是忙碌了一整天，满脸写满疲倦，却依然认真的你。这些画面，在我记忆里停留得很久很久。\
        因为那样的你，真实且真诚。"
  },
  {
    cn: "后来我才意识到，自己开始期待与你有关的日常。每一次遇见，都会让原本普通的一天显得不那么单调。我也曾想把这种情绪放轻一点，\
        毕竟，我未来可能会离开。可有些在意，并不是刻意放下就能消失的。就像那天放的《想见你》，当时也许并没有想表达什么，只是那首歌刚好出现在那个时刻。现在回想起来，也许那就是一种不自觉的投射。"
  },
  {
    cn: "我并不想为这些片段赋予明确的意义。它们只是存在过，又刚好被我认真地记住而已。\
          至于之后，会如何继续，是否还会有交集，都不需要现在草率地决定。我只是想让你知道——在无人察觉的角落，你也被人很认真地在意过。\
          我很珍惜与认识你的这段经历，能认识你，本身就是一段值得被保存的记忆。\
          至于未来，是否还能给彼此一个再靠近一点、再多了解一点的机会，也可以交给时间慢慢回答。"
  }
];


let index = 0;
const subtitleBox = document.getElementById("subtitleBox");

function typeLine(text, callback) {
  const line = document.createElement("div");
  line.className = "subtitle-line cn";
  subtitleBox.appendChild(line);

  let i = 0;
  const interval = setInterval(() => {
    line.innerHTML = text.substring(0, i++) + "<span class='cursor'>|</span>";
    if (i > text.length) {
      clearInterval(interval);
      line.innerHTML = text; // 显示完整文字
      setTimeout(callback, 1200); // 段落之间延迟
    }
  }, 150); // 打字速度
}

function showSubtitle() {
  if (index >= subtitles.length) return;
  const current = subtitles[index];
  typeLine(current.cn, () => {
    index++;
    setTimeout(showSubtitle, 800);
  });
}

// ====== 流星雨效果 ======
const rainWrap = document.getElementById('rain');
const rainCount = 150; // 流星数量，可自行调节

for (let i = 0; i < rainCount; i++) {
    const rain = document.createElement('div');
    rain.classList.add('rain');

    // 随机位置、大小、角度、速度
    const left = Math.random() * 100; // 百分比位置
    const height = 2 + Math.random() * 10; // vh
    const width = 0.5 + Math.random() * 2; // px
    const angle = 10 - Math.random() * -10; // -10~-20度
    const duration = 3 + Math.random() * 2; // 秒
    const delay = Math.random() * 7; // 秒

    // 应用随机属性
    rain.style.left = `${left}%`;
    rain.style.height = `${height}vh`;
    rain.style.width = `${width}px`;
    rain.style.setProperty('--angle', `${angle}deg`);
    rain.style.animationDuration = `${duration}s`;
    rain.style.animationDelay = `${delay}s`;

    rainWrap.appendChild(rain);
}

// ====== 背景音乐控制 ======
const video = document.getElementById('bgMusic');
const button = document.getElementById('playButton');

button.addEventListener('click', () => {
    video.currentTime = 48;
    video.play();
    button.style.display = 'none';
    showSubtitle(); // 同时启动字幕打字
});
