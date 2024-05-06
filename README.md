# Lotery Results Frontend

## Descripción de la Estructura de Respuesta

### `status`

- Indica si la respuesta del servidor es exitosa o si hubo algún error, útil para el manejo de errores en el cliente.

### `timestamp`

- Marca de tiempo cuando se generó la respuesta; útil para validar la actualidad de los datos.

### `loterias`

- Un arreglo de objetos, cada uno representando una lotería diferente.
  - `id`: Un identificador único para cada lotería, útil para referencias internas o enlaces dinámicos.
  - `nombre`: El nombre visible de la lotería.
  - `horario`: Puede ser "matutino", "vespertino" o "nocturno", representando el horario del sorteo.
  - `resultados`: Un arreglo que puede contener uno o varios objetos de resultado, permitiendo múltiples resultados históricos si es necesario.
    - `fecha`: La fecha del sorteo.
    - `numeros`: Un arreglo de números que fueron sorteados.
    - `extra`: Un número extra o especial, si aplica.
    - `premioMayor`: El monto del premio mayor para ese sorteo.

## EJEMPLO

```json
{
  "status": "success",
  "timestamp": "2024-04-04T12:00:00Z",
  "loterias": [
    {
      "id": "loto",
      "nombre": "Loto",
      "horario": "nocturno",
      "resultados": [
        {
          "fecha": "2024-04-03",
          "numeros": [5, 12, 23, 34, 55, 67],
          "extra": "23",
          "premioMayor": "5000000"
        }
      ]
    },
    {
      "id": "quinielaPale",
      "nombre": "Quiniela Palé",
      "horario": "matutino",
      "resultados": [
        {
          "fecha": "2024-04-03",
          "numeros": [8, 15, 22],
          "premioMayor": "500000"
        }
      ]
    },
    {
      "id": "loteka",
      "nombre": "Loteka",
      "horario": "vespertino",
      "resultados": [
        {
          "fecha": "2024-04-03",
          "numeros": [4, 18, 29, 36],
          "premioMayor": "200000"
        }
      ]
    }
  ]
}
```
