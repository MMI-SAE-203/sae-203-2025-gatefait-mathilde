/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_295620630")

  // remove field
  collection.fields.removeById("relation3353481431")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_295620630")

  // add field
  collection.fields.addAt(8, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1569729562",
    "hidden": false,
    "id": "relation3353481431",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "invite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
