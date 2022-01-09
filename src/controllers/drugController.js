import drugInfos from "../models/drugs"

class DrugController {



    // create drug in db

    static async create(req,res){
        // req.body.user = req.user._id;
        const drug = await drugInfos.create(req.body);


        if(!drug){
            return res.status(404).json({error:"Drug not registered"})
        }

        return res
        .status(200)
        .json({message:"Drug create successfully", data: drug});
    }

    // get one drug by id
    static async getOneDrug(req,res){
        // req.body.user = req.user._id;
        const drug = await drugInfos.findById(req.params.id);


        if(!drug){
            return res.status(404).json({error:"Drug  is not found"})
        }

        return res
        .status(200)
        .json({message:"Drug found successfully", data: drug});
    }

    // delete by id

    
    
    static async deleteOneDrug(req,res){
        // req.body.user = req.user._id;
        const drug = await drugInfos.findByIdAndDelete(req.params.id);


        if(!drug){
            return res.status(404).json({error:"Drug  is not deleted"})
        }

        return res
        .status(200)
        .json({message:"Drug deleted successfully", data: drug});
    }

    // update drug

    static async getOneDrug(req,res){
        // req.body.user = req.user._id;
        const drug = await drugInfos.findById(req.params.id);


        if(!drug){
            return res.status(404).json({error:"Drug  is not found"})
        }

        return res
        .status(200)
        .json({message:"Drug found successfully", data: drug});
    }

    // delete by id

    
    
    static async updateOneDrug(req,res){
        // req.body.user = req.user._id;
        const drug = await drugInfos.findByIdAndUpdate(req.params.id , req.body,{new:true});


        if(!drug){
            return res.status(404).json({error:"Drug  is not updated"})
        }

        return res
        .status(200)
        .json({message:"Drug updated successfully", data: drug});
    }


    // get all drugs

       static async getAllDrugs(req,res){
        // req.body.user = req.user._id;
        const drugs = await drugInfos.find(req.body);


        if(!drugs){
            return res.status(404).json({error:"Drug not found "})
        }

        return res
        .status(200)
        .json({message:"Drugs found successfully", data: drugs});
    }

}
export default DrugController