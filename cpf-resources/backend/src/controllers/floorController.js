import Floor from "../models/Floor.js";

//Traer todos los pisos de la DB
export const getFloors = async (req, res) => {
  try {
    const floors = await Floor.find();
    res.status(200).json(floors);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Ha ocurrido un error al obtener los pisos" });
  }
};

//Traer un piso de la DB
export const getFloorById = async (req, res) => {
  try {
    const { id } = req.params;

    const floor = await Floor.findById(id);
    if (!floor) {
      return res.status(404).json({ message: "Piso no encontrado" });
    }
    res.status(200).json(floor);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Ha ocurrido un error al obtener el piso" });
  }
};

//Crear un nuevo piso en la DB
export const createFloor = async (req, res) => {
  try {
    const { name, img, color, product, myCollection } = req.body;

    const newFloor = new Floor({ name, img, color, product, myCollection });
    const savedFloor = await newFloor.save();

    res.status(201).json(savedFloor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ha ocurrido un error al crear el piso" });
  }
};

//Modificar un piso de la DB
export const updateFloor = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, img, color, product, myCollection } = req.body;

    const updatedFloor = await Floor.findByIdAndUpdate(
      id,
      { name, img, color, product, myCollection },
      { new: true }
    );
    if (!updatedFloor) {
      return res.status(404).json({ message: "Piso no encontrado" });
    }

    res.status(200).json(updatedFloor);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Ha ocurrido un error al actualizar el piso" });
  }
};

//Borrar un piso de la DB
export const deleteFloor = async (req, res) => {
  try {
    const { id } = req.params;
    const floor = await Floor.findByIdAndDelete(id);
    if (!floor) {
      return res.status(404).json({ message: "Piso no encontrado" });
    }
    res.status(200).json(floor);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Ha ocurrido un error al eliminar el piso" });
  }
};
