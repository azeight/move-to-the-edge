async function handleRequest(request) {
  return new Response("The best hackaton team is AzEight!")
}

addEventListener("fetch", event => {
  return event.respondWith(handleRequest(event.request))
})

