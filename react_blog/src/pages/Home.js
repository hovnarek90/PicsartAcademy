import React, { useEffect, useState } from "react";
import {
  getDoc,
  getDocs,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

function Home({ isAuth }) {
  const [postList, setPostList] = useState([]);
  const [editingPost, setEditingPost] = useState(null); // Track the post being edited
  const [editTitle, setEditTitle] = useState("");
  const [editText, setEditText] = useState("");

  const postCollectionRef = collection(db, "posts");

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  const editPost = async (id) => {
    const postDocRef = doc(db, "posts", id);

    try {
      const postDocSnapshot = await getDoc(postDocRef);

      if (postDocSnapshot.exists()) {
        const postData = postDocSnapshot.data();
        setEditingPost(id);
        setEditTitle(postData.title);
        setEditText(postData.postText);
      } else {
        console.log("Post does not exist.");
      }
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  const saveEditedPost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await updateDoc(postDoc, {
      title: editTitle,
      postText: editText,
    });

    setEditingPost(null);
    setEditTitle("");
    setEditText("");
  };

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [deletePost]);

  return (
    <div className="homePage">
      {postList.map((post) => {
        return (
          <div key={post.id} className="post">
            <div className="postHeader">
              <div className="title">
                {editingPost === post.id ? (
                  <div className="edit-title">
                    <input
                      type="text"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                    />
                    <textarea
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                    />
                    <button onClick={() => saveEditedPost(post.id)}>
                      Save
                    </button>
                  </div>
                ) : (
                  <h1>{post.title}</h1>
                )}
              </div>
              <div className="deletePost">
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button onClick={() => deletePost(post.id)}>
                    <FontAwesomeIcon icon={faTrash} />{" "}
                  </button>
                )}
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button onClick={() => editPost(post.id)}>
                    <FontAwesomeIcon icon={faPenToSquare} />{" "}
                  </button>
                )}
              </div>
            </div>
            {!editingPost || editingPost !== post.id ? (
              <div className="postTextContainer">{post.postText}</div>
            ) : null}
            {post.author && <h3>@{post.author.name}</h3>}
          </div>
        );
      })}
    </div>
  );
}

export default Home;
