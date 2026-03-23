"use client";
import { useUserAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
      router.push("/week-10");
    } catch (error) {
      console.error("Sign out failed:", error);
    }
  };

  return (
    <nav style={{
      padding: "1rem 2rem",
      backgroundColor: "#1a1a2e",
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <span style={{ fontWeight: "bold" }}>Shopping List App</span>
      {user && (
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <span>{user.displayName || user.email}</span>
          <button
            onClick={handleSignOut}
            style={{
              backgroundColor: "#e74c3c",
              color: "white",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "4px",
              cursor: "pointer"
            }}
          >
            Sign Out
          </button>
        </div>
      )}
    </nav>
  );
}