db.clientes.insertOne(
    {
        "nome":"Monkey D Luffy",
        "cpf": "201.301.467-22",
        "status_civil":"Solteiro(a)",
        "data_nascimento":"15/03/2000",
        "endereco":"nv102 conj105s"
        
    })



// Inserir dados na collection
db.clientes.insertOne({
    
        "nome":"Scarlet Johonson",
        "cpf": "101.123.666-85",
        "status_civil":"Casado(a)",
        "data_nascimento":"28/12/1981",
        "endereco":"Bel 1025 ltsz 12"
})



// Visualizar os dados
db.clientes.find()
db.contas.find()



db.contas.insertOne(
    {
        "numero_conta": "04931-1",
        "tipo": "Conta Salário",
        "cpf":"123.456.789-89" 
    }
    
    
    )



db.contas.insertOne(
    {
        "numero_conta": "12459-2",
        "tipo": "Conta Corrente",
        "cpf":"789.753.159-27" 
    }
    
    
    )