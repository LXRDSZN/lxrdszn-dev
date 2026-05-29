#!/bin/bash

# Script para desarrollo con hot reload usando build + watch

echo "🚀 Iniciando desarrollo con build..."

# Función para manejar Ctrl+C
cleanup() {
    echo "🛑 Deteniendo procesos..."
    kill $BUILD_PID $SERVER_PID 2>/dev/null
    exit 0
}

trap cleanup INT TERM

# Build inicial
npm run build

# Iniciar servidor en background
npm start &
SERVER_PID=$!

echo "✅ Servidor iniciado en http://localhost:3000"
echo "📝 Editando archivos se reconstruirá automáticamente"
echo "🔄 Presiona Ctrl+C para detener"

# Watch para cambios
while true; do
    inotifywait -r -e modify,create,delete app/ public/ 2>/dev/null && {
        echo "🔨 Detectado cambio, reconstruyendo..."
        npm run build
        kill $SERVER_PID 2>/dev/null
        npm start &
        SERVER_PID=$!
        echo "✅ Servidor actualizado"
    }
done
