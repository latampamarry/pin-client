import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyCShwkdDed7LoWgXyuK7mjp98wy8-e-WoU",
    authDomain: "doc-collection-34aa3.firebaseapp.com",
    projectId: "doc-collection-34aa3",
    storageBucket: "doc-collection-34aa3.appspot.com",
    messagingSenderId: "91140673898",
    appId: "1:91140673898:web:1661a1215360b2f0d81513"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

export async function get(req) {

  let timeStamp = new Date().getTime();
  console.log(req)
  console.log(req.url.searchParams)
  try {

    let docref=await setDoc(doc(db, "click", timeStamp.toString()), {
      hostname: 'www.'+req.url.hostname,
        base_url: "auth/login",
        ref_id: req.url.searchParams.get('ref'),
        device: getUserDevice(req.request.agent),
        timestamp: timeStamp,
    });



    console.log(docref);
    return { body: { message: 'updated' } }
  } catch (error) {
    console.log(error)
    return { body: { message: 'error',error:error } }
  }

}

function getUserDevice(agent) {
  let device = "Other";
  for (key in agent) {
    if (agent["isDesktop"] == true) {
      device = "Desktop";
    }
    if (agent["isMobile"] == true) {
      device = "Mobile";
    }
    if (agent["isTablet"] == true) {
      device = "Tablet";
    }
    if (agent["isiPad"] == true) {
      device = "IPad";
    }
  }
  return device;
}