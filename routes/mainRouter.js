const express=require('express');
const { route } = require('express/lib/application');
const router=express.Router()
const mongoose=require('mongoose')
const Todoinfo=require('../models/infoSchema')


router.get('/',async (req,res)=>{
   
    const allTodo=await Todoinfo.find({}).sort('-date')
    
    res.render('home',{allTodo})
})

router.post('/',async (req,res)=>{
    const newTodo= new Todoinfo(req.body);
    await newTodo.save((err)=>{
        if(err){
            res.send("Not updated")
        }
        
    })
    res.redirect('/')

})
router.get('/:id/delete',async (req,res)=>{
   
    const todoDelete=await Todoinfo.findByIdAndDelete(req.params.id)
    
    res.redirect('/')
})
router.get('/:id/finish',async (req,res)=>{
   
    const todoDelete=await Todoinfo.findByIdAndUpdate(req.params.id,{progress:'Completed'})
    
    res.redirect('/')
})

module.exports=router