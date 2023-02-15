// Criar Collection
db.createCollection("contas",{
    validator:{
        $jsonSchema: {
          bsonType: "object",
          required: [ "numero_conta", "tipo", "cpf" ],
          properties: {
             numero_conta: {
                bsonType: "string",
                description: "Informe corretamento o número da conta"
             },
             tipo: {
                bsonType: "string",
                enum:["Conta Corrente","Conta Poupança", "Conta Salário"],
                description: "Informe corretamento o tipo da conta"
             },
             cpf: {
                bsonType: "string",
                description: "Informe corretamento o número do CPF da conta"
             }
             
            }
        }
    }
})