#!/bin/bash

echo "🔧 Iniciando instalação completa..."

# Ativar ou criar o virtualenv
if [ ! -d ".venv" ]; then
  echo "📦 Criando ambiente virtual Python..."
  python3 -m venv .venv
fi

echo "🐍 Ativando o ambiente virtual Python..."
source .venv/bin/activate

echo "📜 Instalando dependências do Django..."
pip install -r requirements.txt

# Angular
echo "📁 Entrando na pasta do Angular (site/)..."
cd site

echo "📦 Instalando dependências do Angular (npm)..."
npm install

echo "✅ Tudo instalado com sucesso!"
