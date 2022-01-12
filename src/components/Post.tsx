import React, { useState, useEffect } from "react";
import styles from "./Post.module.css";
import { db } from "../firebase";
import firebase from "firebase/app";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MessageIcon from "@material-ui/icons/Message";
import SendIcon from "@material-ui/icons/Send";

interface PROPS {
  postId: string;
  avatar: string;
  image: string;
  text: string;
  timestamp: any;
  username: string;
}

export const Post: React.FC<PROPS> = (props) => {
  const { postId, avatar, image, text, timestamp, username } = props;
  return (
    <div className={styles.post}>
      <div className={styles.post_avater}>
        <Avatar src={avatar} />
        <div className={styles.post_body}>
          <div>
            <div className={styles.post_header}>
              <h3>
                <span className={styles.post_headerUser}>@{username}</span>
                <span className={styles.post_headerTime}>
                  {new Date(timestamp?.toDate()).toLocaleString()}
                </span>
              </h3>
            </div>
            {image && (
              <div className={styles.post_tweetImage}>
                <img src={props.image} alt="tweet" />
              </div>
            )}
            <div className={styles.post_tweet}>
              <p>{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
