import { Comment } from "../models/comment";
import { Request, Response } from "express";

//obtener comentarios de un video
export const getComments = async (req: Request, res: Response) => {
  //obtener el id del video
  const { id_video } = req.body;

  //buscar el commentario por id
  const comentariosVideo = await Comment.find({ id_video });
  return res.json(comentariosVideo);
};

//crear un comentario
export const createComment = async (req: Request, res: Response) => {
  //obtener el id del usuario, y el id del video
  const { comentario, id_usuario, id_video } = req.body;

  //saber si el usuario existe

  //saber si el video existe

  //crear el comentario
  const newComentario = new Comment({
    comentario,
    id_usuario,
    id_video,
  });

  //guardar el comentario
  console.log(newComentario);
  const respuesta = await newComentario.save();

  //retornar el nuevo comentario
  return res.json(respuesta);
};

//editar un comentario
export const editComment = async (req: Request, res: Response) => {
  const { id, id_usuario, comentario } = req.body;

  const respuesta = await Comment.findByIdAndUpdate(
    { _id: id, id_usuario },
    { comentario },
    { new: true }
  );

  return res.json(respuesta);
};

//eliminar un comentario
export const removeComment = async (req: Request, res: Response) => {
  const { id, id_usuario } = req.body;

  await Comment.findByIdAndDelete({ _id: id, id_usuario });

  return res.json("comentario eliminado");
};
