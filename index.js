fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    document.body.style.backgroundImage = `url("${data.urls.regular}")`;
    document.getElementById("author").innerHTML = `By: ${data.user.name}`;
  })
  .catch((err) => {
    document.body.style.backgroundImage = `url("https://images.unsplash.com/photo-1537210249814-b9a10a161ae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTAwODY4MzV8&ixlib=rb-4.0.3&q=80&w=1080")`;
    document.getElementById("author").innerHTML = "By: Felix Mitierterme";
    // Report the errror to some kind of service
  });

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err, "erros throw here");
  });
