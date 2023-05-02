

const {initializeApp} =require('firebase/app')

const dotenv = require("dotenv")
const { Router } = require("express");
const router = Router();

dotenv.config()



const firebaseConfig = {
    apiKey: "AIzaSyAVvKAD_0EtH4cGKAu1WodaEY5g6TgFXBo",
    authDomain: "creditbank-d05fd.firebaseapp.com",
    databaseURL: "https://creditbank-d05fd-default-rtdb.firebaseio.com",
    projectId: "creditbank-d05fd",
    storageBucket: "creditbank-d05fd.appspot.com",
    messagingSenderId: "962739966741",
    appId: "1:962739966741:web:9ffbdfff756eff16060f1c",
    measurementId: "G-VZHXWF4G1F"
  };

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

const postListFeedbacks = ref(db, 'Customerfeedbacks');

const newPostFeedbacks = push(postListFeedbacks);

router.get("/", async(req,res)=>{

    res.render("index")
})

router.post('/post', async(req,res)=>{



const date = new Date().toString();


const {email,phone,message,feedbacktype,branch,acc,channel,copy,name} = req.body

set(newPostFeedbacks, {
  Name : name,
  Email:  email,
  Phone: phone,
  FeedBack : feedbacktype,
  Branch: branch,
  Channel: channel,
  Account : acc,
  Message : message,

  Date : date,
  Stamp: serverTimestamp()
})



})

module.exports=router;

