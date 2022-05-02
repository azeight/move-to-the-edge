async function handleRequest(request) {
  return new Response("Hackaton2022 = azeight the best hackaton team!")
}

addEventListener("fetch", event => {
  return event.respondWith(handleRequest(event.request))
})

