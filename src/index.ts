import Fastify from 'fastify';

const fastify = Fastify({
  logger: true
})

fastify.get('/', (req, res) => {
  return { hello: 'world' }
})

fastify.listen({ 
  port: 3333,
  host: '0.0.0.0'
}, (err, address) => {
  if (err) {
    fastify.log.error(err)
  }
})