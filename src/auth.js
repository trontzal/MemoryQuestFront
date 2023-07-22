
export function estaAutenticado() {
    const token = localStorage.getItem("token");
    return token !== null; 
}
  
export function obtenerUsuario() {
    const usuario = localStorage.getItem("username");
    return usuario;
}
  