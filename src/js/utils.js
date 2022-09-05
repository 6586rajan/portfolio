export function addResume(pdf) {
  // if (!pdf.length) return;
  const resumeButton = document.querySelector(".cta-btn--resume");
  var randomNumber = Math.floor(Math.random() * pdf.length);
  var resume = pdf[randomNumber];
  resumeButton.setAttribute("href", resume);
  // function randomUrl() {
  //     var randomNumber = Math.floor(Math.random() * urlArray.length);
  //     var resume = pdf[randomNumber];
  //     window.location.href = newUrl;
  // }
}
