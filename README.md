

- Uma API voltada para atender demandas de um estabelicimento de pedidos. Para esse projeto, optou-se por um restaurante.
- As Tecnologias pensadas para a construção do mesmo são:
## TypeScript
## Nestjs
## MongoDB


- Tecnologias para funcionalidades extras(a ser implementado):
## Jest (para testes)
## JWT (para autenticação)


# Como utilizar esse projeto:
### Execute este comando no seu terminal do gitbash: git clone https://github.com/LuthGom/restaurante-api.git

### Depois de completo, execute este segundo comando: yarn install ou npm install


## O projeto necessita das seguintes variveis de ambiente de seu uso:

- MONGODB-PASSWORD
- MONGODB_USER
- MONGODB_DATABASE

# ROTAS DA API

### 📚 CLIENTES 📚

| Método     | Rota            | Descrição                  |
| ---------- | --------------- | -------------------------- |
| **GET**    | `/clients`        | Lista todos os clientess      |
| **GET**    | `/clients/{id}` | Busca o clientes pelo {id}    |
| **POST**   | `/clients`        | Adiciona um novo clientes     |
| **PATCH**  | `/clients/:{id}`  | Atualiza o clientes pelo {id} |
| **DELETE** | `/clients/:{id}`  | Deleta o clientes pelo {id}   |

### 📚 RESTAURANTES 📚

| Método     | Rota            | Descrição                  |
| ---------- | --------------- | -------------------------- |
| **GET**    | `/restaurantes`        | Lista todos os restaurantes      |
| **GET**    | `/restaurantes/{id}` | Busca o restaurante pelo {id}    |
| **POST**   | `/restaurantes`        | Adiciona um novo restaurante     |
| **PATCH**  | `/restaurantes/:{id}`  | Atualiza o restaurante pelo {id} |
| **DELETE** | `/restaurantes/:{id}`  | Deleta o restaurante pelo {id}   |

### 📚 PEDIDOS 📚

| Método     | Rota            | Descrição                  |
| ---------- | --------------- | -------------------------- |
| **GET**    | `/pedidos`        | Lista todos os pedidos      |
| **GET**    | `/pedidos/{id}` | Busca o pedido pelo {id}    |
| **POST**   | `/pedidos`        | Adiciona um novo pedido     |
| **PATCH**  | `/pedidos/:{id}`  | Atualiza o pedido pelo {id} |
| **DELETE** | `/pedidos/:{id}`  | Deleta o pedido pelo {id}   |


## Campos necessários para cadastrar um novo Cliente:

```json
{
    "name": string ("obrigatório"),
    "email": string,
    "username": string,
    "password": string,

}
```

## Campos necessários para cadastrar um novo Restaurante:

```json
{
    "name": string ("obrigatório"),
    "cmpj": string,
    "unidade": string,

}
```
## Campos necessários para cadastrar um novo Pedido:

```json
{
    "itens": [{item:string, qtde: nnumber, valor: number}],
    "total": number,
    "unidade": {ObjectId},
    "cliente": {ObjectId},

}
```
