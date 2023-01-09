# Autenticação de dois fatores com TOTP

## [Speakeasy](https://www.npmjs.com/package/speakeasy)

[GitHub](https://github.com/speakeasyjs/speakeasy)

### Endpoints (Exemplos)

- **Gera segredo**

```http
POST http://localhost:3001/secret HTTP/1.1
```

- **Gera código OTP baseado em segredo**

```http
POST http://localhost:3001/generate HTTP/1.1
Content-Type: application/json

{
    "secret": "{{secret}}"
}
```

- **Valida código OTP a partir do segredo**

```http
POST http://localhost:3001/validate HTTP/1.1
Content-Type: application/json

{
    "secret": "{{secret}}",
    "token": "{{token}}"
}
```

## base32

- **Encode**

    ```sh
    echo 'test' | base32
    ```

- **Decode**

    ```sh
    echo 'ORSXG5AK' | base32 -d
    ```

## Referência

<https://www.thepolyglotdeveloper.com/2019/03/two-factor-authentication-totp-using-nodejs-speakeasy/>
