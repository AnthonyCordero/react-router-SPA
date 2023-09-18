import { useSate, useEffect, useState } from 'react'
import { buscar } from '../api/api'
import { useParams, Routes, Route } from 'react-router-dom'
import ListCategories from '../components/ListCategories'
import ListPosts from '../components/ListPosts'
import '../assets/css/blog.css'

const Categoria = () => {
    const [subCategorias, setSubCategorias] = useState([])
    const { id } = useParams()

    useEffect(() => {
        buscar(`/categorias?id=${id}`, (response) => {
            setSubCategorias(response[0].subCategorias)
        })
    }, [id])

    return (
        <>
            <div className='container'>
                <h2 className='title-page'> Pet Noticias </h2>
            </div>

            <ListCategories />


            <Routes >
                <Route path='/' element={<ListPosts url={`/posts?categoria=${id}`} />} />
            </Routes >


        </>
    )
}

export default Categoria;