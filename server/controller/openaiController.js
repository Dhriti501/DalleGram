const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_API_KEY
});
const openai = new OpenAIApi(configuration);

const generateImage = async(req,res) =>{

  const {prompt} = req.body

  try{
    const response = await openai.createImage({
      prompt,
      n:1,
      size:"256x256"
    })
  
    image_url = response.data.data[0].url;
  
    res.status(200).json({
      success:true,
      data: image_url
    })
  }catch(error){
    res.status(404).json({
      success:false,
      data:"The image could not be generated"
    })
  }
  
}

module.exports = {generateImage}