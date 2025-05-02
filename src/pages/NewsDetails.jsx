import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData, useParams } from 'react-router';
import Navbar from '../components/layout/Navbar';
import Header from '../components/layout/Header';
import RightAside from './Home/components/RightAside';

const NewsDetails = () => {
    const {id} = useParams()
    const data= useLoaderData()
   const [news, setNews]=useState([])
   useEffect(()=>{
    const newsData = data.find(res => res.id==id)
    setNews(newsData)
   },[data, id])
    return (
        
            <div className=' w-11/12 mx-auto py-6 min-h-screen'>
            <header>
            <Header></Header>
            </header>
            <h2 className='text-xl font-semibold text-accent my-4'>Dragon News</h2>
            <div className='grid grid-cols-12 gap-6'>
           <section className='col-span-full md:col-span-9'>
           <div className='bg-base-200 p-6 rounded-xl border border-black/20 '>
                <img className='w-full rounded-xl md:h-[411px] object-cover' src={news.thumbnail_url} alt={news.title} />
                <h1 className='font-bold text-2xl my-4'>{news.title}</h1>
                <p className='text-accent mb-4'>{news.details}</p>
                <Link to={'/'} className='btn btn-secondary'><FaArrowLeft></FaArrowLeft> All news in this category</Link>
            </div>
           </section>
            <aside className='col-span-3 hidden md:flex'>
                <RightAside></RightAside>
            </aside>
            </div>
        </div>
    );
};

export default NewsDetails;