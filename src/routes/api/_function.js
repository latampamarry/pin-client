export function getRefId(originalUrl) {
    var paths = originalUrl.split("/");
    refId = paths[paths.length - 1];
    return refId;
  }



 export function getRedirectLink(db,ref,res){
    db.collection("users").where("ref_id", "==", ref)
      .get()
      .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              let data=doc.data()
              console.log(doc.id, " => ",data );
              res.redirect(data.redirectLink)
          });
      })
      .catch((error) => {
          console.log("Error getting documents: ", error);
      });
  }

