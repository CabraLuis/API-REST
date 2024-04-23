# JSON Web Token

Estàndar basado en JSON para generar un token para autenticar a un usuario, comprueba que la comunicaciòn entre cliente-servidor sea vàlida segura.

```
---------                           --------
|       | ---POST user/password---> |      | 1. Validacion de credenciales
|Cliente| <-----HTTP 200----------- |Server| 2. Generacion de token
|       | --PETICIONES CON TOKEN--> |      | 3. Validacion de token
---------                           --------
```

## Composicion

1. Header: Base64

```
{
    "alg":"H256",
    "typ":"jwt"
}
```

2. Payload / Claims: Base64

```
{
    "exp":<tiempo expiracion>,
    "iss":<quien emitio el jwt>
}
```

3. Signature: Base64

```
(HEADER PAYLOAD) FIRMAR
```

openssl genrsa -out privada.pem 2048
openssl rsa -in privada.pem -outform PEM -pubout -out publica.pem
