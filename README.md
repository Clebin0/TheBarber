
# TheBarber

**TheBarber** é um sistema completo de agendamento para barbearias, oferecendo uma interface amigável e funcionalidades que facilitam o dia a dia de barbeiros e clientes. Ideal para profissionais autônomos e pequenos estabelecimentos que desejam otimizar o gerenciamento de seus horários.

![GitHub license](https://img.shields.io/github/license/Clebin0/TheBarber)

## ✂️ Funcionalidades

- [x] Cadastro de clientes
- [x] Agendamento de horários
- [x] Listagem de serviços disponíveis
- [x] Tela de login e autenticação
- [ ] Notificações por e-mail (em desenvolvimento)
- [ ] Dashboard administrativa (em desenvolvimento)

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [EJS](https://ejs.co/)
- [Bootstrap](https://getbootstrap.com/)

## 📦 Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/Clebin0/TheBarber.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd TheBarber
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Crie um arquivo `.env` com as seguintes variáveis:

   ```env
   MONGO_URI=mongodb://localhost/thebarber
   PORT=3000
   ```

5. Inicie o servidor:

   ```bash
   npm start
   ```

## 📸 Capturas de Tela

*Adicione aqui imagens ou GIFs demonstrando a interface e funcionalidades do sistema.*

## 🧪 Exemplos de Uso

- **Agendar um horário:**
  Envie um POST para `/appointments` com os dados do cliente e horário desejado.
- **Visualizar horários disponíveis:**
  Acesse `/schedule` para listar os horários livres.

## 🤝 Contribuindo

Contribuições são sempre bem-vindas!

1. Faça um fork do projeto
2. Crie uma branch com sua feature: `git checkout -b minha-feature`
3. Faça commit das suas alterações: `git commit -m 'feat: minha nova feature'`
4. Faça push para a sua branch: `git push origin minha-feature`
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📬 Contato

Desenvolvido por [Clebin0](https://github.com/Clebin0) — Entre em contato no GitHub para dúvidas ou sugestões!
