import { db } from "./_firebase";
import { getUserDevice } from "./_function";

export async function get(req) {

  let clickref = db.collection("clicks");
  let timeStamp = new Date().getTime();
  console.log(req)
  console.log(req.url.searchParams)
  try {

    let docref = await clickref
      .doc(timeStamp.toString())
      .set({
        hostname: req.url.hostname,
        base_url: "auth/login",
        ref_id: req.url.searchParams.get('ref'),
        device: getUserDevice(req.request.agent),
        timestamp: timeStamp,
      })

    console.log(docref);
    return { body: { message: 'updated' } }
  } catch (error) {
    return { body: { message: 'error' } }
  }

}