/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_295620630")

  // update collection data
  unmarshal({
    "name": "Activites"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_295620630")

  // update collection data
  unmarshal({
    "name": "Activitess"
  }, collection)

  return app.save(collection)
})
