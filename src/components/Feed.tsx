import React from "react";
import { auth } from "../firebase";

export const Feed = () => {
  return (
    <div>
      feed
      <button onClick={() => auth.signOut()}>Logout</button>
    </div>
  );
};
