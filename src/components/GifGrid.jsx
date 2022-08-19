import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs ( category );

    return (
        <>
            {
                isLoading ? (<h2>Cargando...</h2>) : null
            }
            <h3>{category}</h3> 
            <div className="card-grid">
            
                {
                    
                    images.map((img) =>  //utilizando destructuracion {title}
                        ( 
                            <GifItem key={img.id}
                                        { ...img } //tecnica para acceder a las props de lo que estamos obteniendo parecido a la destructuracion(img.title) o tile 
                            />
                        )
                    )
                } 
            </div>
        </>
    )
}
