const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

const contact = new mongoose.Schema({
  name: String,
  email: String,
  number: Number,
  address:String,
});
const userModal = new mongoose.model("usersData", contact);
mongoose.connect(
 "mongodb+srv://aravindankireddy15802:A.aravind15802@cluster0.6inf4vz.mongodb.net/crud?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

);

const product = new mongoose.Schema({
  id: Number,
  image:String,
  name: String,
  price:Number,
});
const menProduct = new mongoose.model("menproducts",product)
app.listen(8001, () => {
  console.log("server is running");
});

app.post("/user", async (req, res) => {
  try {
    const { name, email, number,address} = req.body;
    const newData = new userModal({
      name,
      email,
      number,
      address,
    });
    await newData.save();

    res.json({ message: "Data inserted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



app.get("/men", async (req,res)=>{
  try{
       const data = await menProduct.find()
      //  res.json(data)
      console.log(data)
  }
  catch(error){
    res.json({error:"internal server error"});
    console.log(error)
  }
})



app.get("/user", async (req,res)=>{
  
  try{
   const data = await userModal.find();
  //  res.json(data);
   res.json(data)
  }
  catch(error){
    res.json({ error : "internal server error"});
  }

})





