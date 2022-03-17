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

let create = () => {
  let nuevaPropiedad = {
    idCastral: req.body.idCastral,
    Descripcion: req.body.Descripcion,
    arrendador: req.body.arrendador,
    propietarios: req.body.propietarios,
  }
  propiedades.push(nuevaPropiedad)
  return nuevaPropiedad
}

let update = () => {
  const { id } = req.params

  for (let index = 0; index < propiedades.length; index++) {
    const propiedad = propiedades[index]
    if (propiedad.idCastral == id) {
      propiedad.Descripcion = req.body.Descripcion
      propiedad.arrendador = req.body.arrendador
      propiedad.propietarios = req.body.propietarios
      return propiedad
    } else if (index + 1 == propiedades.length) {
      return { Error: 'No se encontro el id' }
    }
  }
}

let deleteElement = () => {
  const { id } = req.params
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
