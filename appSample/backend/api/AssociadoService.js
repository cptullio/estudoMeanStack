const AssociadoModel = require('./AssociadoModel')
AssociadoModel.methods(['get', 'post', 'put', 'delete'])
AssociadoModel.updateOptions({new: true, runValidators: true})

AssociadoModel.route('count', function (req, res, next) {
  AssociadoModel.count(function (error, value) {
  if (error) {
  res.status(500).json({errors: [error]})
  }else {
  res.json({value})
  }
  })
})




AssociadoModel.route(':nome', (req, res, next) => {
    var nome = req.params.nome;       
            AssociadoModel.find({'nome' : new RegExp(nome, 'i')}, function(err, docs){
               if (err) {
               res.status(500).json({errors: [error]})
               }
               res.json(docs);
            });
})


  
  

module.exports = AssociadoModel