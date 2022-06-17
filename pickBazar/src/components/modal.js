import React from 'react'

export default function Modal({data,setActiveModal,activeModal}) {
  return (
    <div className={`modal ${activeModal ? 'activeM' : 'disableM'}`}>
        <button onClick={()=>setActiveModal(false)}>close</button>
            {data && <div>
                <p className=''>{data.name}</p>
                <p>{data.description}</p>
                <img src={data.image.original} className="items" alt='' />
                <p>${data.price}</p>
            </div>}
    </div>
  )
}
