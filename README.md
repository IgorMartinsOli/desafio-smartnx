﻿Esse repositio é dividio em 2 partes, uma de exercicio e uma de API.<br>

A primeira parte, do exercicio é composta por uma resolução do exercicios propostos, sendo eles o seguinte:<br>
e1.js Crie uma função que recebe dois argumentos string e retorna o de maior comprimento.<br>
e2.js E.2 Crie uma função que recebe três argumentos, uma função e duas string, aplique a função nas duas string e imprima o resultado.<br>
e3.js Crie uma função que recebe vários argumentos do tipo string e imprime todosjuntos.<br>
e4.js Dado a seguinte string 'teste 1 de 2 string 3', substitua todas as ocorrências de números pelo valor '[removido]'.<br>
e5.js Dado o dicionário {'a': 4, 'e' :3 ,'i' :1 , 's': 5 } substitua os números na frase 'T35t3 d3 35t4g1o'pelos valores de suas respectivas keys, por exemplo a frase ol4 ficaria ola.<br>
e6.js Utilizando a api da viacep (https://viacep.com.br/) e o seu cep como entrada imprima o seu endereço no formato 'ENDERECO, NUMERO, CIDADE/ESTADO'.
e7.js Imprima uma mensagem de saudação com o nome completo para cada um dos objetos. O nome deve ter a primeira letra maiúscula.<br>
Ex.:<br>
Olá, Fulano de tal!<br>
Olá, Juca da silva!<br>
.../<br>
e8.js Imprima a soma das idades (dica: utilize reduce)<br>
e9.js Imprima o objeto se existir alguem com menos 25 anos.<br>
e10.js Imprima todos os elementos em que a idade é menor que 30 anos.<br>
e11.js Ordene o array de forma decrescente por idade, em caso de empate o desempate é pelo id.<br>
e12.js Considere o objeto:<br>
const pessoa = {<br>
"nome": "Dev",<br>
"sobrenome":"smart",<br>
"idade":"26","cargo":"analista de sistemas",<br>
"documento":"123.345.678-90"<br>
}<br>
Crie uma função que rece um objeto com o formato acima descrito e deleta o campo "documento". a função deve devolver o objeto atualizado.<br>

E a segunda parte é composta por uma API de posts, aonde temos posts e os posts tem comentarios, utilizei as seguintes tecnologias:<br>
"body-parser": "^1.20.0",<br>
"express": "^4.18.1",<br>
"mysql2": "^2.3.3",<br>
"nodemon": "^2.0.19",<br>
"sequelize": "^6.21.3",<br>

Tenho as seguintes rotas de post:<br>
Retorna todos os posts<br>
GET /post/<br>
<br>
Adiciona um post com dados vindo do body<br>
POST /post/new<br>
<br>
Edita um post com dados vindo do body<br>
POST /post/edit<br>
<br>
Deleta um post com o ID vindo do body<br>
DELETE /post/delete<br>
<br>
Retorna todos os posts com seus respectivos comentarios<br>
GET /post/:id<br>
<br>
E comentarios:<br>
Retorna todos os comentarios<br>
GET /comentario/<br>
<br>
Adiicona um comentario com dados vindo do body<br>
POST /comentarios/new<br>
<br>
Edita dados de um comentario com dados vindo do body (nao altera ID do post)<br>
POST /comentarios/edit<br>
<br>
Delete um comentario com dados vindo do body<br>
DELETE /comentarios/delete<br>
<br>
<br>
<br>
ERRO<br>
Ao adicionar um post ocorre tudo ok, porém quando tento adicionar um comentario com o id do post que criei aparece o seguinte erro:<br>
TypeError: Class constructor model cannot be invoked without 'new'<br>
    at Layer.handle [as handle_request] (C:\Users\igor_\OneDrive\Área de Trabalho\Desafio Smart NX\API\node_modules\express\lib\router\layer.js:95:5)<br>
    at trim_prefix (C:\Users\igor_\OneDrive\Área de Trabalho\Desafio Smart NX\API\node_modules\express\lib\router\index.js:328:13)<br>
    at C:\Users\igor_\OneDrive\Área de Trabalho\Desafio Smart NX\API\node_modules\express\lib\router\index.js:286:9<br>
    at Function.process_params (C:\Users\igor_\OneDrive\Área de Trabalho\Desafio Smart NX\API\node_modules\express\lib\router\index.js:346:12)<br>
    at next (C:\Users\igor_\OneDrive\Área de Trabalho\Desafio Smart NX\API\node_modules\express\lib\router\index.js:280:10)<br>
    at C:\Users\igor_\OneDrive\Área de Trabalho\Desafio Smart NX\API\node_modules\body-parser\lib\read.js:137:5<br>
    at AsyncResource.runInAsyncScope (node:async_hooks:199:9)<br>
    at invokeCallback (C:\Users\igor_\OneDrive\Área de Trabalho\Desafio Smart NX\API\node_modules\raw-body\index.js:231:16)<br>
    at done (C:\Users\igor_\OneDrive\Área de Trabalho\Desafio Smart NX\API\node_modules\raw-body\index.js:220:7)<br>
    at IncomingMessage.onEnd (C:\Users\igor_\OneDrive\Área de Trabalho\Desafio Smart NX\API\node_modules\raw-body\index.js:280:7)<br>
<br>
Fiz varias pesquisas porém ainda não consegui resolver, pelo que estudei vou ter que alterar o model para versão do sequelize 7.<br>
