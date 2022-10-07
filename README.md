
# Gestión de pedidos

Es una API hecha para un desafio técnico en el que se ha aplicado
arquitectura hexagonal y DDD (Domain-Driven Design).






## Ejecución en local

Clonar proyecto

```bash
  git clone https://link-to-project
```

Ir a la carpeta del proyecto

```bash
  cd my-project
```

Instalar dependencias

```bash
  npm install
```

Iniciar servidor

```bash
  npm run start
```


## Uso de API

#### Añadir producto

```http
  POST /order/addProduct
```

```bash
  Body Params: 

  {
    orderId: number,
    product: {
        number: number,
        name: string,
        price: number
    },
    quantity: number
  }
```

#### Obtener pedido

```http
  GET /order/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id del pedido       |


## Tech Stack

**Server:** Node, Express, TypeScript, Jest (testing)
