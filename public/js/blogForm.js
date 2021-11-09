// TODO: Remove userId

const postSubmitHandler = async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

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


document.getElementById("#postForm").addEventListener("submit", postSubmitHandler);