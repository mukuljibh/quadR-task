export default function CrytoCard({ asset, index, imageSrc }) {
    return (
        <div className='flex lg:text-2xl text-xs justify-around  font-bold text-white text-center  mx-3 py-6 rounded-xl bg-gray-700'>
            <p className="lg:min-w-16 min-w-8  flex justify-center items-center ">{index + 1}</p>
            <div className='flex gap-2 items-center justify-center lg:min-w-24  min-w-24 '>
                <img className="lg:w-8 w-5" src={imageSrc} />
                <p>{asset.base_unit}</p>
            </div>
            <p className="lg:min-w-64 min-w-32 text-center flex justify-center items-center">&#8377;{asset.last}</p>
            <p className=" lg:min-w-64 min-w-32  flex justify-center items-center">&#8377; {asset.buy} / &#8377; {asset.sell}</p>
            <p className='text-red-500 lg:min-w-28 flex items-center '>-3.14%</p>
            <p className='text-red-500 flex items-center '>&#8377; 83,498</p>

        </div>
    )
}