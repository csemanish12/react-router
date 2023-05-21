import React from "react"
import {useParams} from "react-router-dom" 

export default function HostVanDetails(){
    
    const [currentVan, setCurrentVan] = React.useState(null)
    const {id} = useParams()

    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, [])

    if (!currentVan){
        return <h1>Loading....</h1>
    }
    console.log("current van:", currentVan)
    return (
        <section>
            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}