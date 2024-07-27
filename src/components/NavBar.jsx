import { Switch } from "@chakra-ui/switch"
import { CircularProgressbar } from 'react-circular-progressbar'; export default function NavBar() {
    return (
        <div className='lg:flex lg:justify-between lg:items-center  text-center p-4  space-y-4' >
            <h1 className='text-teal-300 font-semibold text-5xl flex flex-col  tracking-wide'>HODLINFO</h1>
            <div className='text-white flex gap-5  lg:text-sm text-xs  justify-center lg:text-md text-sm'>
                <div className='flex bg-gray-700 rounded-lg w-auto lg:p-4 p-2  h-9 justify-center items-center cursor-pointer'>
                    <button>INR</button>
                    <svg xmlns="http://www.w3.org/2000/svg" width={15} height={24} viewBox="0 0 24 24" fill="#FFFFFF" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-caret-down w">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M6 10l6 6l6 -6h-12" />
                    </svg>
                </div>
                <div className='flex bg-gray-700 rounded-lg w-auto   lg:text-sm text-xs  lg:p-4 p-2  h-9 justify-center items-center cursor-pointer'>
                    <button>BTC</button>
                    <svg xmlns="http://www.w3.org/2000/svg" width={15} height={24} viewBox="0 0 24 24" fill="#FFFFFF" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-caret-down">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M6 10l6 6l6 -6h-12" />
                    </svg>
                </div>
                <div className='flex  bg-gray-700 rounded-lg w-auto  lg:text-sm text-xs lg:p-4 p-2 h-9 justify-center items-center cursor-pointer'>
                    <p>BUY BTC</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width={15} height={24} viewBox="0 0 24 24" fill="#FFFFFF" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-caret-down">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M6 10l6 6l6 -6h-12" />
                    </svg>
                </div>
            </div>
            <div className='gap-5 text-white flex gap-2 items-center  justify-center'>

                <div className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
                    <CircularProgressbar value={29} text={`${29}%`} />
                </div>

                <div className='flex bg-teal-400 rounded-lg w-auto p-4 h-9 lg:text-sm text-xs justify-center items-center'>
                    <button>Connect Telegram</button>
                </div>
                <div>
                    <Switch colorScheme='teal' size='lg' />
                </div>

            </div>
        </div>
    )
}