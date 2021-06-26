import React, {useState, useEffect} from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post"
import StoryReel from "../Story/StoryReel";
import { firestore } from "../Firebase/firebase";

function Feed() {
    const [posts, setPosts] = useState([]);
  

 

    useEffect(() => {
        firestore.collection("posts")
        //.orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => 
            setPosts(snapshot.docs.map((doc) => ({ 
                id: doc.id, 
                data: doc.data() })))
        );
    }, []);
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />


            {posts.map((post) => (
                <Post 
                key={post.id}
                profilePic={post.data.profilePic}
                message={post.data.message}
                // timestamp={post.data.timestamp}
                username={post.data.username}
                image={post.data.image}

                //postId={id}
                //origuser={user?.displayName}
                //userId={user.uid}
                //imageUrl={post.data.imageUrl} 
                //noLikes={post.data.noLikes}
                />
            ))}
        </div>
    );
}

export default Feed;