# 🌦️ Consulta del Clima - Node.js + Express

Aplicación web sencilla que permite al usuario consultar el clima actual de cualquier ciudad utilizando la API de [OpenWeatherMap](https://openweathermap.org/).

---

## 🚀 Funcionalidades

- Consulta de clima actual por ciudad
- Muestra:
  - Temperatura
  - Humedad
  - Velocidad del viento
  - Hora del amanecer y atardecer (convertido desde UNIX)
  - Ícono representativo del clima
- Uso de variables de entorno con `dotenv`
- Aplicación completa servida desde Node.js (sin Vite)

---

## 📁 Estructura del proyecto

```
clima-app-full/
├── public/
│   ├── index.html
│   ├── style.css
│   └── main.js
├── .env
├── server.js
└── package.json
```

---

## 🛠️ Requisitos previos

- Node.js instalado (versión 14 o superior)
- Una cuenta gratuita en [OpenWeatherMap](https://home.openweathermap.org/) para obtener tu API Key

---

## 🔧 Instalación

1. Clona este repositorio o descomprime el archivo `.zip`
2. Abre una terminal y navega a la carpeta del proyecto:

```bash
cd clima-app-full
```

3. Instala las dependencias:

```bash
npm install
```

---

## 🔑 Configura tu clave API

1. Abre el archivo `.env`
2. Reemplaza el valor por tu clave personal de OpenWeatherMap:

```env
API_KEY=tu_clave_real_aquí
```

---

## ▶️ Ejecutar la aplicación

Una vez instaladas las dependencias y configurada tu API Key, inicia el servidor:

```bash
npm start
```

Luego abre tu navegador en:

```
http://localhost:3000
```

---

## 🧪 Uso

1. Escribe el nombre de una ciudad (por ejemplo: `Bogotá`, `Madrid`, `Toronto`)
2. Haz clic en el botón **Buscar**
3. La app mostrará los datos del clima actual junto con un ícono relacionado.

---

## 🧰 Tecnologías usadas

- Node.js
- Express
- Axios
- Dotenv
- HTML5, CSS3, JavaScript (ES Modules)

---

## 📂 Créditos

- [OpenWeatherMap API](https://openweathermap.org/)
- Proyecto creado por **Daniela M.**

---

## 🛡️ Licencia

Este proyecto es de uso educativo y libre distribución. Puedes modificarlo y adaptarlo a tus necesidades.
