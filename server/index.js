// // const Koa = require('koa')
// import Koa from 'koa'
// const consola = require('consola')
// const { Nuxt, Builder } = require('nuxt')

// const app = new Koa()

// // Import and Set Nuxt.js options
// const config = require('../nuxt.config.js')
// config.dev = !(app.env === 'production')

// async function start() {
//   // Instantiate nuxt.js
//   const nuxt = new Nuxt(config)

//   const {
//     host = process.env.HOST || '127.0.0.1',
//     port = process.env.PORT || 4000
//   } = nuxt.options.server

//   // Build in development
//   if (config.dev) {
//     const builder = new Builder(nuxt)
//     await builder.build()
//   }

//   app.use((ctx) => {
//     ctx.status = 200
//     ctx.respond = false // Bypass Koa's built-in response handling
//     ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
//     nuxt.render(ctx.req, ctx.res)
//   })

//   app.listen(port, host)
//   consola.ready({
//     message: `Server listening on http://${host}:${port}`,
//     badge: true
//   })
// }

// start()
// const { Nuxt, Builder } = require('nuxt')
import { Nuxt, Builder } from 'nuxt'
const fastify = require('fastify')({
  logger: true
})

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 4000
  } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  fastify.use(nuxt.render)

  fastify.listen(port, host, (err, address) => {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  })
}

start()
