export async function guardarPuntos(puntuacion, id_juego) {
    const url = "http://127.0.0.1:5000/agregar_puntuacion";
  
    const id_usuario = localStorage.getItem("username") || "anónimo";
    console.log(puntuacion, id_juego, id_usuario)
    const data = {
      puntuacion: puntuacion,
      id_usuario: id_usuario,
      id_juego: id_juego
    };
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
  
      if (response.ok) {
        console.log("Puntuación agregada exitosamente");
      } else {
        console.error("Error al agregar puntuación:", response.status);
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  }
  