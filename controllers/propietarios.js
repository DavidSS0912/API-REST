//Obtenemos los datos de un json (Simulamos la db)
const propietarios = require('../modules/propietarios.json')

const get = function (req, res) {
  return res.json(propietarios)
}

const getById = function (req, res) {
  const { rfc } = req.params
  for (let index = 0; index < propietarios.length; index++) {
    const propietario = propietarios[index]
    if (propietario.rfc == rfc) {
      return res.json(propietario)
    } else if (index + 1 == propietarios.length) {
      return res.status(500).json({ Error: 'No se encontro el rfc' })
    }
  }
}

const create = function (req, res) {
  let nuevoPropietario = {
    rfc: req.body.rfc,
    nombre: req.body.nombre,
    propiedades: req.body.proiedades,
  }
  propietarios.push(nuevoPropietario)

  return res.json(nuevoPropietario)
}

const update = function (req, res) {
  const { rfc } = req.params

  for (let index = 0; index < propietarios.length; index++) {
    const propietario = propietarios[index]
    if (propietario.rfc == rfc) {
      propietario.nombre = req.body.nombre
      propietario.propiedades = req.body.propiedades
      return res.json(propietario)
    } else if (index + 1 == propietarios.length) {
      return res.status(500).json({ Error: 'No se encontro el rfc' })
    }
  }
}

const deleteElement = function (req, res) {
  const { rfc } = req.params
  for (let index = 0; index < propietarios.length; index++) {
    const propietario = propietarios[index]
    if (propietario.rfc == rfc) {
      propietarios.splice(index, 1)
      return res.json(propietario)
    } else if (index + 1 == propietarios.length) {
      return res.status(500).json({ Error: 'No se encontro el rfc' })
    }
  }
}

module.exports = get
module.exports = getById
module.exports = create
module.exports = update
module.exports = deleteElement
