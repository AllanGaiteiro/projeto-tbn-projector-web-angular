# Modelo Relacional - Projeção da Bíblia

## Tabela: Livros

| Campo     | Tipo    | Chave Primária | Descrição                 |
| --------- | ------- | -------------- | ------------------------- |
| id        | INTEGER | sim            | ID único do livro         |
| nome      | TEXT    | não            | Nome do livro             |
| testament | TEXT    | não            | Antigo ou Novo Testamento |

## Tabela: Capítulos

| Campo   | Tipo    | Chave Primária | Chave Estrangeira | Descrição                           |
| ------- | ------- | -------------- | ----------------- | ----------------------------------- |
| id      | INTEGER | sim            |                   | ID único do capítulo                |
| num     | INTEGER | não            |                   | Número do capítulo                  |
| book_id | INTEGER | não            | sim               | ID do livro que o capítulo pertence |

## Tabela: Versículos

| Campo      | Tipo    | Chave Primária | Chave Estrangeira | Descrição                               |
| ---------- | ------- | -------------- | ----------------- | --------------------------------------- |
| id         | INTEGER | sim            |                   | ID único do versículo                   |
| num        | INTEGER | não            |                   | Número do versículo                     |
| text       | TEXT    | não            |                   | Texto do versículo                      |
| chapter_id | INTEGER | não            | sim               | ID do capítulo que o versículo pertence |

Neste modelo, cada livro tem uma ou mais entradas na tabela Livros. Cada entrada na tabela Livros é identificada por um ID único, e contém informações sobre o nome do livro e em qual testamento ele está (Antigo ou Novo).

Cada capítulo é relacionado com um livro por meio de sua chave estrangeira book_id, que se refere ao ID do livro que o capítulo pertence. Cada entrada na tabela Capítulos é identificada por um ID único e contém informações sobre o número do capítulo.

Cada versículo é relacionado com um capítulo por meio de sua chave estrangeira chapter_id, que se refere ao ID do capítulo que o versículo pertence. Cada entrada na tabela Versículos é identificada por um ID único e contém informações sobre o número do versículo e o texto correspondente.
