exports.time = (req,res)=>{
    res.json({time: `${Date().toString()} THIS IS THE CURRENT TIME`})
}