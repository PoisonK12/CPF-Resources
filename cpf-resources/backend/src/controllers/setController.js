import Set from "../models/Set.js";

// Traer todos los sets de la DB
export const getSets = async (req, res) => {
  try {
    const sets = await Set.find();
    res.status(200).json(sets);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Ha ocurrido un error al obtener las colecciones" });
  }
};

// Traer un set de la DB
export const getSetById = async (req, res) => {
  try {
    const { id } = req.params;

    const set = await Set.findById(id);
    if (!set) {
      return res.status(404).json({ message: "Colección no encontrada" });
    }
    res.status(200).json(set);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Ha ocurrido un error al obtener la colección" });
  }
};

// Crear un nuevo set en la DB
export const createSet = async (req, res) => {
  try {
    const {
      name,
      img,
      description,
      plankSize,
      lockingSystem,
      bevel,
      plasticTile,
      generalCommercial,
      plankWidth,
      plankLength,
      thickness,
      boxesPerPallet,
      palletSqft,
      palletWeight,
      planksPerBox,
      sqftPerBox,
      boxWeight,
    } = req.body;

    const newSet = new Set({
      name,
      img,
      description,
      plankSize,
      lockingSystem,
      bevel,
      plasticTile,
      generalCommercial,
      plankWidth,
      plankLength,
      thickness,
      boxesPerPallet,
      palletSqft,
      palletWeight,
      planksPerBox,
      sqftPerBox,
      boxWeight,
    });

    const savedSet = await newSet.save();

    res.status(201).json(savedSet);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Ha ocurrido un error al crear la colección" });
  }
};

// Modificar un set de la DB
export const updateSet = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      img,
      description,
      plankSize,
      lockingSystem,
      bevel,
      plasticTile,
      generalCommercial,
      plankWidth,
      plankLength,
      thickness,
      boxesPerPallet,
      palletSqft,
      palletWeight,
      planksPerBox,
      sqftPerBox,
      boxWeight,
    } = req.body;

    const updatedSet = await Set.findByIdAndUpdate(
      id,
      {
        name,
        img,
        description,
        plankSize,
        lockingSystem,
        bevel,
        plasticTile,
        generalCommercial,
        plankWidth,
        plankLength,
        thickness,
        boxesPerPallet,
        palletSqft,
        palletWeight,
        planksPerBox,
        sqftPerBox,
        boxWeight,
      },
      { new: true }
    );

    if (!updatedSet) {
      return res.status(404).json({ message: "Colección no encontrada" });
    }

    res.status(200).json(updatedSet);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Ha ocurrido un error al actualizar la colección" });
  }
};

// Borrar un set de la DB
export const deleteSet = async (req, res) => {
  try {
    const { id } = req.params;
    const set = await Set.findByIdAndDelete(id);
    if (!set) {
      return res.status(404).json({ message: "Colección no encontrado" });
    }
    res.status(200).json(set);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Ha ocurrido un error al eliminar la colección" });
  }
};
