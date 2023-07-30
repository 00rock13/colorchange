import react, {usestate} from 'react'

const App = () => {
    const [color,setcolor] = useState("")
    return (
        <div align="center">
 <div style={{backgroundcolor:color,height:"100vh"}} className=" w-12">
 <input type ="text" value={color} onchange={(e)=>setcolor(e.target.value)}/>
 </div>
 </div>
 )
}

