import React, { useState, useEffect } from "react";
import "./Post.css";
import { Avatar} from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import {ExpandMoreOutlined} from "@material-ui/icons";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { timestamp1, firestore, auth} from "../Firebase/firebase";

function Post({postId, origuser, userId, noLikes, profilePic, image, username, timestamp, message}) {
    
    
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState("") 
    const [show, setShow] = useState("like2")
    const [show2, setShow2] = useState("textforlike")

    useEffect(() => {
        let unsubscribe;
        if (postId) {
            unsubscribe = firestore.collection("posts").doc(postId).collection("comments").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
                setComments(snapshot.docs.map((doc) => doc.data()));
            });
        }
        return () => {
            unsubscribe();
        }
    }, [postId]);

    useEffect(() => {
        firestore.collection("posts")
            .doc(postId)
            .collection("likes")
            .doc(userId)
            .get()
            .then(doc2 => {
                if (doc2.data()) {
                    if (show == 'like2') {
                        setShow('like2 blue');
                        setShow2('textforlike bluetextforlike')
                    } else {
                        setShow('like2');
                        setShow2('textforlike')
                    }
                }
            })
    }, [postId, userId]);

    const postComment = (event) => {
        event.preventDefault();
        firestore.collection("posts").doc(postId).collection("comments").add({
            text: comment,
            username:origuser,
            timestamp: timestamp1
        });
        setComment("")

    }
    
    const likeHandle = (event) => {
        event.preventDefault();
        if (show == 'like2') {
            setShow('like2 blue');
            setShow2('textforlike bluetextforlike')
        } else {
            setShow('like2');
            setShow2('textforlike')
        }

        firestore.collection('posts')
            .doc(postId)
            .get()
            .then(docc => {
                const data = docc.data()
                console.log(show)
                if (show == 'like2') {
                    firestore.collection("posts")
                        .doc(postId)
                        .collection("likes")
                        .doc(userId)
                        .get()
                        .then(doc2 => {
                            if (doc2.data()) {
                                console.log(doc2.data())
                            } else {
                                firestore.collection("posts").doc(postId).collection("likes").doc(userId).set({
                                    likes: 1
                                });
                                firestore.collection('posts').doc(postId).update({
                                    noLikes: data.noLikes + 1
                                });
                            }
                        })

                } else {
                    firestore.collection('posts').doc(postId).collection('likes').doc(userId).delete().then(function () {
                        firestore.collection('posts').doc(postId).update({
                            noLikes: data.noLikes - 1
                        });
                    })
                }
            })

    }

    return (
     <div className="post">
         <div className="post__top">
             <Avatar src={profilePic}
             className="post__avatar" />
             <div className="post__topInfo">
                 <h3>{username}</h3>
                 <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
             </div>
         </div>

         <div className="post__bottom">
             <p>{message}</p>
         </div>

         <div className="post__image"> 
            
             <img src={image} alt=""/>
         </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon
                        onclick={likeHandle} />
                    <p>{noLikes} Like</p>
                </div>
         
                <div className="post__option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
          
                <div className="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>

                <div className="post__option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlined />
                </div>
            </div>
            <form 
                onSubmit={postComment}
            >
                <div className="commentBox">
                    <Avatar
                        alt=""
                        src=""
                        className="post__avatar2"
                    />
                    <input
                        className="commentInputBox"
                        type="text"
                        placeholder="write a comment"
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <input 
                        type="submit"
                        disabled={!comment}
                        className="transparent__submit" />
                </div>
            </form>

            {
                comments.map((comment) => (
                    <div className={`comments__show myself`}>
                        <Avatar
                            className="post__avatar2"
                            alt=""
                            src=""
                        />
                        <div class="container__comments">
                            <p><span>{comment.username}</span><i class="post__verified"></i>&nbsp; {comment.text}</p>
                        </div>
                    </div>
                ))
            }
     </div>
    );
}

export default Post;