#!/bin/bash

# Parar em erros (cuidado no Git Bash, pode ser instável)
set -e

echo "🔧 Iniciando instalação completa..."

# Detecta sistema operacional
OS="$(uname -s)"

# Escolhe comando python
PYTHON_CMD="python3"
if [[ "$OS" == "MINGW"* || "$OS" == "MSYS"* ]]; then
  PYTHON_CMD="python"
fi

# Cria venv se não existir
if [ ! -d ".venv" ]; then
  echo "📦 Criando ambiente virtual Python..."
  $PYTHON_CMD -m venv .venv || {
    echo "❌ Erro ao criar venv. Instale o pacote python-venv."
    exit 1
  }
fi

# Ativa venv de forma cross-platform
echo "🐍 Ativando ambiente virtual Python..."
if [ -f ".venv/bin/activate" ]; then
  source .venv/bin/activate
elif [ -f ".venv/Scripts/activate" ]; then
  source .venv/Scripts/activate
else
  echo "❌ Arquivo de ativação não encontrado. Abortando."
  exit 1
fi

# Instala dependências Python
echo "📜 Instalando dependências do Django..."
pip install -r requirements.txt || {
  echo "❌ Falha ao instalar pacotes Python."
  exit 1
}

# Instala dependências Angular
echo "📁 Entrando na pasta do Angular (site/)..."
cd site

echo "📦 Instalando dependências do Angular (npm)..."
npm install || {
  echo "❌ Falha ao rodar npm install."
  exit 1
}

echo "✅ Tudo instalado com sucesso!"
