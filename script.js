function radint(max) {
    return Math.floor(Math.random() * max);
  }

function og_background(i) {
    document.body.style.backgroundImage = `linear-gradient(rgb(${radint(255)}, ${radint(255)}, ${radint(255)}), transparent 100%)`;
}


function radground(a, b, c) {
    document.body.style.backgroundImage = `linear-gradient(rgb(${a}, ${b}, ${c}), transparent 100%)`;
}


var switched = false;
function switchar() {
    if (!switched) {
        document.body.style.backgroundImage =
        "url(assets/06f2a8bbb183279679087df1b3138c33.png)";
        switched = true;
    } else {
        document.body.style.backgroundImage =
        "url(assets/0119cd6dae94c6ef2dee74f59d745a37.png)";
        switched = false;

    }
}

var bg_a = radint(255);
var bg_b = radint(255);
var bg_c = radint(255);
function start_bg() {
    bgInterval = setInterval(function () {
        console.log("HERE");
        bg_a = (bg_a + 0.01);
        bg_b = (bg_b + 0.02);
    bg_c = (bg_c + 0.03);
    radground(
        255 * Math.sin(bg_a),
        255 * Math.sin(bg_b),
        255 * Math.sin(bg_c),
        );
        
    }, 50)
}