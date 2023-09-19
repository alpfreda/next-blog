import { ServiceAccount, cert, getApps, initializeApp } from 'firebase-admin/app'
import { DocumentData, Filter, getFirestore } from 'firebase-admin/firestore'

function initializeFirebaseApp(): ReturnType<typeof initializeApp> {
  const alreadyCreatedApps = getApps()

  if (alreadyCreatedApps.length === 0) {
    return initializeApp({
      credential: cert({
        type: process.env.FIREBASE_TYPE,
        project_id: process.env.FIREBASE_PROJECT_ID,
        private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
        private_key: JSON.parse(process.env.FIREBASE_PRIVATE_KEY || '').privateKey,
        client_email: process.env.FIREBASE_CLIENT_EMAIL,
        client_id: process.env.FIREBASE_CLIENT_ID,
        auth_uri: process.env.FIREBASE_AUTH_URI,
        token_uri: process.env.FIREBASE_TOKEN_URI,
        auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
        client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
        universe_domain: process.env.FIREBASE_UNIVERSE_DOMAIN,
      } as ServiceAccount),
    })
  }

  return alreadyCreatedApps[0]
}

const firebaseApp = initializeFirebaseApp()

const db = getFirestore(firebaseApp)

export const list = async (collectionName: string, limit: number = 1000) => {
  try {
    const dataRef = db.collection(collectionName)
    const querySnapshot = await dataRef.limit(limit).get()

    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  } catch (err) {
    console.error('Error listing documents:', err)
    throw err
  }
}

export const get = async (collectionName: string, conditions: Filter[] = []) => {
  try {
    let queryRef: DocumentData = db.collection(collectionName)

    conditions.forEach(condition => {
      queryRef = queryRef.where(condition)
    })

    const querySnapshot = await queryRef.get()

    if (querySnapshot.docs.length > 0) {
      return { id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() }
    } else {
      return null
    }
  } catch (err) {
    console.error('Error get document:', err)
    throw err
  }
}

export const getById = async (collectionName: string, id: string) => {
  try {
    const queryRef: DocumentData = db.collection(collectionName).doc(id)

    const doc = await queryRef.get()

    if (doc.exists) {
      return { id: doc.id, ...doc.data() }
    } else {
      return null
    }
  } catch (err) {
    console.error('Error get by id document:', err)
    throw err
  }
}

export const add = async (collectionName: string, body: any) => {
  try {
    const dataRef = db.collection(collectionName)
    const querySnapshot = await dataRef.add(body)
    return querySnapshot.id
  } catch (err) {
    console.error('Error adding documents', err)
    throw err
  }
}

export const update = async (collectionName: string, id: string, body: any) => {
  try {
    const dataRef = db.collection(collectionName).doc(id)
    const querySnapshot = await dataRef.update(body)
    return querySnapshot
  } catch (err) {
    console.error('Error updating documents:', err)
    throw err
  }
}
