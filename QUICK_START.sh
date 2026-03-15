#!/bin/bash

# 🚀 QUICK START - Proyecto Psicóloga Landing Page
# Este script automatiza la instalación y ejecución inicial

set -e  # Exit on error

echo "🧠 Psicóloga Landing Page - Quick Start"
echo "========================================="
echo ""

# Verificar Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado. Descargalo desde https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js detectado: $(node --version)"
echo "✅ npm detectado: $(npm --version)"
echo ""

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

echo ""
echo "✅ Dependencias instaladas correctamente"
echo ""

# Verificar env.local
if [ ! -f .env.local ]; then
    echo "⚙️  Creando archivo .env.local..."
    cp .env.local.example .env.local
    echo "⚠️  IMPORTANTE: Edita .env.local con tu número de WhatsApp y dominio"
fi

echo ""
echo "✅ Configuración completada"
echo ""

# Ofercer opciones
echo "Elige qué deseas hacer:"
echo "1) Ejecutar en desarrollo (npm run dev)"
echo "2) Hacer build de producción (npm run build)"
echo "3) Ejecutar linting (npm run lint)"
echo "4) Salir"
echo ""
read -p "Selecciona una opción (1-4): " option

case $option in
    1)
        echo ""
        echo "🚀 Iniciando servidor de desarrollo..."
        echo "📍 Abre http://localhost:3000 en tu navegador"
        echo ""
        npm run dev
        ;;
    2)
        echo ""
        echo "🔨 Compilando para producción..."
        npm run build
        echo ""
        echo "✅ Build completado"
        echo "Para ejecutar: npm run start"
        ;;
    3)
        echo ""
        echo "🔍 Ejecutando linting..."
        npm run lint
        ;;
    4)
        echo "👋 Hasta luego"
        exit 0
        ;;
    *)
        echo "❌ Opción no válida"
        exit 1
        ;;
esac
