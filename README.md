# 📰 FastNews

> Aplicação web voltada à divulgação de notícias escolares e conteúdo educacional relevante para estudantes de nível médio e fundamental.

[![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)](https://shields.io/)
[![License](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)
[![Angular](https://img.shields.io/badge/frontend-Angular-red)](https://angular.io/)
[![Django](https://img.shields.io/badge/backend-Django-darkgreen)](https://www.djangoproject.com/)
[![MySQL](https://img.shields.io/badge/database-MySQL-blue)](https://www.mysql.com/)

## 📑 Sumário

- [📌 Visão Geral](#-visão-geral)
- [🧱 Arquitetura Geral](#-arquitetura-geral)
- [✅ Requisitos](#-requisitos)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [🚀 Como Executar o Projeto](#-como-executar-o-projeto)
- [👥 Integrantes](#-integrantes)
- [ℹ️ Informações Gerais](#ℹ️-informações-gerais)

---

## 📌 Visão Geral

O projeto **FastNews** foi criado com o objetivo de auxiliar e incentivar estudantes na preparação para concursos e vestibulares como ENEM, ESA, SSA, entre outros. A proposta é oferecer um ambiente dinâmico e informativo, com foco em conteúdos educacionais, atualizações relevantes e notícias voltadas à rotina escolar, promovendo o engajamento dos alunos com temas importantes para seu desenvolvimento acadêmico.

## 🧱 Arquitetura Geral

- **Frontend**: [Angular](https://angular.io/) + [Bootstrap 5](https://getbootstrap.com/)
- **Backend**: [Django](https://www.djangoproject.com/) + [Django REST Framework](https://www.django-rest-framework.org/)
- **Banco de Dados**: [MySQL](https://www.mysql.com/)
- **Serviços Externos**:
  - [ChatGPT](https://chat.openai.com/) (logo e ideias iniciais)
  - [Figma](https://www.figma.com/) (protótipos)
  - [Lottie](https://lottiefiles.com/) (animações)

---

## ✅ Requisitos

### Frontend

| Etapa de Produção | Tecnologia                          | Função                                   |
|-------------------|-----------------------------------|-----------------------------------------|
| 1                 | [ChatGPT](https://chat.openai.com/)            | Criação da logo e idealização do projeto |
| 2                 | [Figma](https://www.figma.com/)                  | Protótipos de interface                   |
| 3                 | [Lottie](https://lottiefiles.com/)                | Animações visuais                        |
| 4                 | [Angular](https://angular.io/)                   | Desenvolvimento do frontend              |
| 5                 | [Bootstrap 5](https://getbootstrap.com/)           | Estilização responsiva                   |

### Backend

| Etapa de Produção | Tecnologia                          | Função                                           |
|-------------------|-----------------------------------|-------------------------------------------------|
| 1                 | [Django](https://www.djangoproject.com/)                   | Desenvolvimento do backend e estrutura da API   |
| 2                 | [Django REST Framework](https://www.django-rest-framework.org/) | Criação e gerenciamento das rotas da API REST   |
| 3                 | [MySQL](https://www.mysql.com/)                         | Armazenamento e gestão dos dados do sistema     |
| 4                 | [Git/GitHub](https://github.com/)                      | Controle de versão e colaboração em equipe      |

---

## 🚀 Como Executar o Projeto

### 📌 Pré-requisitos

- Node.js (versão 18+)
- Angular CLI instalado
- Python 3.10+ com pip
- MySQL Server
- Gerenciadores de pacotes: `npm` e `pip`

```bash
# 1. Clone o repositório
git clone https://github.com/Junior010101/FastNews.git
cd FastNews

# 2. Instale as dependências
./install-all.sh

# 3. Execute as migrações do Django
python manage.py migrate

# 4. Inicie o servidor Django (backend)
python manage.py runserver

# 5. Vá para a pasta do frontend
cd site

# 6. Inicie o servidor Angular (frontend)
ng serve -o
```
## 👥 Integrantes

| Nome             | Função                    | GitHub                                           |
|------------------|---------------------------|--------------------------------------------------|
| Cauã Pontes      | Documentação / Organização | [@4pontes](https://github.com/4pontes)           |
| Diego Victor     | Desenvolvimento Frontend   | [@Diegobarros00](https://github.com/Diegobarros00)   |
| Marcelo Alves    | Desenvolvimento Frontend   | [@MarceloA1ves01](https://github.com/MarceloA1ves01) |
| Marcondes Paixão | Backend / Banco de Dados   | [@Junior010101](https://github.com/Junior010101) |

---

## ℹ️ Informações Gerais

- Nome do Projeto: FastNews  
- Data de Início: 21 de julho de 2025  
- Licença: MIT  
