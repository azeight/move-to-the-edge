async function handleRequest(request) {
  return new Response("Azion Edge Functions JavaScript - messages.js")
}

addEventListener("fetch", event => {
  return event.respondWith(handleRequest(event.request))
})

