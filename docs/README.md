# UpMedal Challenge Hiring Coders + VTEX

O objetivo desse projeto foi replicar a página www.upmedal.com.br utilizado a tecnologia VTEX.IO + AWS. 
A estrutura da loja foi criada em blocos do VTEX.IO. 
Para o formulário de cadastro foi utilizado um component React e integrando com um banco de dados DynamoDB utilizando uma função lambda e a API Gateway da AWS.

## Tecnologias

Para este projeto foram utilizadas as seguintes tecnologias:
+ VTEX.IO
+ CSS
+ React
+ Typescript
+ NodeJS
+ Express
+ AWS Amplify
+ AWS API Gateway
+ DynamoDB
+ Lambda

## Desafios

Para a disposição dos produtos utilizei o product.shelf associado ao tab-layout para conseguir renderizar na página os produtos referentes a cada aba do menu superior. Ainda é preciso estilizar melhor a disposição dos produtos para que estes apareçam em duas colunas como no site original.

Adicionei um modal-trigger como aba para receber o cupom de desconto e também tive dificuldade para estilizá-la. 

Apesar de ter conseguido construir toda a estrutura do backend utilizando Amplify e a API estar funcionando normalmente, tiver um problema de permissão de CORS, então não consigo enviar a requisição para a API Gateway. Tentei configurar as permissões do CORS por lá porém não obtive sucesso.
