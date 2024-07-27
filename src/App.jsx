import { useEffect, useState } from 'react'
import CoinPriceTimeline from './components/CoinPriceTimeline';
import NavBar from './components/NavBar';
import 'react-circular-progressbar/dist/styles.css';
import CrytoCard from './components/CrytoCard';
import axios from 'axios';
const imageLink = ["https://www.svgrepo.com/show/366911/btc.svg",
  "https://www.svgrepo.com/show/470342/xrp.svg",
  "https://www.svgrepo.com/show/366997/eth.svg",
  "https://www.svgrepo.com/show/367246/trx.svg",
  "https://www.svgrepo.com/show/428650/eos-crypto-cryptocurrency.svg",
  "https://www.svgrepo.com/show/367311/zil.svg",
  "https://www.svgrepo.com/show/367465/eos.svg",
  "https://www.svgrepo.com/show/367313/zrx.svg",
  "https://www.svgrepo.com/show/367180/req.svg",
  "https://www.svgrepo.com/show/367128/nuls.svg"
]
function App() {
  const [assets, setAssets] = useState()
  useEffect(() => {
    axios.get('http://localhost:3000/fetch')
      .then((result) => {

        setAssets(result.data.response)
      })
  }, [])
  return (
    <div className='bg-gray-900 xl:h-screen '>
      <NavBar />
      <h1 className='lg:text-xl text-sm text-gray-500 text-center mb-8'>Best Price to Trade</h1>
      <CoinPriceTimeline />
      <div className='flex lg:text-2xl text-xs justify-around font-bold text-gray-500 mt-12'>
        <p>#</p>
        <p>Name</p>
        <p>Last Traded Price</p>
        <p>Buy / Sell Price</p>
        <p className='lg:block hidden'>Difference</p>
        <p>savings</p>
      </div>

      <div className=" mt-12 space-y-5 pb-10 overflow-auto lg:max-h-72" >
        {assets?.map((asset, id) => {
          return <CrytoCard key={id} index={id} asset={asset} imageSrc={imageLink[id]} />
        })}
      </div>


    </div >
  )
}

export default App
