/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3295370174")

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "date631370154",
    "max": "",
    "min": "",
    "name": "date_projection",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3295370174")

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "date631370154",
    "max": "",
    "min": "",
    "name": "date_programmation",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
})
