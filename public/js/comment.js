// TODO: Remove userId when Auth works, add UI form validation
const commentSubmitHandler = async (e) => {
  e.preventDefault();

  const blogpostId = document.getElementById("postId").value;
  const content = document.getElementById("commentContent").value;
  console.log({ blogpostId }, { content });

  if (content) {
    await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({
        blogpostId,
        content,
        userId: 3
      }),
      headers: { "Content-Type": "application/json" }
    });

    document.location.reload();
  }
}

document.getElementById("commentForm").addEventListener("submit", commentSubmitHandler);