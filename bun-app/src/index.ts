import { Hono } from 'hono'
import { serveStatic } from "hono/bun"
const app = new Hono()

app.use('/', serveStatic({ path: './static/index.html' }))

app.get('*', (c) => {
  return c.redirect("/")
})

export default { 
  port: 3000, 
  fetch: app.fetch, 
} 
