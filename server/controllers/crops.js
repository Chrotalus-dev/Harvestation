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
export const createCrops = async (req, res) => {
  const crop = req.body;
  const newCrop = new PostCrop(crop);
  try {
    await newCrop.save();
      res.status(201).json(newCrop);
      
  } catch (error) {
      res.status(409).json({message:error.message});
  }
}
