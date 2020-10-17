exports.viewUpload = (req, res) => {
  res.render("index");
};

exports.fileUpload = (req, res) => {
    console.log(req.file);
  res.json({message:"imagen subida",
            image: req.file});
};
