document.body.onmousemove = function(e) {
    document.documentElement.style.setProperty (
      '--x', (
        e.clientX+window.scrollX
      )
      + 'px'
    );
    document.documentElement.style.setProperty (
      '--y', (
        e.clientY+window.scrollY
      ) 
      + 'px'
    );
  }

  video.addEventListener("ended", () => {
    // 设置视频暂停后显示封面图（推荐你用视频中类似的一帧做一张静态图）
    video.setAttribute("poster", "images/short-video-thumbnail.jpg");

    // 可选：回到第一帧
    video.currentTime = 0;
  });

  // 一旦重新播放就移除 poster 图
  video.addEventListener("play", () => {
    video.removeAttribute("poster");
  });