// import React from 'react'
import web from '../assets/web.png'
import ui from '../assets/ui.png'
import cnt from '../assets/cnt.png'
import mbl from '../assets/mbl.png'


const service = [{
    id:1,
  
    name:"Web Development",
    img:web,
    par:"Bring your vision to life with scalable, fast, and responsive websites, from e-commerce to complex applications, built with clean code and seamless functionality."
},

{
    id:2,
    name:"UI/UX Designing",
    img:ui,
    par:"Create stunning, user-friendly designs that ensure seamless navigation and keep users engaged, from wireframes to polished interfaces."

},

{
    id:3,
    name:"Content Writing",
    img:cnt,
    par:"Craft compelling, SEO-optimized content that drives engagement and aligns with your brand’s voice. From blogs to product descriptions, every word is designed to make an impact."

},

{
    id:4,
    name:"Mobile App Development ",
    img:mbl,
    par:"Transforming ideas into intuitive and scalable mobile apps for iOS, Android, and cross-platform. Each app is designed for exceptional performance and user satisfaction."

},

]
const Services = ({onNavigate}) => {


  return (
    <div className='mt-5  flex flex-col p-5 mb-5 '>
<h1 className='text-slate-900 text-2xl font-bold mx-auto   mb-7'>Services</h1>
<div className='grid grid-cols-1   lg:grid-cols-2 lg:mx-auto gap-5'>
    {/* //webdev */}



{service.map((item)=>{
        return <div key={item.id} className='bg-slate-800 w-full md:w-full lg:w-[470px] xl:w-[600px] border-slate-300 rounded-sm p-2 shadow-slate-800 shadow-md  '>
        <h2 className='text-center mt-3 mb-2 text-lg text-orange-400 font-semibold'>{item.name} </h2>
    

        <div className='flex gap-3 p-2   items-center'>
            <img src={item.img} height={170} width={170} />
            <div>
           
       
            <p className='text-gray-200 text-justify text-sm '>{item.par}</p>
            <button
            onClick={()=>onNavigate('contact')}
            className='text-slate-900 font-bold  bg-orange-400 px-4 py-1 mt-4 rounded-md hover:bg-orange-500'>TRY IT</button>
</div>
            
        </div>
        
    
    </div>
    })}



</div>

    </div>
  )
}

export default Services