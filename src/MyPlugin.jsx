import {parse} from 'csv-parse/sync'

// Create your owe plugin
export default ()  => (
     {
          name: 'csv',
          apply(config, {command, mode}) {
               console.log(config, command, mode)
               return mode === "development"
          },
           transform(src, id) {
            // restrict this file for only csv files
            if( /\.csv$/.test(id)) {
              const records = parse(src, { columns: true})
              console.log(src, id)
              console.log(records)
              return {
                code: `export default ${JSON.stringify(records)}`
              }
            }
          } 
     }
    )
          











































// communicating to our client with the plugin server
       /*  configureServer(server) {
          server.ws.on('connection', () => {
            server.ws.send('connected', 'Connection established')
          }) */

          // listen for the client message with the specified ping event which will bear two parameter the payload sent from the client and the client it's self 
          /* server.ws.on('ping', (message, client) => {
                console.log(message)
                   */  
                // we use the client to fire a message to the client with a different event which the client will for 
              /*   client.send('pong', 'Hello Client') */
       /*    }) */
  









          // creting a hmr for our plugin and telling vite not to apply automatic hmr note after creating this we listen for this hmr in the client

     /*      async handleHotUpdate(context) {
               if(/\.csv$/.test(context.file)) {
                   context.server.ws.send({
                    type: 'custom',
                    event: 'csv-update',
                    data: await context.read()
                   }) */
                    // returning this tell's vite not to apply hmr on our plugi we are in charge
                /*    return [] */
               
         /*  } 
          
        } */

     