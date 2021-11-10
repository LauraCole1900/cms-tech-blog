// TODO: add UI form validation

const postSubmitHandler = async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  if (title && content) {
    await fetch("/api/blog", {
      method: "POST",
      body: JSON.stringify({
        title,
        content
      }),
      headers: { "Content-Type": "application/json" },
    })

    document.location.replace("/profile");
  }
};


document.getElementById("postForm").addEventListener("submit", postSubmitHandler);