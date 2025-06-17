
#!/bin/bash

echo "🔧 Iniciando instalação da API Yoobe V3..."

# Instalar dependências
npm install

# Verificar se .env existe
if [ ! -f .env ]; then
  echo "⚠️  Arquivo .env não encontrado. Por favor, copie de .env.example e preencha com suas chaves:"
  echo "cp .env.example .env"
else
  echo "✅ .env encontrado!"
fi

# Iniciar a API
echo "🚀 Iniciando servidor local..."
npm run dev
