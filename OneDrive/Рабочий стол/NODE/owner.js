const mongoose =  require("mongoose");
const ownerSchema = new mongoose.Schema({
     FirstName: {
          type: String,
          required: true,
     },

     LastName: String,
     Email: {
          type: String,
          required:true,
          lowercase: true
     },
     Age: {
          type:Number,
          min:1,
          max:99
     },
     veterinarians: [mongoose.SchemaTypes.ObjectId],
     pets:[mongoose.SchemaTypes.ObjectId]
     
});
module.exports = mongoose.model("owner", ownerSchema);