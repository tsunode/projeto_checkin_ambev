# Projeto Check-in AMBEV

![npm](https://img.shields.io/npm/v/react-native?label=react-native)
[![node version](https://img.shields.io/node/v/react-native)](https://img.shields.io/node/v/react-native)
![npm](https://img.shields.io/npm/v/react-navigation?label=react-native-navigation)
![GitHub contributors](https://img.shields.io/github/contributors-anon/tsunodajapa/projeto_sextou)

#### Este projeto visa atrair maior público de consumidores AMBEV para os bares, restaurante e afins.

## Requisitos de instalação
> Como se trata de uma aplicação em desenvolvimento para o Mega Hack 3.0, o aplicativo ainda não está disponível na PlayStore/AppleStore

- Android >= 6.0 ou IOS >= 10.0
- React-Native >= 6.2
- npm >= 6.0.0
- node >= 10

## Como utilizar

### Servidor 

#### Acesse o diretório do servidor
```
cd server
```

#### Execute o comando para instalações de dependências do servidor:

```
npm install
```

#### Para criação do banco de dados via migration:

```
knex migrate:latest --knexfile knexfile.ts migrate:latest
```

#### Para insersts no banco pré-definidos:

```
knex --knexfile knexfile.ts seed:run
```

#### Iniciar o servidor:
> É necessário manter o servidor ativo, para que o mobile consiga processar as informações

```
npm rum api
```

### Mobile

#### Acesse o diretório do mobile
```
cd mobile
```

#### Execute o comando para instalações de dependências do mobile:
```
npm install
```

> Altere a baseURL em ./src/services/api.ts 

#### Com o celular plugado no PC, utilize o comando:
> É necessário ativar o modo de depuração do celular

##### Android
```
npm run android
```
ou

##### IOS
```
npm run ios
```
