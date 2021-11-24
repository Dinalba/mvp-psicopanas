const mongoose = require("mongoose");

const foromessagehobbieSchema = mongoose.Schema(
    {

        // user: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     required: true,
        //     ref: "User",
        // },

        username:{

            type:String,
            require:true,
        },

        message:{

            type:String,
            require:true,
        },

        icon:{

            type: String,
            require:true
        }
    }
);

const Foromessagehobbie = mongoose.model("Foromessagehobbie",foromessagehobbieSchema);

module.exports = Foromessagehobbie;