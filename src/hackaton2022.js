async function handleRequest(request) {
  return new Response("live code hackaton2022")
}

addEventListener("fetch", event => {
  return event.respondWith(handleRequest(event.request))
})

