const propiedades = require('../modules/propiedades.json')

const get = function (req, res) {
  let arrendadores = propiedades.filter((propiedad) => {
    return propiedad.arrendador != ''
  })
  return res.json(arrendadores)
}
const getById = function (req, res) {
  const { name } = req.params

  let arrendadores = propiedades.filter((propiedad) => {
    return propiedad.arrendador == name
  })

  return res.json(arrendadores)
}

const update = function (req, res) {
  const { id } = req.params

  for (let index = 0; index < propiedades.length; index++) {
    const propiedad = propiedades[index]
    if (propiedad.idCastral == id) {
      propiedad.Descripcion = req.body.Descripcion
      propiedad.arrendador = req.body.arrendador
      propiedad.propietarios = req.body.propietarios
      return res.json(propiedad)
    } else if (index + 1 == propiedades.length) {
      return res.status(500).json({ Error: 'No se encontro el id' })
    }
  }
}
const deleteElement = function (req, res) {
  const { name } = req.params
  const { id } = req.params
  for (let index = 0; index < propiedades.length; index++) {
    const propiedad = propiedades[index]
    if (propiedad.arrendador == name && propiedad.idCastral == id) {
      propiedad.arrendador = ''
      return res.json(propiedad)
    } else if (index + 1 == propiedades.length) {
      return res
        .status(500)
        .json({ Error: 'No se encontro el nombre del arrendador' })
    }
  }
}

module.exports = get
module.exports = getById
module.exports = update
module.exports = deleteElement
