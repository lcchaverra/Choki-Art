import {useState} from 'react'
const Tabs = () => {

  const [activeTab, setActiveTab] = useState('Abstracta');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  }

  return (
    <>
    <nav className='tabs-menu'>
        <ul>
            <li className={activeTab === 'Abstracta' ? 'activeTab' : ''} onClick={()=> handleTabClick('Abstracta')}>Abstracta</li>
            <li className={activeTab === 'Ceramica' ? 'activeTab' : ''} onClick={()=> handleTabClick('Ceramica')}>Ceramica</li>
            <li className={activeTab === 'Escultura' ? 'activeTab' : ''} onClick={()=> handleTabClick('Escultura')}>Escultura</li>
            <li className={activeTab === 'Madera Tallada' ? 'activeTab' : ''} onClick={()=> handleTabClick('Madera Tallada')}>Madera Tallada</li>
            <li className={activeTab === 'Contemporánea' ? 'activeTab' : ''} onClick={()=> handleTabClick('Contemporánea')}>Contemporánea</li>
        </ul>
    </nav>
    </>
  )
}

export default Tabs