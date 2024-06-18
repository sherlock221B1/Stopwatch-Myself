const button1Tag = document.querySelector(".button1");
const centisecondTag = document.querySelector(".centisecond");
const secondTag = document.querySelector(".second");
const minuteTag = document.querySelector(".minute");

button = "start";
let theInterval; // Declare theInterval in a scope accessible by both functions

button1Tag.addEventListener("click", () => {
  if (button === "start") {
    startTheTime();
    button = "pause";
    button1Tag.innerHTML = "Pause";
  } else if (button === "pause") {
    clearInterval(theInterval);
    button = "resume";
    button1Tag.innerHTML = "Resume";
  } else if ((button = "resume")) {
    startTheTime();
    button = "pause";
    button1Tag.innerHTML = "Pause";
  }
});

const startTheTime = () => {
  let centisecond = 0;
  let second = 0;
  let minute = 0;
  theInterval = setInterval(() => {
    centisecond += 1; // ### start centisecond ###
    if (centisecond < 10) {
      centisecondTag.innerHTML = `0${centisecond}`; // when centisecond less than 10
    } else if (centisecond >= 10 && centisecond < 100) {
      centisecondTag.innerHTML = `${centisecond}`; //when centisecond greater than 10 and less than 100
    } else if (centisecond >= 100) {
      centisecond = 0; // when centisecond greater than 100
      centisecondTag.innerHTML = "00";
      second += 1; /* ### start second ### */
      if (second < 10) {
        secondTag.innerHTML = `0${second}`; // when second less than 10
      } else if (second >= 10 && second < 60) {
        secondTag.innerHTML = `${second}`; //when second greater than 10 and less than 60
      } else if (second >= 60) {
        second = 0; // when second greater than 60
        secondTag.innerHTML = "00";
        minute += 1; // ## start minute ##
        if (minute < 10) {
          minuteTag.innerHTML = `0${minute}`; // when minute less than 10
        } else if (minute >= 10 && minute < 60) {
          minuteTag.innerHTML = `${minute}`; //when minute greater than 10 and less than 60
        } else if (minute >= 60) {
          minute = 0; // when second greater than 60
          minuteTag.innerHTML = "";
        }
      }
    }
  }, 10);
};
