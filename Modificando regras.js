// Modificando as regras (serve p/ add campo, modifica-los)
db.runCommand({collMod: "clientes", 
    // Validações
    validator:{
            $jsonSchema: {
              bsonType: "object",
              "additionalProperties": false,
              required: ["_id", "nome", "cpf", "status_civil", "data_nascimento","endereco", "genero","profissao" ],
              properties: {
                 _id: {
                    bsonType: "objectId",
                    description: "Informe corretamente o endereço do cliente"
                    }, 
                 nome: {
                    bsonType: "string",
                    maxLength:150,
                    description: "Informe corretamente o nome do cliente"
                 },
                 cpf: {
                    bsonType: "string",
                    minLength:14,
                    maxLength:14,
                    description: "Informe corretamente o CPF do cliente"
                 },
                 status_civil: {
                    enum: [ "Solteiro(a)", "Casado(a)", "Separado(a)", "Divorciado(a)","Viúvo(a)"],
                    description: "Informe corretamente o status civil do cliente"
                 },
                 data_nascimento: {
                    bsonType: [ "string", "null" ],
                    description: "Informe corretamente o data de nascimento do cliente"
                 },
                 endereco: {
                    bsonType: "string",
                    description: "Informe corretamente o endereço do cliente"
                    },
                 genero: {
                    bsonType: "string",
                    description: "Informe corretamente o genero do cliente"
                    },
                 profissao: {
                    bsonType: [ "string" ],
                    description: "Informe corretamente a profissão do cliente"
                    }
                 }
              }
            },
            validationLevel: "moderate"
})



db.getCollectionInfos({name:"clientes"})

db.getCollectionInfos({name:"contas"})



db.runCommand({collMod: "contas",
    
     validator:{
        $jsonSchema: {
          bsonType: "object",
          "additionalProperties": false,
          required: ["_id", "numero_conta", "tipo", "cpf", "valor" ],
          properties: {
             _id: {
                    bsonType: "objectId",
                    description: "Informe corretamente o endereço do cliente"
                },
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
                minLength:14,
                maxLength:14,
                description: "Informe corretamento o número do CPF da conta"
             },
             // Acrescentado este campo
             valor: {
                bsonType: "double",
                description: "Informe corretamento o valor na conta" 
             }
             
            }
        }
    }
    
}) 



// Testar a nova regra de negócio
db.clientes.insert({"nome": "Emanuelly Raquel Peixoto", 
 "cpf": "587.179.508-05",  // nova regra minLength:14
 "data_nascimento": "24/05/1966", 
 "genero": "Feminino", 
 "profissao": "Gerente de loja", 
 "endereco": "Rua São Bento Abade, número 833, Jardim Marilena, Guarulhos, SP, 07140-450", 
 "status_civil": "Viúvo(a)"})


db.contas.insertOne({"Numero_Conta": "5348-P",
    "numero_conta": "04931-1",
    "tipo": "Conta Salário",
    "cpf":"123.111.789-89",
    "valor": 3.05  // valor double nova validação
})
