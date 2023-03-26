import React from 'react'
import ProducstCard from './ProducstCard'

function Products({products}) {
  // console.log(products)
  return (
    <div className='py-10'>
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>
                Shopping everyday
            </h1>
            <span className='w-20 h-[3px] bg-black'></span>
            <p className='max-w-[700px] text-gray-600 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
 </p>

        </div>
        <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10'> 
            {
              products.map((items)=>(<ProducstCard  key={items._id} product={items}/>))
            }
        </div>

    </div>
  )
}

export default Products