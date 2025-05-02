import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../../../components/ui/NewsCard';

const CategoryNews = () => {

const {id} = useParams()
const data = useLoaderData()
const [activeNews, setActiveNews] = useState([])
useEffect(()=>{
    if (id == 0){
        setActiveNews(data)
        return
    }
    else if (id == 1){
        const filteredNews= data.filter(cate => cate.others.is_today_pick)
        setActiveNews(filteredNews)
    }
    else{
        const filteredNews= data.filter(cate => cate.category_id == id)
    setActiveNews(filteredNews)
    }
},[id, data])

    return (
        <div className='space-y-4'>
     {activeNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)}
        </div>
    );
};

export default CategoryNews;