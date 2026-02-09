# 🐾 PetConnect — Sistema de Login

Uma rede social fictícia para pets, desenvolvida como projeto de **Interação Humano-Computador (IHC)**, com foco em usabilidade e experiência do usuário.

## 📋 Descrição do Projeto

PetConnect é uma rede social simulada para pets que implementa um sistema completo de login funcional sem necessidade de banco de dados ou conexão com a internet. Toda a validação e autenticação acontece localmente no navegador.

### Funcionalidades
- **Login** com validação local (usuários pré-cadastrados: `teste@1234.com` / `1234`)
- **Cadastro** com validação em tempo real e indicador de força da senha
- **Recuperação de senha** simulada com feedback visual
- **Área logada** com feed fictício de posts de pets
- **Feedback** amigável e contextual em todas as ações

---

## 🎯 Análise das Metas de Usabilidade

### 1. Fácil de Lembrar
- Layout convencional de login que segue padrões amplamente reconhecidos
- Ícones intuitivos (patinha para pet, cadeado para senha, envelope para e-mail)
- Navegação previsível entre login, cadastro e recuperação de senha

### 2. Fácil de Entender
- Labels claras e descritivas em todos os campos
- Placeholders com exemplos reais (ex: "teste@1234.com")
- Mensagens de erro específicas e amigáveis com emojis contextuais
- Credenciais de teste visíveis na tela de login

### 3. Útil
- Validação instantânea previne envio de dados incorretos
- Indicador de força da senha ajuda a criar senhas seguras
- Feedback imediato em cada ação do usuário
- Modal de recuperação de senha funcional

### 4. Seguro (percepção do usuário)
- Toggle para mostrar/ocultar senha com ícone de olho
- Indicador visual de força da senha com 3 níveis (fraca/média/forte)
- Confirmação de senha no cadastro
- Ícone de cadeado nos campos de senha

### 5. Eficiente
- Poucos cliques para completar qualquer ação (login em 3 cliques)
- Formulários compactos sem campos desnecessários
- Transições suaves entre telas sem recarregamento
- Auto-login após cadastro bem-sucedido

---

## ✨ Análise das Metas de Experiência

### 1. Divertido
- **Emojis temáticos** em toda a interface (🐾 🐶 🐱 🐹)
- **Feed fictício** com posts humorísticos de pets
- **Botão de curtir** interativo com animação no coração
- **Patinhas flutuantes** decorativas no fundo da tela

### 2. Esteticamente Apreciável
- **Paleta suave** com tons de bege, lavanda e pêssego
- **Tipografia elegante** com Quicksand (títulos) e Nunito (corpo)
- **Cantos arredondados** e sombras sutis em todos os cards
- **Backdrop blur** para efeito de vidro fosco
- **Ícones Lucide** para consistência visual

### 3. Satisfatório
- **Toasts de sucesso** com mensagens positivas ao logar e cadastrar
- **Animação sutil** no botão ao clicar (active:scale-95)
- **Indicador de progresso** visual durante operações (loading spinner com patinha)
- **Feedback imediato** em validações em tempo real

### 4. Agradável
- **Animações suaves** em transições entre login/cadastro
- **Float animation** nos elementos decorativos
- **Hover effects** elegantes em botões e links
- **Visual acolhedor** com cores quentes e emojis amigáveis

### 5. Motivador
- **Mensagem de boas-vindas** personalizada: "Olá, [nome do pet]! 🐾"
- **Toast de despedida**: "Seu pet ficará esperando seu retorno 🐾"
- **Mensagem de saudade**: "[pet] sentiu saudades de você!"
- **Encorajamento** visual constante com linguagem positiva

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso |
|---|---|
| **React 18** | Biblioteca UI com hooks e componentes funcionais |
| **TypeScript** | Tipagem estática para segurança do código |
| **Tailwind CSS** | Estilização utilitária com design system customizado |
| **Shadcn/UI** | Componentes acessíveis (Card, Button, Input, Dialog, Toast) |
| **Lucide React** | Biblioteca de ícones consistente e leve |
| **Vite** | Build tool rápido para desenvolvimento |

---

## 🚀 Instruções de Execução Local

### Pré-requisitos
- Node.js 18+ instalado
- npm ou bun como gerenciador de pacotes

### Passos

```bash
# 1. Clone o repositório
git clone <url-do-repositorio>
cd petconnect

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev

# 4. Acesse no navegador
# http://localhost:8080
```

### Credenciais de Teste

| E-mail | Senha | Nome |
|---|---|---|
| `admin@1234.com` | `admin` | Administrador |
| `teste@1234.com` | `1234` | Usuário Teste |

Você também pode criar uma nova conta pela tela de cadastro.

---

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Dashboard.tsx           # Área logada com feed
│   ├── ForgotPasswordModal.tsx # Modal de recuperação
│   └── LoginForm.tsx           # Formulário de login
│   └── auth.ts                 # Lógica de autenticação local
├── pages/
│   └── Index.tsx               # Página principal com state management
└── index.css                   # Design system e animações
```
