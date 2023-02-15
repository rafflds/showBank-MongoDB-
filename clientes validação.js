use showbank


/*
 Clientes
 
nome: texto,
cpf: texto,
data_nascimento: texto,
genero: 'string',
profissao :  texto,
endereco: ,
status_civil: 
*/



/*
Conta

numero_conta: int,
agencia: texto,
tipo: texto,
cpf: texto,
valor:double*/ 



// Criar Collection
db.createCollection("clientes",
      {
        validator:{
            $jsonSchema: {
              bsonType: "object",
              required: [ "nome", "cpf", "status_civil", "data_nascimento","endereco" ],
              properties: {
                 nome: {
                    bsonType: "string",
                    description: "Informe corretamente o nome do cliente"
                 },
                 cpf: {
                    bsonType: "string",
                    description: "Informe corretamente o CPF do cliente"
                 },
                 status_civil: {
                    enum: [ "Solteiro(a)", "Casado(a)", "Separado(a)", "Divorciado(a)","Viúvo(a)"],
                    description: "Informe corretamente o status civil do cliente"
                 },
                 data_nascimento: {
                    bsonType: [ "string" ],
                    description: "Informe corretamente o data de nascimento do cliente"
                 },
                 endereco: {
                    bsonType: [ "string" ],
                    description: "Informe corretamente o endereço do cliente"
                    }
                 }
              }
            }
        }
            
)
