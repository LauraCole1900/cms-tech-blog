// TODO: Remove userId; add UI form validation
const postId = document.getElementById("postId").value;

const postUpdateHandler = async (e) => {
  e.preventDefault();
  
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  if (title && content) {
    await fetch(`/api/blog/${postId}`, {
      method: "PUT",
      body: JSON.stringify({
        title,
        content,
        userId: 3
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })

    document.location.replace("/profile");
  }
};


const postDeleteHandler = async () => {

  await fetch(`/api/blog/${postId}`, {
    method: "DELETE"
  });

  document.location.replace("/profile");
}

document.getElementById("editForm").addEventListener("submit", postUpdateHandler);
document.getElementById("delete").addEventListener("submit", postDeleteHandler);