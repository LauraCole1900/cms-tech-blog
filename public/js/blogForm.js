// TODO: Remove userId

const postSubmitHandler = async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const content = document.getElementById("body").value;
  console.log({ title }, { body })

  await fetch("/api/blog", {
    method: "POST",
    body: JSON.stringify({
      title,
      content,
      userId: 3
    }),
    headers: { "Content-Type": "application/json" },
  })

  document.location.replace("/profile");
};


document
  .querySelector("#new-post-form")
  .addEventListener("submit", postSubmitHandler);