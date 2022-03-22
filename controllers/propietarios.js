//Obtenemos los datos de un json (Simulamos la db)
const propietarios = require('../modules/propietarios.json')

let get = () => {
  return propietarios
}

let getById = (rfc) => {
  for (let index = 0; index < propietarios.length; index++) {
    const propietario = propietarios[index]
    if (propietario.rfc == rfc) {
      return propietario
    } else if (index + 1 == propietarios.length) {
      return { Error: 'No se encontro el rfc' }
    }
  }
}

let create = (nuevoPropietario) => {
  propietarios.push(nuevoPropietario)
  return nuevoPropietario
}

const update = (rfc, body) => {
  for (let index = 0; index < propietarios.length; index++) {
    const propietario = propietarios[index]
    if (propietario.rfc == rfc) {
      propietario.nombre = body.nombre
      propietario.propiedades = body.propiedades
      return propietario
    } else if (index + 1 == propietarios.length) {
      return { Error: 'No se encontro el rfc' }
    }
  }
}

let deleteElement = (rfc) => {
  for (let index = 0; index < propietarios.length; index++) {
    const propietario = propietarios[index]
    if (propietario.rfc == rfc) {
      propietarios.splice(index, 1)
      return propietario
    } else if (index + 1 == propietarios.length) {
      return { Error: 'No se encontro el rfc' }
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
