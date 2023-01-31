searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
      loginForm.classList.toggle('active');  
}

document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
}






window.onscroll = () =>{

  searchForm.classList.remove('active');

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

}

//                                       LOGOWANIE - login zapisywany w cookies
//                                (żeby działało musi być uruchomiony serwer w vscode)


async function logClick(){

  const login = document.getElementById('login').value;
  const password = document.getElementById('password').value;
  const loginForm = document.querySelector('.login-form-container');
  const loginBtn = document.querySelector('#login-btn');

  try {
      const response = await axios.get("http://127.0.0.1:8000/klient");
      for (const user of response.data) {
        if (user.LoginK === login && user.HasloK === password) {
          var d = new Date();
          d.setTime(d.getTime() + (1*24*60*60*1000));
          var expires = "expires="+ d.toUTCString();
          document.cookie = "login=" + login + ";" + expires + ";path=/";
          loginForm.style.display = 'none';
          const loggedInUser = getCookie('login');
          loginBtn.textContent = loggedInUser;
          return true;
        }
      }
      alert("Błędny login lub hasło");
      return false;
    } catch (error) {
      console.log(error);
    } 
  }


  function getCookie(name) {
      var value = "; " + document.cookie;
      var parts = value.split("; " + name + "=");
      if (parts.length == 2) return parts.pop().split(";").shift();
  }


  let logoutBtn = null;
  const loggedInUser = getCookie('login');
  if (loggedInUser !== "") {
      logoutBtn = document.createElement('div');
      logoutBtn.textContent = "Wyloguj";
      logoutBtn.classList.add("fas", "fa-sign-out-alt");
      document.querySelector('#login-btn').parentNode.appendChild(logoutBtn);
  }

  logoutBtn.onclick = () => {
  document.cookie = "login=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "cart=";
  logoutBtn.parentNode.removeChild(logoutBtn);
  location.reload();
}


window.onload = () =>{

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

  

  const loginBtn = document.querySelector('#login-btn');
  const loggedInUser = getCookie('login');
    if (loggedInUser) {
        loginBtn.textContent = loggedInUser;
    }

  fadeOut();

}

src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js"














/*
function showStars(rate) {
    var stars = "<div class=\"stars\">";
    for (let i = 0; i < Math.floor(rate); i++) {
        stars += "<i class=\"fas fa-star\"></i>";
    }
    if (rate > Math.floor(rate)) {
        stars += "<i class=\"fas fa-star-half-alt\"></i>";
    }
    for (let i = 0; i < 5 - Math.ceil(rate); i++) {
        stars += "<i class=\"far fa-star\"></i>";
    }
    stars += "</div>"
    return stars;
}










async function updateBestsellers() {


const fetchJSON = async (url) => {
try {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data;
} catch (error) {
  console.error(error);
}
};





  const bestsellersUrl = 'http://127.0.0.1:8000/bestsellers';







    const dataBestsellers = await fetchJSON(bestsellersUrl);
    for (let i = 0; i < dataBestsellers.length; i++) {
      const element = dataBestsellers[i];
      const title = element.TytulKs;
      const price = element.CenaKs.toFixed(2) + " zł";
      const r = await fetchJSON('http://127.0.0.1:8000/recenzja');
      var rate = 0;
      for (let j = 0; j < r.length; j++) {
        const eee = r[j];
        if (eee.IdKs == dataBestsellers[i].ISBN) {
            rate = eee.Ocena;
        }
      }

        
      const bookTitle = document.getElementById(`bestsellerBooks_book${i}_title`);
      const bookPrice = document.getElementById(`bestsellerBooks_book${i}_price`);
      const bookStars = document.getElementById(`bestsellerBooks_book${i}_stars`);
      if(bookTitle){
      bookTitle.innerHTML = title;
      bookPrice.innerHTML = price;
      bookStars.innerHTML = showStars(rate);
      }
    }

}
updateBestsellers()

*/



































function loader(){
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
  setTimeout(loader, 4000);
}

var swiper = new Swiper(".books-slider", {
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop:false,
  centeredSlides: false,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});


var swiper = new Swiper(".arrivals-slider", {
  spaceBetween: 10,
  loop:false,
  centeredSlides: false,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});