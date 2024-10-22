const joi = require("joi")
const DataArray =[
    {   id:1,
        name:"Junaid",
        email:"abc@gmail.com",
        password:"12@#$%"},
    {   id:2,
        name:"Rehman",
        email:"xyz@gmail.com",
        password:"12@&*<#"
    },
    {   id:3,
        name:"Afzal",
        email:"lmn@gmail.com",
        password:"Ju@&*<#"
    },
    {   id:4,
        name:"Ali Sher",
        email:"alisher@gmail.com",
        password:"ali@&*<#"
    }
]
const UserSchema = joi.object(
    {
        id: joi.number().integer().required(),
        name: joi.string().required(),
        email: joi.string().required().email(),
        password:joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})')).required()
    }
    )
module.exports ={
    createUser: async function (req,res){
        try{
            const data = await req.body;
            if(!data){
                throw new Error("Invalid request data")
            }
            const {error}=UserSchema.validate(data);
            if(error){
                throw new Error(error.details[0].message)
            }
            DataArray.push(data);
            res.send(data);
            // console.log(data);
        }catch(error){
            res.send({error:error.message})
        }
        console.log(DataArray);
        
        // console.log("user created successfuly");
    },
    getUserById: async function (req,res){
        try{
            const UserId= await req.query.id;
            if(!UserId){
                throw new Error("User Id missing")
            }
            const FilteredId =DataArray.filter((element)=>element.id == UserId);

            if(FilteredId.length === 0){
                throw new Error("User not found")
            }
            res.send(FilteredId);
        }catch(error){
            res.send({ error:error.message })
        }
        
    },
    getUserByName: async function (req,res){
        const UserName= await req.query.name;
        const FilteredName =DataArray.filter((element)=>element.name == UserName);
        if(FilteredName){
            res.send(FilteredName)
        }else{
            console.log("User not found ")
        }
        
    },
    getAllUsers: async function (req,res){
        const AllUsers =DataArray.map((element)=>{
            return {  
                name:element.name,
                id:element.id,
                email:element.email,
                password:element.password
            };
        });
        res.send(AllUsers);
    },
    removeUser: async function (req,res){
        const userId= await req.body.id;
        const UserFilter =DataArray.filter((data)=>data.id == userId);
        res.send({
            message:"User deteled, rest of the array is given below ",
            Alluser:UserFilter,
        });
        // console.log(DataArray)
    },
    updateUser: async function (req,res){
        const userId= await req.body.id;
        const updateData = req.body;
        
        const userIndex =DataArray.findIndex((data)=>data.id == userId);
        if(userIndex != -1){
            DataArray[userIndex] = {...DataArray[userIndex],...updateData};
            res.send({
                message: "User updated",
                updatedUser: DataArray[userIndex],
            });
        }else{
            console.log("User not found");
            res.status(404).send("user not found");
        }
        console.log(DataArray)
        
    },
    
}