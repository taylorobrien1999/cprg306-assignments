"use client";
import { useUserAuth } from "../contexts/AuthContext";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Sign in failed:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Sign out failed:", error);
    }
  };

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Week 9: Firebase Auth</h1>
      {user ? (
        <div>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <Link href="/week-9/shopping-list">
            <button style={{ marginRight: "1rem" }}>Go to Shopping List</button>
          </Link>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <p>Please sign in to continue.</p>
          <button onClick={handleSignIn}>Sign in with GitHub</button>
        </div>
      )}
    </main>
  );
}