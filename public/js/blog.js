const postSubmitHandler = async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  await fetch("/api/post", {
    method: POST,
    body: JSON.stringify({
      title,
      body,
    }),
    headers: { "Content-Type": "application/json" },
  })

  document.location.replace("/profile");
};


document
  .querySelector("#new-post-form")
  .addEventListener("submit", postSubmitHandler);