const loginHandler = async (e) => {
  e.preventDefault();

  const email = document.getElementById("emailLogin").value;
  const password = document.getElementById("passwordLogin").value;

  const login = await fetch("/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password
    }),
    headers: { "Content-type": "application/json" }
  });
  if (login.ok) {
    document.location.replace("profile");
  } else {
    alert("Login failed");
  }
};

document.getElementById("loginForm").addEventListener("submit", loginHandler);