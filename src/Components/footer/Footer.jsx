import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='px-8 py-4' style={{backgroundColor : "#EEEEEE"}}>
        <div className='flex justify-between items-start flex-wrap gap-4 text-center' style={{backgroundColor : "#EEEEEE"}}>
            <div className='flex flex-col'>
                <h4 className='text-center text-2xl' style={{color: "var(--main-color)" }}>Food</h4>
                <Link to="/">Food item 1</Link>
                <Link to="/">Foot item 2</Link>
                <Link to="/">Food item 3</Link>
            </div>
            <div className='flex flex-col'>
                <h4 className='text-center text-2xl' style={{color: "var(--main-color)" }}>Cars</h4>
                <Link to="/">Food item 1</Link>
                <Link to="/">Foot item 2</Link>
                <Link to="/">Food item 3</Link>
            </div>
            <div className='flex flex-col'>
                <h4 className='text-center text-2xl' style={{color: "var(--main-color)" }}>Real-Estate</h4>
                <Link to="/">Food item 1</Link>
                <Link to="/">Foot item 2</Link>
                <Link to="/">Food item 3</Link>
            </div>
            <div className='flex flex-col'>
                <h4 className='text-center text-2xl' style={{color: "var(--main-color)" }}>Electronics</h4>
                <Link to="/">Food item 1</Link>
                <Link to="/">Foot item 2</Link>
                <Link to="/">Food item 3</Link>
                <Link to="/">Food item 3</Link>
                <Link to="/">Food item 3</Link>
            </div>
            <div className='flex flex-col'>
                <h4 className='text-center text-2xl' style={{color: "var(--main-color)" }}>Clothes</h4>
                <Link to="/">Food item 1</Link>
                <Link to="/">Foot item 2</Link>
                <Link to="/">Food item 3</Link>
                <Link to="/">Food item 3</Link>
            </div>
        </div>
        <div className='flex justify-center gap-8 mt-4 border-b-2 border-solid border-gray-300 p-4'>
            <Link to="/">
                <img src="/assets/Facebook_Logo.png" alt="" className='w-12 h-12 object-cover' />
            </Link>
            <Link to="/">
                <img src="/assets/instagram-icon.png" alt="" className='w-12 h-12 object-cover' />
            </Link>
            <Link to="/">
                <img src="/assets/whatsapp.png" alt="" className='w-12 h-12 object-cover' />
            </Link>
        </div>
        <div className='text-center p-4'>
            <p>&copy; Copyright <Link to="https://www.focustradingcompany.com/" style={{color : "var(--main-color)"}}>Focus Tradding Company</Link>. All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer
