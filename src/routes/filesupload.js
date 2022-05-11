
module.exports = (app)=>{
    app.post("/upload", (req, res)=>{
        const newpath = __dirname + "/files/";
        const file = req.files.file;
        const filename = file.name;

        file.mv(`${newpath}${filename}`, (err)=>{
            if(err){
                res.status(500).send({message: "File uploaded failed", code: 200});
            }
            else{
                res.status(200).send({ message: "File uploaded", code: 200})
            }
        })
    })
}