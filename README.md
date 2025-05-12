
# TheBarber

**TheBarber** é um sistema completo de agendamento para barbearias, oferecendo uma interface amigável e funcionalidades que facilitam o dia a dia de barbeiros e clientes. Ideal para profissionais autônomos e pequenos estabelecimentos que desejam otimizar o gerenciamento de seus horários.

![GitHub license](https://img.shields.io/github/license/Clebin0/TheBarber)
![GitHub last commit](https://img.shields.io/github/last-commit/Clebin0/TheBarber)
![Node.js Version](https://img.shields.io/badge/Node.js-16%2B-brightgreen)

---

## ✨ Motivação

Este projeto nasceu da necessidade de muitos barbeiros e pequenos salões que ainda gerenciam seus agendamentos de forma manual. O TheBarber visa trazer uma solução simples, prática e acessível para digitalizar esse processo.

---

## ✂️ Funcionalidades

- [x] Cadastro de clientes
- [x] Agendamento de horários
- [x] Listagem de serviços disponíveis
- [x] Tela de login e autenticação
- [ ] Notificações por e-mail (em desenvolvimento)
- [ ] Dashboard administrativa

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [EJS](https://ejs.co/)
- [Bootstrap](https://getbootstrap.com/)

---

## 🧱 Arquitetura do Projeto

```
.
├── controllers/        # Lógica de negócios
├── models/             # Modelos Mongoose
├── views/              # Templates EJS
├── routes/             # Definições de rotas
├── public/             # Arquivos estáticos
├── .env.example        # Exemplo de variáveis de ambiente
└── app.js              # Arquivo principal do servidor
```

---

## 📦 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Clebin0/TheBarber.git
   ```

2. Navegue até o diretório:
   ```bash
   cd TheBarber
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Configure as variáveis de ambiente:

   Crie um arquivo `.env` com base no `.env.example`:

   ```env
   MONGO_URI=mongodb://localhost/thebarber
   PORT=3000
   SESSION_SECRET=sua_chave_secreta
   ```

5. Inicie o servidor:
   ```bash
   npm start
   ```

---

## 🧪 Exemplos de Uso

- **Agendar um horário:**  
  Envie um POST para `/appointments` com os dados do cliente e horário desejado.

- **Visualizar horários disponíveis:**  
  Acesse `/schedule` para listar os horários livres.

---

## 🧪 Testes

*Em breve será adicionado suporte a testes unitários e de integração com Jest.*

---

## 📸 Capturas de Tela

*Adicione imagens das principais telas do sistema aqui.*

---

## ❓ FAQ

**Posso rodar em Windows/macOS?**  
Sim! O projeto é multiplataforma.

**É necessário criar banco de dados manualmente?**  
Não, o MongoDB criará as coleções automaticamente ao inserir os primeiros dados.

**Como alterar a porta do servidor?**  
Basta modificar a variável `PORT` no `.env`.

---

## 📌 Planejamento Futuro

- [ ] Integração com WhatsApp
- [ ] Exportar agendamentos em PDF
- [ ] Suporte a múltiplos barbeiros
- [ ] Sistema de pontuação para clientes fiéis

---

## 🌍 Deploy

Você pode rodar localmente ou fazer deploy em plataformas como [Render](https://render.com), [Railway](https://railway.app), [Heroku](https://heroku.com).

---

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch: `git checkout -b minha-feature`
3. Commit suas alterações: `git commit -m 'feat: minha nova feature'`
4. Faça push para a branch: `git push origin minha-feature`
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👤 Contato

Desenvolvido por [Clebin0](https://github.com/Clebin0)  
Entre em contato via GitHub para sugestões, bugs ou parcerias.

---

## 🙏 Créditos

Projeto inspirado em tutoriais de sistemas de agendamento com Node.js e EJS, com adaptações e melhorias próprias.
