import { listData } from '../../lib/dummyData'
import Card from '../Card/Card'
import './List.scss'

const List = () => {
    return (
        <div className='list'>
            {listData.map(item => <Card item={item} key={item.id}></Card>)}
        </div>
    )
}

export default List