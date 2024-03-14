const express=require('express');
const app=express();
const pug=require('pug');
app.listen(3000,()=>{
    console.log("server running successfully!!!!");
});
let data={
    name:"ydp",
    city:"rjy",
    depart:"cse"
};
app.set('view engine','pug');
app.get('/demo',(req,res)=>{
    // res.render('index',{ title:"pug example",message:"welcome to Pug World." })
     res.render('index',{data});
})
