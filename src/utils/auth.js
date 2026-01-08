export function getUser() {
  try {
    return JSON.parse(localStorage.getItem("user"));
  } catch {
    return null;
  }
}

export function requireAuth(expectedRole, navigate) {
  const user = getUser();

  if (!user) {
    navigate("/login");
    return null;
  }

  if (expectedRole && user.userType !== expectedRole) {
    navigate("/login");
    return null;
  }

  return user;
}
