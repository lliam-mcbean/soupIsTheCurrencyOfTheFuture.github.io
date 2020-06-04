// SCROLL EVENTS

window.addEventListener("scroll", function() {
    let movement = window.scrollY / 10;
    let triangle1 = document.querySelector('.triangle-1');
    let triangle2 = document.querySelector('.triangle-2');
    let triangle3 = document.querySelector('.triangle-3');

    if (window.scrollY > 300) {
        
        triangle1.style.transform = 'translateY(-' + movement + 'px)';
    
        triangle2.style.transform = 'rotateZ(' + movement / 2 + 'deg)';
        
        triangle3.style.transform = 'translateX(' + movement + 'px) rotateZ(' + movement / 2 + 'deg)';
    }

    console.log(window.scrollY);
})

// CLICK EVENTS

document.getElementById('hamburger-menu').addEventListener('click', function () {
    
    let buttons = document.getElementById('btn-container');
    let hamburger = document.getElementById('hamburger-menu');

    if (buttons.className === 'btn-container') {
        buttons.className = 'active';
    } else {
        buttons.className = 'btn-container';
    }

    if (hamburger.className === 'hamburger-menu') {
        hamburger.className = 'hamburger-menu-click';
    } else {
        hamburger.className = 'hamburger-menu'
    }

});
document.getElementById('hamburger-menu-2').addEventListener('click', function () {
    
    let buttons = document.getElementById('navigation-items');
    let hamburger = document.getElementById('hamburger-menu-2');

    if (buttons.style.display === 'block') {
        buttons.style.display = 'none';
    } else {
        buttons.style.display = 'block';
    }

    if (hamburger.className === 'hamburger-menu-2') {
        hamburger.className = 'hamburger-menu-click-2';
    } else {
        hamburger.className = 'hamburger-menu-2'
    }

});
// HOVER  EVENTS

document.querySelector('.home-button').addEventListener('mouseover', function() {
    document.querySelector('.top-bar').className = 'top-bar-active';
});

document.querySelector('.home-button').addEventListener('mouseout', function() {
    document.querySelector('.top-bar-active').className = 'top-bar';
})

document.querySelector('.layer-3').addEventListener('mouseover', function() {
    document.querySelector('.layer-1').className = 'layer-1-active';
    document.querySelector('.layer-2').className = 'layer-2-active';
});

document.querySelector('.layer-3').addEventListener('mouseout', function() {
    document.querySelector('.layer-1-active').className = 'layer-1';
    document.querySelector('.layer-2-active').className = 'layer-2';
})


if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }