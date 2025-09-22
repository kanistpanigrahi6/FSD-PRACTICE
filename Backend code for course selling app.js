const express=require('express')
const app=express()
app.use(express.json());


let ADMINS=[];
let USERS=[];
let COURSES=[];

function adminAuthentication(req,res,next){
    const {username,password}=req.headers;
    const admin=ADMINS.find(a=>a.username===username &&a.password===password);
    if(admin){
        next();
    }
    else{
        res.status(403).json({message:"Admin Authentication failed"});
    }

}

app.post(`/admin/signup`,(req,res)=>{
    const admin=req.body;
    const existingAdmin=ADMINS.find(a=>a.username===admin.username);
    if(existingAdmin){
        res.status(403).json({measage:"admin already exists"});
    }
    else{
        ADMINS.push(admin);
        res.json({message:"admin created successfully"});

    }
})


app.post(`/admin/login`,adminAuthentication,(req,res)=>{
    res.json({message:"Logged in successfully"});
})

app.post(`/admin/courses`,adminAuthentication,(req,res)=>{
    const course=req.body;
    if (!course.title){
        res.status(411).json({message:"titile shouls be add"});

    }
    else{
        course.id=Date.now();
        COURSES.push(course);
        res.status(201).json({message:"couse created successfully",courseid:course.id})
    }
})
