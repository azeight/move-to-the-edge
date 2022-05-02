async function handleRequest(request) {
  return new Response("Live conding in hackaton presentation")
}

addEventListener("fetch", event => {
  return event.respondWith(handleRequest(event.request))
})

