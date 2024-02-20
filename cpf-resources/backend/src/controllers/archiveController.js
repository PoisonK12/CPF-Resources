import { Archive } from "../models/Archive.js";

// Obtener todos los archivos de la DB
export const getArchives = async (req, res) => {
  try {
    const archives = await Archive.find();
    res.status(200).json(archives);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Ha ocurrido un error al obtener los archivos" });
  }
};

// Obtener un archivo de la DB por su ID
export const getArchiveById = async (req, res) => {
  try {
    const { id } = req.params;
    const archive = await Archive.findById(id);
    if (!archive) {
      return res.status(404).json({ message: "Archivo no encontrado" });
    }
    res.status(200).json(archive);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Ha ocurrido un error al obtener el archivo" });
  }
};

// Crear un nuevo archivo en la DB
export const createArchive = async (req, res) => {
  try {
    const { name, theme, fileUrl } = req.body;
    const newArchive = new Archive({ name, theme, fileUrl });
    const savedArchive = await newArchive.save();
    res.status(201).json(savedArchive);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ha ocurrido un error al crear el archivo" });
  }
};

// Modificar un archivo de la DB
export const updateArchive = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, theme, fileUrl } = req.body;
    const updatedArchive = await Archive.findByIdAndUpdate(
      id,
      { name, theme, fileUrl },
      { new: true }
    );
    if (!updatedArchive) {
      return res.status(404).json({ message: "Archivo no encontrado" });
    }
    res.status(200).json(updatedArchive);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Ha ocurrido un error al actualizar el archivo" });
  }
};

// Borrar un archivo de la DB
export const deleteArchive = async (req, res) => {
  try {
    const { id } = req.params;
    const archive = await Archive.findByIdAndDelete(id);
    if (!archive) {
      return res.status(404).json({ message: "Archivo no encontrado" });
    }
    res.status(200).json(archive);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Ha ocurrido un error al eliminar el archivo" });
  }
};