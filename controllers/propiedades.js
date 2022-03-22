//Obtenemos los datos de un json (Simulamos la db)
const propiedades = require('../modules/propiedades.json')

let get = () => {
  return propiedades
}

let getById = (id) => {
  for (let index = 0; index < propiedades.length; index++) {
    const propiedad = propiedades[index]
    if (propiedad.idCastral == id) {
      return propiedad
    } else if (index + 1 == propiedades.length) {
      return { Error: 'No se encontro el id' }
    }
  }
}

let create = (nuevaPropiedad) => {
  propiedades.push(nuevaPropiedad)
  return nuevaPropiedad
}

let update = (id, body) => {
  for (let index = 0; index < propiedades.length; index++) {
    const propiedad = propiedades[index]
    if (propiedad.idCastral == id) {
      propiedad.Descripcion = body.Descripcion
      propiedad.arrendador = body.arrendador
      propiedad.propietarios = body.propietarios
      return propiedad
    } else if (index + 1 == propiedades.length) {
      return { Error: 'No se encontro el id' }
    }
  }
}

let deleteElement = (id) => {
  for (let index = 0; index < propiedades.length; index++) {
    const propiedad = propiedades[index]
    if (propiedad.idCastral == id) {
      propiedades.splice(index, 1)
      return propiedad
    } else if (index + 1 == propiedades.length) {
      return { Error: 'No se encontro el id' }
    }
  }
}

module.exports = {
  get,
  getById,
  create,
  update,
  deleteElement,
}
