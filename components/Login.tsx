import { useMetamask } from '@thirdweb-dev/react';
import React from 'react'

function Login() {

    const connectWithMetamask = useMetamask();

    return (
        <div className='bg-[#14071a] min-h-screen flex flex-col items-center justify-center text-center'>
            <div className='flex flex-col items-center mb-10'>
                <img className='rounded-full h-56 w-56 mb-10'
                    src='https://hypebucks.io/wp-content/uploads/2023/05/888.png'
                    alt='Logo'
                />

                <h1 className='text-6xl text-white font-bold'>HypeBucks Lottery</h1>
                {/* crypto lottery */}
                <h2 className='text-white'>Get Started by logging in with your MetaMask</h2>

                <button
                    onClick={connectWithMetamask}
                    className='bg-white px-8 py-5 mt-10 rounded-lg shadow-lg font-bold'>
                    Login with MetaMask
                </button>
            </div>
        </div>
    )
}

export default Login;


