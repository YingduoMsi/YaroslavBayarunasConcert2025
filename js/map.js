const locations = {
    police: {
      imgSrc: "https://kascomarine.com/wp-content/uploads/2019/06/Maintain-A-Healthy-Pond.jpg",
      title: "Police Station",
      desc: "Josh在警察局和父亲见面。在那里他意识到了女友的失踪并没有想象的那么简单。他决定重返侦探的旧职，努力找出事情的真相。"
    },
    pond: {
      imgSrc: "https://kascomarine.com/wp-content/uploads/2019/06/Maintain-A-Healthy-Pond.jpg",
      title: "Lordman Pond",
      desc: "一个宁静的小池塘，传闻在这里曾经发生过诡异事件。"
    },
    concert: {
      imgSrc: "https://kascomarine.com/wp-content/uploads/2019/06/Maintain-A-Healthy-Pond.jpg",
      title: "Music Hall",
      desc: "镇上最热闹的地方，曾经举办过多场大型演出。Josh经常在这里演出。虽然这个音乐厅并不大，但他认为这是帮助他到达百老汇舞台的一个跳板。"
    },
    square: {
      imgSrc: "https://kascomarine.com/wp-content/uploads/2019/06/Maintain-A-Healthy-Pond.jpg",
      title: "City Square",
      desc: "Once the heart of commerce and celebration, the City Square stands as a timeless witness to generations of joy, unrest, and quiet reflection. The stone pavement, worn smooth by thousands of footsteps, holds echoes of markets long gone and parades once vibrant with music. During the day, the square is alive with the chatter of townsfolk and the aroma of roasted chestnuts from nearby vendors. Children dart between the benches, artists sketch under shady trees, and old men play chess by the fountain, their laughter carried on the breeze."
    },
    church: {
      imgSrc: "https://kascomarine.com/wp-content/uploads/2019/06/Maintain-A-Healthy-Pond.jpg",
      title: "St. Mary's Church",
      desc: "Nestled at the edge of town, the Church of Saint Mary stands as a silent witness to centuries of secrets and whispered prayers. With its weathered stone walls and towering spire, it holds an eerie beauty—drawing in those who seek peace, and repelling those with something to hide."
    }
  };

  function showLocation(key, event) {
    document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
    event.currentTarget.classList.add('active');

    const sidebar = document.getElementById('sidebar');
    sidebar.classList.add('active');

    document.getElementById('locationImage').src = locations[key].imgSrc;
    document.getElementById('locationTitle').innerText = locations[key].title;
    document.getElementById('locationDesc').innerText = locations[key].desc;
  }

  function closeSidebar() {
    document.getElementById('sidebar').classList.remove('active');
    document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
  }

  