import mongoose from "mongoose";

const cropSchema = mongoose.Schema({
  crop_name: String,
  description: String,
  creator: String,
  instructions: String,
  // tags:[String],
  selectedFile: String,
  startProject: {
    type: Boolean,
    default: false,
  },
  startSeedsIndoorsby: {
    type: Date,
    default: new Date(),
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
  }
  

  //     instructions:[String],
  //     spread:{
  //         type: Number,
  //         default:0
  //     },
  //     row_spacing:{
  //         type: Number,
  //         default:0
  //     },
  //     growing_days:{
  //         type: Number,
  //         default:0
  //     },
  //     sowing_method:{
  //         type: String
  //      },
  //     sun_requirements:{
  //         type: String
  //     },
  //     start_seed_indoors:{
  //         type:String,
  //         default:"N/A"
  //     },
  //     start_seed_outdoors:{
  //         type:String,
  //         default:"N/A"
  //     },
  //     plant_seedlings_outdoors:{
  //         type:String,
  //         default:"N/A"
  //     },
  //     createdAt:{
  //         type:Date,
  //         default:new Date()
  //     }
});
const PostCrop = mongoose.model("PostCrop", cropSchema);

export default PostCrop;
