const button = document.querySelector("button");
const para = document.querySelector("p");
const answer = document.querySelector(".answer");
const span = document.querySelector("span");
const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
const Rec = new SpeechRec();
let ans = "";
const joke = [
  "Have you ever tried eating a clock? Its really time-consuming, especially if you go for seconds.",
  "It's cleaning day so naturally, I've already polished off a whole chocolate bar.",
  'Where are average things manufactured? The satisfactory.'];
try {
  Rec.onstart = function () {
    console.log("speech start");
    button.classList.add("btn-clicked");
    Rec.onresult = function (event) {
      console.log(event);
      button.classList.remove("btn-clicked");
      const current = event.resultIndex;
      const transcript = event.results[current][0].transcript;
      para.textContent = transcript;
      span.classList.add("show");
      try {
        maria(transcript);
      } catch (e) {
        console.log(e);
      }
    };

    function maria(message) {
      const speaker = new SpeechSynthesisUtterance();

      if (message.includes("hello")) {
        ans = "Hello i am maria how can i help you";
        speaker.text = ans;
        answer.textContent = ans;
        window.speechSynthesis.cancel();
      } else if (message.includes("hai")) {
        ans = "Hello i am maria how can i help you";
        speaker.text = ans;
        answer.textContent = ans;
        window.speechSynthesis.cancel();
      } else if (message.includes("hi")) {
        ans = "Hello i am maria how can i help you";
        speaker.text = ans;
        answer.textContent = ans;
        window.speechSynthesis.cancel();
      } else if (message.includes("hello" + "maria")) {
        ans = "Hello i am maria how can i help you";
        speaker.text = ans;
        answer.textContent = ans;
        window.speechSynthesis.cancel();
      } else if (message.includes("what is your date of birthday")) {
        ans = "My birth day is 30-11-2020";
        speaker.text = ans;
        answer.textContent = ans;
        window.speechSynthesis.cancel();
      } else if (message.includes("birthday")) {
        ans = "My birth day is 30-11-2020";
        speaker.text = ans;
        answer.textContent = ans;
        window.speechSynthesis.cancel();
      } else if (message.includes("what is your name")) {
        ans = "My name is Maria";
        speaker.text = ans;
        answer.textContent = ans;
        window.speechSynthesis.cancel();
      } else if (message.includes("your name")) {
        ans = "My name is Maria";
        speaker.text = ans;
        answer.textContent = ans;
        window.speechSynthesis.cancel();
      } else if (message.includes("who is your master")) {
        ans = "My master is Nizam and Shibin";
        speaker.text = ans;
        answer.textContent = ans;
        window.speechSynthesis.cancel();
      } else if (message.includes("your master")) {
        ans = "My master is Nizam and Shibin";
        speaker.text = ans;
        answer.textContent = ans;
        window.speechSynthesis.cancel();
      } else if (message.includes("master")) {
        ans = "My master is Nizam and Shibin";
        speaker.text = ans;
        answer.textContent = ans;
        window.speechSynthesis.cancel();
      } else if (message.includes("Good night")) {
        ans = "Dream about me";
        speaker.text = ans;
        answer.textContent = ans;
        window.speechSynthesis.cancel();
      } else if (message.includes("Good morning")) {
        ans = "Hello good morning to you";
        speaker.text = ans;
        answer.textContent = ans;
        window.speechSynthesis.cancel();
      } else if (message.includes("I love you")) {
        ans = "Oh, wow! A new name to the list of people who love me!";
        speaker.text = ans;
        answer.textContent = ans;
        window.speechSynthesis.cancel();
      } else if (message.includes("tell me a joke")) {
        ans = joke[Math.floor(Math.random() * joke.length)];
        speaker.text = ans;
        answer.textContent = ans;
        window.speechSynthesis.cancel();
      } else {
        speaker.text = "my master did not teach me how to answer your Question";
        answer.textContent =
          "my master did not teach me how to answer your Question";
      }
      speaker.volume = 1;
      speaker.rate = 1;
      speaker.pitch = 1;
      speaker.lang = "en-UK";
      window.speechSynthesis.speak(speaker);
    }
  };
} catch (e) {
  alert(
    "This service is not support in your browser <br> Update/Change your browser"
  );
}
button.addEventListener("click", () => {
  Rec.start();
});

