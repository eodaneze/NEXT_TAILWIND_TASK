import React from 'react'

const SubNav = () => {
  return (
    <div className='bg-[#F5F5F5] p-5 border-b-2 relative top-20'>
        <div className="all-container">
             <div className="grid lg:grid-cols-3 md:grid-cols-2">
                 <div className='text-center'>
                      <h4 className='font-semibold text-sm'>Valentine's Day Gift Guide</h4>
                      <p className='text-[13px] font-medium'>For everyone you love (even you)</p>
                 </div>
                 <div className='text-center'>
                      <h4 className='font-semibold text-sm'>Beauty to go</h4>
                      <p className='text-[13px] font-medium'>Buy online, ready in 2 hours or less(even you)</p>
                 </div>
                 <div className='text-center'>
                      <h4 className='font-semibold text-sm'>shop. Earn points. Get Rewards</h4>
                      <p className='text-[13px] font-medium'>Join ultimate reward</p>
                 </div>
             </div>
        </div>
    </div>
  )
}

export default SubNav