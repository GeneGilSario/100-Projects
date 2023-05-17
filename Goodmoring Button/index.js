const btn = document.getElementById("btn");

// change button text on click
btn.addEventListener("click", function handleClick() {
  const initialText = "Good morning!";

  if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    btn.textContent = "Magandang Araw!";
  } else {
    btn.textContent = initialText;
  }
});
