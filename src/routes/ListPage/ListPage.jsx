import Card from '../../components/Card/Card';
import Filter from '../../components/Filter/Filter';
import Map from '../../components/Map/Map';
import { listData } from '../../lib/dummyData'
import './ListPage.scss'

const ListPage = () => {
    const data = listData;
    return (
        <div className='listPage'>

            <div className="listContainer">
                <div className="wrapper">
                    <Filter />
                    {data.map(item => <Card key={item.id}
                        item={item}></Card>)}
                </div>
            </div>
            <div className="mapContainer">
                <Map items={data} />
            </div>
        </div>
    )
}

export default ListPage