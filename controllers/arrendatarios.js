const propiedades = require('../modules/propiedades.json')

const get = () => {
  let arrendadores = propiedades.filter((propiedad) => {
    return propiedad.arrendador != ''
  })
  return arrendadores
}
let getById = (name) => {
  let arrendadores = propiedades.filter((propiedad) => {
    return propiedad.arrendador == name
  })

  return arrendadores
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
const deleteElement = (id, name) => {
  for (let index = 0; index < propiedades.length; index++) {
    const propiedad = propiedades[index]
    if (propiedad.arrendador == name && propiedad.idCastral == id) {
      propiedad.arrendador = ''
      return propiedad
    } else if (index + 1 == propiedades.length) {
      return { Error: 'No se encontro el nombre del arrendador' }
    }
  }
}
module.exports = {
  get,
  getById,
  update,
  deleteElement,
}
