import React from 'react'

export default function InputBox() {
    return (
        <>
            <div className="flex w-10/12 text-lg border-collapse">
                <input type="text" className='w-10/12 border-2 border-blue-300 borde-e-1 rounded-s-md p-3 ' placeholder='Enter a Link to Shorten it...' />
                <button className='w-2/12 rounded-e-md bg-slate-600 hover:bg-slate-700 delay-100 transition-colors text-white p-3'>Shorten URL</button>
            </div>
        </>
    )
}
