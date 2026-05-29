#!/bin/bash

# Script para renombrar y convertir imágenes a JPG optimizado

echo "🖼️  Iniciando conversión de imágenes..."

# Función para procesar carpeta (PNG y JPEG)
process_folder() {
    local folder=$1
    local prefix=$2
    
    echo ""
    echo "📁 Procesando: $folder"
    
    # Verificar si hay imágenes PNG o JPEG
    img_files=($(ls "$folder"/*.png "$folder"/*.jpeg 2>/dev/null | sort))
    
    if [ ${#img_files[@]} -eq 0 ]; then
        echo "   ⚠️  No se encontraron imágenes PNG/JPEG"
        return
    fi
    
    counter=1
    for img in "${img_files[@]}"; do
        new_name="$folder/${prefix}${counter}.jpg"
        
        echo "   🔄 Convirtiendo: $(basename "$img") → ${prefix}${counter}.jpg"
        
        # Convertir a JPG con calidad 85
        convert "$img" -quality 85 -sampling-factor 4:2:0 -strip "$new_name"
        
        if [ $? -eq 0 ]; then
            echo "   ✅ Convertido exitosamente"
            # Eliminar imagen original
            rm "$img"
            echo "   🗑️  Eliminado: $(basename "$img")"
        else
            echo "   ❌ Error al convertir: $(basename "$img")"
        fi
        
        ((counter++))
    done
}

# Procesar carpetas de proyectos
process_folder "public/projects/chatbot" "chatbot"
process_folder "public/projects/pentest" "pentest"
process_folder "public/projects/phish" "phish"
process_folder "public/projects/rrhh" "rrhh"
process_folder "public/projects/ducky" "ducky"

# Procesar carpeta de certificados
echo ""
echo "📁 Procesando: public/certificates/coderfy"

cert_files=($(ls public/certificates/coderfy/*.png public/certificates/coderfy/*.jpeg 2>/dev/null | sort))

if [ ${#cert_files[@]} -gt 0 ]; then
    # Contar cuántos JPG ya existen para continuar la numeración
    existing_jpgs=($(ls public/certificates/coderfy/cert*.jpg 2>/dev/null))
    counter=$((${#existing_jpgs[@]} + 1))
    
    for img in "${cert_files[@]}"; do
        new_name="public/certificates/coderfy/cert${counter}.jpg"
        
        echo "   🔄 Convirtiendo: $(basename "$img") → cert${counter}.jpg"
        
        # Convertir PNG/JPEG a JPG con calidad 85
        convert "$img" -quality 85 -sampling-factor 4:2:0 -strip "$new_name"
        
        if [ $? -eq 0 ]; then
            echo "   ✅ Convertido exitosamente"
            # Eliminar imagen original
            rm "$img"
            echo "   🗑️  Eliminado: $(basename "$img")"
        else
            echo "   ❌ Error al convertir: $(basename "$img")"
        fi
        
        ((counter++))
    done
else
    echo "   ⚠️  No se encontraron imágenes PNG/JPEG"
fi

echo ""
echo "✨ ¡Conversión completada!"
echo ""
echo "📊 Resumen de carpetas procesadas:"
ls -lh public/projects/*/*.jpg 2>/dev/null | awk '{print "   " $9 " (" $5 ")"}'
ls -lh public/certificates/*/*.jpg 2>/dev/null | awk '{print "   " $9 " (" $5 ")"}'
