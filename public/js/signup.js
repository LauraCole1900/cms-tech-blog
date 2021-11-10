const signupHandler = async (e) => {
  e.preventDefault();

  const email = document.getElementById("emailSignup").value.trim();
  const userName = document.getElementById("usernameSignup").value.trim();
  const password = document.getElementById("passwordSignup").value.trim();

  const signup = await fetch("/api/user", {
    method: "POST",
    body: JSON.stringify({
      userName,
      email,
      password
    }),
    headers: { "Content-Type": "application/json" }
  });
  if (signup.ok) {
    document.location.replace("/profile");
  } else {
    alert("Signup failed")
  }
};

document.getElementById("signupForm").addEventListener("submit", signupHandler);