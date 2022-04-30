async function handleRequest(request) {
  return new Response("Azion Edge Functions JavaScript - content.js")
}

addEventListener("fetch", event => {
  return event.respondWith(handleRequest(event.request))
})

