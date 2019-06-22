export default [
    {
        method: 'GET',
        path:'/',
        handler: (request, h) => {

            return 'Master Database';
        }
    },
    {
      method: 'GET',
      path: '/{name}/{id}',
      async handler(request) {

          const db = request.mongo.db;
          const ObjectID = request.mongo.ObjectID;
          const {name, id} = request.params;

          try {
              const result = await db.collection(name).findOne({  _id: new ObjectID(id) });
              return result;
          }
          catch (err) {
              throw new Error(err);
          }
      }
  },
  {
    method: 'GET',
    path: '/{name}',
    async handler(request) {

        const db = request.mongo.db;
        const {name} = request.params;
        try {
            const result = await db.collection(name).find({}, {createdAt: 0, role: 0}).toArray();
            return result;
        }
        catch (err) {
          throw new Error(err);
        }
    }
}
]
