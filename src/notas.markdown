# Backend
- npm i -y
- npm install express
- agregar "type":"module" en package.json
- npm install nodemon -D para reiniciar servidor
-  escribir en scripts de package "dev": "nodemon src/index.js
- ahora se puede usar npm run dev y al hacer ctrl S, se reinicia
- npm install morgan para ver peticiones que llegan al backend por consola
- npm i mongoose para mongodb
- En db.js nos conectamos a mongodb
- creamos los modelos o schemas en models.js y exportamos para usarlos fuera de ese archivo
- creamos rutas con {router} de express en auth.routes.js y para que no crezca mucho el codigo ahi hacemos las funciones en controllers
- en auth.controller.js 
- para poder usar req.body usamos un middleware en app.js app.use(express.json())
- podemos usar la extension de mongodb en vscode, en documents vemos lo que se va agregando
- npm i bcryptjs para encriptar contraseñas
- npm i jsonwebtoken para generar tokens y asi validar que un usuario esta loggeado, es decir que tenga autorizacion para ver ciertas vistas e info: Ademas esa parte del codigo la guardamos en libs porque se puede reutilizar en otras partes.

## 🔹 Flujo completo en palabras simples del JWT [JasonWebToken]

1. **Usuario se registra o inicia sesión** → se crea un JWT y se lo entregamos (cookie o header).

2. **Usuario navega por la app** → cada vez que pide algo, manda su JWT.

3. **Servidor recibe la petición** → valida el JWT:
   - ¿Es válido?
   - ¿No está expirado?
   - ¿Corresponde a un usuario real?

4. **Si todo bien** → lo dejamos entrar a rutas protegidas (ej: “/compras”, “/perfil”).

---

📌 **Resumiendo**:

- El **JWT** es tu **pulsera con sello único** para entrar en lugares restringidos.  
- La **cookie** es simplemente el “bolsillo” donde guardas esa pulsera para no tener que mostrar tu carnet cada vez.  
- Con eso, tu servidor sabe quién eres sin necesidad de guardar una sesión en memoria.

