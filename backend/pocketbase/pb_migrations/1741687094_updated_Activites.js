/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_295620630")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "select1972007657",
    "maxSelect": 1,
    "name": "type_activite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "animation",
      "exposition",
      "atelier"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_295620630")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "select1972007657",
    "maxSelect": 1,
    "name": "type_activite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "animation",
      "exposition"
    ]
  }))

  return app.save(collection)
})
