const itemsList = (req, res) =>{
    res.json({
      item1: "Guitarra",
      item2: "Piano"
    })
};


module.exports = {itemsList}