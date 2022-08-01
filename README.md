Esse repositio é dividio em 2 partes, uma de exercicio e uma de API.

A primeira parte, do exercicio é composta por uma resolução do exercicios propostos, sendo eles o seguinte:
e1.js Crie uma função que recebe dois argumentos string e retorna o de maior comprimento.
e2.js E.2 Crie uma função que recebe três argumentos, uma função e duas string, aplique a função nas duas string e imprima o resultado.
e3.js Crie uma função que recebe vários argumentos do tipo string e imprime todosjuntos.
e4.js Dado a seguinte string 'teste 1 de 2 string 3', substitua todas as ocorrências de números pelo valor '[removido]'.
e5.js Dado o dicionário {'a': 4, 'e' :3 ,'i' :1 , 's': 5 } substitua os números na frase 'T35t3 d3 35t4g1o'pelos valores de suas respectivas keys, por exemplo a frase ol4 ficaria ola.
e6.js Utilizando a api da viacep (https://viacep.com.br/) e o seu cep como entrada imprima o seu endereço no formato 'ENDERECO, NUMERO, CIDADE/ESTADO'.
e7.js Imprima uma mensagem de saudação com o nome completo para cada um
dos objetos. O nome deve ter a primeira letra maiúscula.
Ex.:
Olá, Fulano de tal!
Olá, Juca da silva!
.../
e8.js Imprima a soma das idades (dica: utilize reduce)
e9.js Imprima o objeto se existir alguem com menos 25 anos.
e10.js Imprima todos os elementos em que a idade é menor que 30 anos.
e11.js Ordene o array de forma decrescente por idade, em caso de empate o desempate é pelo id.
e12.js Considere o objeto:
const pessoa = {
"nome": "Dev",
"sobrenome":"smart",
"idade":"26","cargo":"analista de sistemas",
"documento":"123.345.678-90"
}
Crie uma função que rece um objeto com o formato acima descrito e deleta o campo
"documento". a função deve devolver o objeto atualizado.

E a segunda parte é composta por uma API de posts, aonde temos posts e os posts tem comentarios, utilizei as seguintes tecnologias:
"body-parser": "^1.20.0",
"express": "^4.18.1",
"mysql2": "^2.3.3",
"nodemon": "^2.0.19",
"sequelize": "^6.21.3",

Tenho as seguintes rotas de post:
Retorna todos os posts
GET /post/

Adiciona um post com dados vindo do body
POST /post/new

Edita um post com dados vindo do body
POST /post/edit

Deleta um post com o ID vindo do body
DELETE /post/delete

Retorna todos os posts com seus respectivos comentarios
GET /post/:id

E comentarios:
Retorna todos os comentarios
GET /comentario/

Adiicona um comentario com dados vindo do body
POST /comentarios/new

Edita dados de um comentario com dados vindo do body (nao altera ID do post)
POST /comentarios/edit

Delete um comentario com dados vindo do body
DELETE /comentarios/delete



ERRO
Ao adicionar um post ocorre tudo ok, porém quando tento adicionar um comentario com o id do post que criei aparece o seguinte erro:
TypeError: Class constructor model cannot be invoked without 'new'
    at Layer.handle [as handle_request] (C:\Users\igor_\OneDrive\Área de Trabalho\Desafio Smart NX\API\node_modules\express\lib\router\layer.js:95:5)
    at trim_prefix (C:\Users\igor_\OneDrive\Área de Trabalho\Desafio Smart NX\API\node_modules\express\lib\router\index.js:328:13)
    at C:\Users\igor_\OneDrive\Área de Trabalho\Desafio Smart NX\API\node_modules\express\lib\router\index.js:286:9
    at Function.process_params (C:\Users\igor_\OneDrive\Área de Trabalho\Desafio Smart NX\API\node_modules\express\lib\router\index.js:346:12)
    at next (C:\Users\igor_\OneDrive\Área de Trabalho\Desafio Smart NX\API\node_modules\express\lib\router\index.js:280:10)
    at C:\Users\igor_\OneDrive\Área de Trabalho\Desafio Smart NX\API\node_modules\body-parser\lib\read.js:137:5
    at AsyncResource.runInAsyncScope (node:async_hooks:199:9)
    at invokeCallback (C:\Users\igor_\OneDrive\Área de Trabalho\Desafio Smart NX\API\node_modules\raw-body\index.js:231:16)
    at done (C:\Users\igor_\OneDrive\Área de Trabalho\Desafio Smart NX\API\node_modules\raw-body\index.js:220:7)
    at IncomingMessage.onEnd (C:\Users\igor_\OneDrive\Área de Trabalho\Desafio Smart NX\API\node_modules\raw-body\index.js:280:7)

Fiz varias pesquisas porém ainda não consegui resolver, pelo que estudei vou ter que alterar o model para versão do sequelize 7.