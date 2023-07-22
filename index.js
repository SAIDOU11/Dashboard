async function getData() {
  const res = await fetch(
    "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
  );
  const data = await res.json();
  console.log(data);
  document.body.style.backgroundImage = `url("${data.urls.full}")`;
}

getData();