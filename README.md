# 🌟 FlorianApp

[![Python](https://img.shields.io/badge/python-3.8+-blue.svg)](https://www.python.org/downloads/)
[![Django](https://img.shields.io/badge/django-4.x-green.svg)](https://www.djangoproject.com/)
[![SQLite](https://img.shields.io/badge/database-sqlite3-blue.svg)](https://www.sqlite.org/)

## 📋 Descripción

FlorianApp es una aplicación web desarrollada con Django que proporciona una interfaz moderna y funcional para gestionar información y datos de manera eficiente. Esta aplicación está diseñada para ser escalable, segura y fácil de mantener.

## 🚀 Características Principales

- 📱 **Interfaz moderna**: Diseño responsive y amigable
- 📊 **Gestión de datos**: Sistema robusto de gestión de información
- 🔐 **Seguridad**: Implementación de autenticación y autorización
- 📚 **Documentación**: Código bien documentado y mantenible
- 🔄 **Despliegue sencillo**: Proceso de instalación y configuración intuitivo

## 🛠️ Tecnologías Utilizadas

- **Backend**: Python 3.8+, Django 4.x
- **Frontend**: HTML5, CSS3, JavaScript
- **Base de datos**: SQLite3
- **Entorno virtual**: venv
- **Gestión de archivos estáticos**: Django Static Files

## 📋 Requisitos Previos

- Python 3.8 o superior
- Git
- SQLite3
- Un editor de código (recomendado: VS Code o PyCharm)

## 🚀 Instalación

1. Clona el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
cd Producto_Digital
```

2. Crea y activa el entorno virtual:
```bash
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
```

3. Instala las dependencias:
```bash
pip install -r requirements.txt
```

4. Aplica las migraciones:
```bash
python manage.py migrate
```

5. Crea un superusuario (opcional):
```bash
python manage.py createsuperuser
```

6. Inicia el servidor de desarrollo:
```bash
python manage.py runserver
```

La aplicación estará disponible en `http://localhost:8000`

## 📁 Estructura del Proyecto

```
FlorianApp/
├── FlorianApp/           # Configuración del proyecto
├── Duvan/               # Aplicación principal
├── static/              # Archivos estáticos
├── templates/           # Plantillas HTML
├── manage.py            # Script de gestión de Django
└── venv/               # Entorno virtual
```

## 🤝 Contribución

¡Nos encantaría que contribuyas a FlorianApp! Por favor, sigue estos pasos:

1. Crea un Fork del proyecto
2. Crea una rama para tu característica (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## 📢 Contacto

- Email: [duvanfloriansalazar@gmail.com](mailto:duvanfloriansalazar@gmail.com)
- GitHub: @ANDRES-FLORIAN-SALAZAR

## 🎖️ Agradecimientos

- A todos los contribuidores
- A la comunidad Django
- A los usuarios que hacen que esto sea posible

> "La tecnología es la herramienta, el código es el lienzo, y tú eres el artista" - Equipo FlorianApp
