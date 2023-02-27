export const guardarDatosEnLocalStorage = (clave, valor) => {
    localStorage.setItem(clave, valor);
    
}
export const obtenerDatosDeLocalStorage = (clave) => {
    const datos = localStorage.getItem(clave);
    if (datos) {
        return JSON.parse(datos);
    } else {
        return null;
    }
}