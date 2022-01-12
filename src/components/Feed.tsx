import React from "react";
import { auth } from "../firebase";
import { TweetInput } from "./TweetInput";

import styles from "./Feed.module.css";

export const Feed = () => {
  return (
    <div className={styles.feed}>
      <TweetInput />
      <button onClick={() => auth.signOut()}>Logout</button>
    </div>
  );
};
