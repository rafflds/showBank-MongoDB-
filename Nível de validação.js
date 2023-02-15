// Visualizar a collection
db.contas.find()

// Atualizando valor
db.contas.updateOne({"cpf": "123.111.789.89"},{$set:{"numero_conta": '0665287k'}})
