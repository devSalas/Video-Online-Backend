# documentacion de la api

### base url:
```
http://localhost:3001 
```

>## videos
## obtener todos los videos
### metodo:
```http
get: /videos
```
### respuesta:
```json
{
	"status": true,
	"videos": [
		{
			"_id": "6413ca4c15d634c50a200b2e",
			"title": "La Rana",
			"description": "La tranquilidad que esta proyecta es increible",
			"like": true,
			"url": "https://res.cloudinary.com/dzlog8uxo/video/upload/v1668809492/dev/Rana_hoof1v.mp4",
			"__v": 0
		}
	]
}
```
## obtener video por id
### metodo:
```http
get: /videos/$id
```
### respuesta:
```json
{
	"status": true,
	"video": {
		"_id": "6413ca4c15d634c50a200b2e",
		"title": "La Rana",
		"description": "La tranquilidad que esta proyecta es increible",
		"like": true,
		"url": "https://res.cloudinary.com/dzlog8uxo/video/upload/v1668809492/dev/Rana_hoof1v.mp4",
		"__v": 0
	}
}
```

>## Comentarios:

## obtener comentarios
obtener todo los comentarios de un video pasar el id del video por el body
### metodo:
```http
get: /comments
```
### body:
```json
{
	"id_video":12
}
```
### respuesta:
```json
[
	{
		"_id": "6425beec03b2317d1f6d4111",
		"comentario": "nuevo hola",
		"id_usuario": "123456",
		"id_video": "12",
		"createdAt": "2023-03-30T16:55:08.543Z",
		"updatedAt": "2023-03-30T17:05:39.277Z"
	}
]
```
## añadir comentario

### metodo:
```http
post: /comments
```
### body:
```json
{
    "comentario":"otro comentario",
    "id_usuario":"123456",
    "id_video":"12"
}
```
### respuesta:
```json
{
	"comentario": "otro comentario",
	"id_usuario": "123456",
	"id_video": "12",
	"_id": "6425c0f77cde28df55ddf513",
	"createdAt": "2023-03-30T17:03:51.350Z",
	"updatedAt": "2023-03-30T17:03:51.350Z"
}
```
## editar comentario

### metodo:
```http
put: /comments
```
### body:
```json
{
	"id":"6425beec03b2317d1f6d4111",
	"id_usuario":"123456",
	"comentario": "nuevo comentario"
}
```
### respuesta:
```json
{
	"_id": "6425beec03b2317d1f6d4111",
	"comentario": "nuevo comentario",
	"id_usuario": "123456",
	"id_video": "12",
	"createdAt": "2023-03-30T16:55:08.543Z",
	"updatedAt": "2023-03-30T17:05:39.277Z"
}
```
## eliminar comentario

### metodo:
```http
delete: /comments
```
### body:
```json
{
	"id":"6425c0f77cde28df55ddf513",
	"id_usuario":"123456"
}
```
### respuesta:
```json
"comentario eliminado"
```