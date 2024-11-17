
const modules = import.meta.glob('./src/10/*.js')

const Glob = () => {
     
  return (
    <div>
     { 

     Object.values(modules).map((module) => (
          module().then((data) => {
               console.log(data)
          })

     )) }
    </div>
  )
}

export default Glob