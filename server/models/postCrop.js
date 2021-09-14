import mongoose from 'mongoose';

const cropSchema = mongoose.Schema({
    crop_name: String,
    description:String,
    creator: String,
    instructions: String,
    selectedFile:String
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
const PostCrop =mongoose.model('PostCrop',cropSchema);

export default PostCrop;