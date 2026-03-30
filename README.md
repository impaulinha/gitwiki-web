<h1 align="center">
  🔍 <a href="#" alt="Nome do Projeto">GitWiki</a> 🔍
</h1>

<p align="center">
  <img alt="Tamanho do repositório" src="https://img.shields.io/github/repo-size/impaulinha/gitwiki-web">
  <img alt="Licença" src="https://img.shields.io/github/license/impaulinha/gitwiki-web">
  <img alt="Last commit" src="https://img.shields.io/github/last-commit/impaulinha/gitwiki-web">
</p>

---

## 📑 Índice

<p align="center">
  <a href="#-sobre">📌 Sobre</a> • 
  <a href="#-layout">📸 Layout</a> • 
  <a href="#️-tecnologias">🛠️ Tecnologias</a> • 
  <a href="#-como-executar">🚀 Como executar</a> • 
  <a href="#-licença">📝 Licença</a> • 
  <a href="#-autora">👩🏻‍💻 Autora</a>
</p>

---

## 📌 Sobre

O **GitWiki** é uma aplicação Single Page Application (SPA) desenvolvida para facilitar a busca e visualização de repositórios do GitHub em uma interface limpa e organizada. Este projeto foi desenvolvido como parte de um desafio prático de curso da [DIO](https://www.dio.me/).

A aplicação permite que o usuário pesquise qualquer repositório público do GitHub informando o caminho `usuario/repositorio`. Os dados são consumidos em tempo real da API oficial do GitHub e listados em cards interativos.

Funcionalidades:
- **Busca em Tempo Real:** Localiza repositórios específicos via API.
- **Listagem Inteligente:** Exibe informações relevantes como autor, descrição, estrelas e forks.
- **Prevenção de Duplicados:** O sistema verifica se o repositório já está na lista antes de adicioná-lo.
- **Gerenciamento de Lista:** Opção de remover itens da listagem com um clique.
- **Acesso Direto:** Links integrados para abrir o repositório original no GitHub.
- **Estado Vazio:** Feedback visual amigável quando não há buscas realizadas.

---

## 📸 Layout

Abaixo, a interface da aplicação:

| Aplicação |
<img width="1365" height="614" alt="repo-home" src="https://github.com/user-attachments/assets/02905c4b-e4d3-48d7-baea-1c5cd186a8a6" />
<img width="1364" height="612" alt="repo-list" src="https://github.com/user-attachments/assets/14c09dcf-2adc-47ce-b95e-9119cf300144" />


---

## 🛠️ Tecnologias

As seguintes tecnologias foram utilizadas no projeto:

- [React](https://react.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Styled-components](https://styled-components.com/)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Github API](https://docs.github.com/en/rest)

---

## 🚀 Como executar

### 📋 Pré-requisitos

É necessário que você tenha instalado em sua máquina:

- [Node](https://nodejs.org/en/)

Você pode seguir o passo a passo disponível na [documentação](https://vite.dev/guide/) do Vite, onde há instruções que vão desde a instalação dos pré-requisitos até a execução do aplicativo.

### ⚙️ Rodando o aplicativo

Se já possui todos os pré-requisitos instalados, siga os seguintes comandos:

```bash
# Clone este repositório
$ git clone https://github.com/impaulinha/gitwiki-web.git
# Acesse a pasta do projeto 
$ cd gitwiki-web
```

Para rodar o projeto:

### `NPM`

``` bash
# Instala as dependências necessárias
$ npm install
# Executa a aplicação
$ npm run dev
```

A aplicação será aberta localmente. 

> Acesse http://localhost:... em seu navegador para visualizá-la.

---

---

## 📝 Licença

Este projeto esta sob a licença [MIT](./LICENSE).

---

## 👩🏻‍💻 Autora

Feito com ❤️ e dedicação por Ana Paula 😊. Entre em contato 👇

[![Linkedin Badge](https://img.shields.io/badge/-Paulinha-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/tgmarinho/)](https://www.linkedin.com/in/anapaula-aguiar/)
[![Gmail Badge](https://img.shields.io/badge/-anaaguiar20016@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:tgmarinho@gmail.com)](mailto:anaaguiar20016@gmail.com)

- **Ana Paula Aguiar** - _Desenvolvedora Mobile_ - [impaulinha](anapaulaaguiar.dev)

---
