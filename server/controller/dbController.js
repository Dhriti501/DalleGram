const mongoose = require("mongoose");

//replace username, password and clustername
const dbUrl = "mongodb+srv://dhriti:test1234@allposts.ipfmgdq.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to database!');
  })
  .catch((err) => {
    console.error(err);
  });

//defining a schema 
const imageSchema = new mongoose.Schema({
  username : String, 
  prompt : String,
  imgUrl : String,
})

//export format of schema - class created 
const Image = mongoose.model('Image', imageSchema);

// //function to add image in database 
const addImage = async (req,res) =>{
  
  const {username, prompt, imgUrl} = req.body

  try{
    
    const newImage = new Image({
      username,
      prompt,
      imgUrl
    })

      newImage.save()
        .then(()=>{
          console.log("Image saved ")
        })
  
      res.status(200).json({
        success:true,
        data:"new image saved in db successfully"
      })
    }catch(error){

      res.status(404).json({
        success:false,
        data:"error"
      })

    }
}

//displaying all images 
const getImage = (req,res) =>{
  
  Image.find()
  .then((users) => {
    res.send(users);
  })
  .catch((err) => {
    console.error(err);
  });
}

//TO-DO - function delete image 






module.exports = {addImage, getImage}