import { pool } from "../server.js";

// ✅ Obtener todos los cursos
export const getCursos = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM cursos ORDER BY id ASC");
    res.json(result.rows);
  } catch (error) {
    console.error("Error al obtener cursos:", error);
    res.status(500).json({ mensaje: "Error interno del servidor " });
  }
};

// ✅ Crear nuevo curso
export const createCurso = async (req, res) => {
  try {
    const { titulo, descripcion, url_video, tipo } = req.body;

    if (!titulo) {
      return res.status(400).json({ mensaje: "El título es obligatorio " });
    }

    const result = await pool.query(
      "INSERT INTO cursos (titulo, descripcion, url_video, tipo) VALUES ($1, $2, $3, $4) RETURNING *",
      [titulo, descripcion, url_video, tipo || "gratis"]
    );

    res.status(201).json({
      mensaje: "Curso creado exitosamente ",
      curso: result.rows[0],
    });
  } catch (error) {
    console.error("Error al crear curso:", error);
    res.status(500).json({ mensaje: "Error interno del servidor " });
  }
};

// ✅ Actualizar curso existente
export const updateCurso = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, descripcion, url_video, tipo } = req.body;

    const result = await pool.query(
      "UPDATE cursos SET titulo=$1, descripcion=$2, url_video=$3, tipo=$4 WHERE id=$5 RETURNING *",
      [titulo, descripcion, url_video, tipo, id]
    );

    if (result.rowCount === 0)
      return res.status(404).json({ mensaje: "Curso no encontrado " });

    res.json({ mensaje: "Curso actualizado ✅", curso: result.rows[0] });
  } catch (error) {
    console.error("Error al actualizar curso:", error);
    res.status(500).json({ mensaje: "Error interno del servidor " });
  }
};

// ✅ Eliminar curso
export const deleteCurso = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM cursos WHERE id = $1", [id]);

    if (result.rowCount === 0)
      return res.status(404).json({ mensaje: "Curso no encontrado " });

    res.json({ mensaje: "Curso eliminado " });
  } catch (error) {
    console.error("Error al eliminar curso:", error);
    res.status(500).json({ mensaje: "Error interno del servidor " });
  }
};
