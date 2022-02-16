import { db } from '../firebaseConfig'
import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
    query,
    where,
} from "firebase/firestore";

const blogsCollectionRef = collection(db, "blogs");

export async function readBlog(blogid){
    let curr_blog={}
    await getDocs(blogsCollectionRef)
        .then((res) => {
            res.docs.map((blog) => {
                if(blogid===blog.id){
                    curr_blog=blog.data()
                }
            })
        })
        .catch(err => {
            console.log(err)
        })
    return curr_blog
}

export async function getBlogs() {
    let blogArray = []
    await getDocs(blogsCollectionRef)
        .then((res) => {
            res.docs.map((blog) => {
                let blog_doc = blog.data()
                blog_doc["id"] = blog.id
                blogArray.push(blog_doc)
            })
        })
        .catch(err => {
            console.log(err)
        })
    return blogArray
}

export async function getMyBlogs(username) {
    let blogArray = []
    const q = query(
        blogsCollectionRef,
        where("author", "==", username)
    );
    const querySnapshot = await getDocs(q).then(res => {
        res.docs.map(blog => {
            let blog_doc = blog.data()
            blog_doc["id"] = blog.id
            blogArray.push(blog_doc)
        })
    })
    return blogArray
}

export async function deleteBlog(id) {
    const target = doc(db, "blogs", id)
    await deleteDoc(target)
        .then((res) => {
            console.log("blog deleted", res);
            getBlogs();
        })
        .catch((err) => {
            console.log(err);
        })
}

export async function addBlog(newBlog) {
    await addDoc(blogsCollectionRef, newBlog)
        .then((res) => {
            console.log("added successfully");
        })
        .catch((err) => {
            console.log(err);
        })
}