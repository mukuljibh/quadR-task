export default function CoinPriceTimeline() {
    const data = [
        { percentage: '0.1%', timeframe: '5Mins' },
        { percentage: '0.96%', timeframe: '1Hour' },
        { percentage: '2.73%', timeframe: '1Day' },
        { percentage: '7.51%', timeframe: '7Days' },
    ];

    return (
        <div className='flex text-white font-semibold  overflow-hidden lg:text-3xl text-xs lg:gap-32 gap-4  justify-center items-center'>
            {data.slice(0, 2).map((item, index) => (
                <div key={index} className='flex flex-col items-center gap-2'>
                    <p className='text-teal-400'>{item.percentage}</p>
                    <p className='text-xs self-center'>{item.timeframe}</p>
                </div>
            ))}
            <div className='flex flex-col gap-4 items-center'>
                <p className='2xl:text-7xl lg:text-4xl text-2xl'>&#8377; 26,56,110</p>
                <p className='text-xs text-center text-gray-500 font-bold self-center'>
                    Average of all coins price including commision
                </p>
            </div>
            {data.slice(2).map((item, index) => (
                <div key={index} className='flex flex-col gap-2'>
                    <p className='text-teal-400'>{item.percentage}</p>
                    <p className='text-xs self-center'>{item.timeframe}</p>
                </div>
            ))}
        </div>
    );
}