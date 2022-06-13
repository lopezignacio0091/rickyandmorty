export default class Main {
    constructor() {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker
          .register("%PUBLIC_URL%/sw.js")
          .then(function () {
            console.log("Service Worker Registered");
          }).catch(function(error){
            console.log(error)
          })
      }
    }
  }
  
  new Main();