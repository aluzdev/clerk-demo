import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

import "./App.css";

function App() {
  return (
    <>
      <header
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SignedOut>
          You are currently logged out
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
          <p>You have successfuly signed in! </p>
        </SignedIn>
      </header>
    </>
  );
}

export default App;
