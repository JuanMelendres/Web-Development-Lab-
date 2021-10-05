// self.addEventListener("fetch", function(event) {
//   event.respondWith(
//     fetch(event.request).catch(function() {
//       return new Response(
//       "I sit on a man’s back choking him and making him carry me, and yet assure myself and others that I am sorry for him and wish to lighten his load by all means possible…except by getting off his back."+
//       "Tolstoi"
//       );
//     })
//   );
// });

self.addEventListener("install", (e) => {
  e.WaitUntil(
    caches.open("page").then((cache) => {
      console.log("Cache successfully");
      // return cache.add("index.html");
      return cache.addAll([
        'index.html',
        'doge.jpg',
        'test.css'
      ]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          console.log("Is in cache");
          return response;
        } else {
          console.log("Is not in cache");
          return fetch(event.request);
        }
      })
  );
});