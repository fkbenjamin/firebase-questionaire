import fire from './fire';

const db = fire.firestore()
db.settings({timestampsInSnapshots: true})

export default db;
