const commentSubmitHandler = (e) => {
  e.preventDefault();

  const blogpostId = document.getElementById("postId").value;
  const content = document.getElementById("commentContent").value;
  console.log({ blogpostId }, { content });

}

document.getElementById("commentForm").addEventListener("submit", commentSubmitHandler);