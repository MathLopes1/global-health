![saude](https://user-images.githubusercontent.com/70352508/180573477-7902d1e8-a5f4-46c2-9a8a-bb25ca659203.jpg)

<h1 align="center">
  <a align="center" href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" /></a>
  <a href="https://www.mongodb.com/pt-br"><img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" /></a>
  <a href="https://www.docker.com/"><img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" /></a>
  <a href="https://code.visualstudio.com/"><img src="https://img.shields.io/badge/Vscode-2496ED?style=for-the-badge&logo=visualstudio&logoColor=blue&color=white"></a>
</h1>

## Descrição do Projeto
API Rest Global Health

### Links úteis.
[Documentação da API - Global Health](https://documenter.getpostman.com/view/18168778/UzXKVydr) <br>

## Como usar a API

### Pré-requisitos 
> Para usar esta API é preciso instalar as seguintes ferramentas:
- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/pt-br)
> Para editar o código eu recomendo: 
- [VSCode](https://code.visualstudio.com/)
> Para testar as rotas você pode usar:
- [Postman](https://www.postman.com)


### Rodando o Back End (servidor)

```bash
# Clone este repositório
 git clone https://github.com/MathLopes1/global-health.git

# Acesse a pasta do projeto 
 cd global-health

# crie um arquivo .env seguindo o modelo do arquivo .env.exemplo e preencha os campos.

# Instale as dependências
 npm i

# Faça o build da aplicação para JavaScript
npm rum build
           
# Execute a aplicação em modo de Produção
npm run start

# Execute a aplicação em modo de desenvolvimento
npm run start:dev

# Execute os testes            
npm run test            
            
# O servidor iniciará na porta: 3000 
```

### 👨‍💼 ROTAS DE PACIENTES
### REQUEST - (POST)
> Para cadastrar pacientes.

> POST - `localhost:3000/api/v1/patient`

Exemplo de body:
```json
{
    "name": "Matheus Lopes da Silva",
    "healthInsuranceCardId": "62dabab25d042a616cdbe249",
    "address": "Rua Ledinha, 17"
}
```

### REQUEST - (GET) 
> Para listar todos os pacientes

> GET - `localhost:3000/api/v1/patient`

### REQUEST - (GET) 
> Para listar um paciente por id

> GET - `localhost:3000/api/v1/patient/:patientId`


### REQUEST - (PUT)
> Para atualizar um paciente

> PUT - `localhost:3000/api/v1/patient/:patientId

Exemplo de body:
```json
{
    "name": "Matheus Lopes da Silva",
}
```


### REQUEST - (DELETE)

> Para deletar um paciente

> DELETE - `localhost:3000/api/v1/patient/:patientId`

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Postman](https://pt-br.reactjs.org/)
- [MongoDB](https://www.mongodb.com/pt-br)
- [Mogoose](https://mongoosejs.com/)
- [express](http://expressjs.com/)

## 👨‍💻 Autor

<div align=left>

 <table>
  <tr align=center>
    <th><strong> 💻Matheus Lopes </strong></th>
  </tr>
   <td>
      <a href="https://github.com/MathLopes1">
        <img width="168" height="140" src="https://avatars.githubusercontent.com/u/70352508?v=4" > <p align="left">
</p></a>
    <p align="center">Developer</p>
    </td>
  </tr>
</table>
</div>

<div align=left>
 
<br>
                 
---
 
## 📝 LICENÇA

Esse repositório está licenciado pela **MIT LICENSE**. Para mais informações detalhadas, leia o arquivo [LICENSE](./LICENSE) contido nesse repositório.