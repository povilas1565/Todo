import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth();
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [currentUser])
  return currentUser;
}