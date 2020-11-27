const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.onUserCreate = functions.firestore
  .document('Users/{userID}')
  .onCreate(async (snap, context) => {
    const values = snap.data();

    await db
      .collection('logging')
      .add({
        description: `question 5 was answered by user ${values.userName}`,
      });
  });


  exports.onUserUpdate = functions.firestore
  .document('Users/{userID}')
  .onUpdate(async (snap, context) => {
      const newValues = snap.after.data()

      const previousValues = snap.before.data()

      if(newValues.userName !== previousValues.userName) {
          const snapshot = await db.collection('reviews').where('userName', '==', previousValues.userName).get()

          let updatePromises = []
          snapshot.forEach(doc => {
              updatePromises.push(db.collection('reviews').doc(doc.id).update({ userName: newValues.userName}))
            })
            await Promise.all(updatePromises)
      }
    
  });