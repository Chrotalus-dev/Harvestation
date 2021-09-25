import mongoose  from 'mongoose';
import PostCrop from "../models/postCrop.js";

export const getCrops = async (req, res) => {
  try {
    const postCrops = await PostCrop.find();
    console.log(postCrops);
    res.status(200).json(postCrops);
  } catch (error) {
      res.status(404).json({message:error.message})
  }
}
export const createCrop = async (req, res) => {
  const crop = req.body;
  const newCrop = new PostCrop(crop);
  try {
    await newCrop.save();
      res.status(201).json(newCrop);
      
  } catch (error) {
      res.status(409).json({message:error.message});
  }
}
export const updateCrop = async (req, res) => {
  const {id:_id} = req.params;
  const crop = req.body;
  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No crop with that id');
  
  const updatedCrop = await PostCrop.findByIdAndUpdate(_id,{...crop,_id},{new:true});

  res.json(updatedCrop);
 
}

export const deleteCrop = async(req,res)=>{
  const {id} = req.params;
  console.log('DELETE!');
  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No crop with that id');
    await PostCrop.findByIdAndRemove(id);
    res.json({message:'Crop deleted successfully'});
  


}

