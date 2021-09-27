import mongoose from "mongoose";

const cropSchema = mongoose.Schema({
  crop_name: String,
  description: String,
  creator: String,
  instructions: String,
  selectedFile: String,
  startProject: {
    type: Boolean,
    default: false,
  },
  startSeedsIndoorsby: {
    type: Date,
  
  },
  plantSeedlingsOutdoorsby: {
    type: Date,
    default: new Date(),
  },
  Outdoors_by_Start_Seeds_Outdoors_by: {
    type: Date,
    default: new Date(),
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  growing_days: {
    type: Number,
    default: 0,
  },
  harvestDate: {
    type: Date,
    default: new Date(),
  },
  todaysDate:{
    type: Date,
    default: new Date()
  }
    
});
const PostCrop = mongoose.model("PostCrop", cropSchema);

export default PostCrop;
