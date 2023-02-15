 // Regras existentes
 db.getCollectionInfos({name:"clientes"})
 db.getCollectionInfos({name:"contas"})
 
 
 // Retorna regras existentes de 2 collections
 db.runCommand({listCollections:2})