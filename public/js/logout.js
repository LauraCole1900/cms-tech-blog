const logoutHandler = async () => {
  const logout = await fetch("/api/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" }
  });

  if (logout.ok) {
    document.location.replace("/");
  } else {
    alert("Logout failed");
  }
};

document.getElementById("logoutLink").addEventListener("click", logoutHandler);