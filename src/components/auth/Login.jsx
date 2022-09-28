function Login({ontes}){


    return(
        <div className="invisible fixed w-full justify-center" id="login-show">
            <div className="m-auto w-80 p-5 rounded-md shadow-lg bg-white border ">
                <div className="w-full text-end">
                    <i className="fa fa-close text-lg text-end" onClick={()=>ontes()}/>
                </div>
                <p className="text-center font-bold text-xl">LOGIN</p>
                <div>
                    <label htmlFor="first-name" className="mt-1 block text-base font-medium ">Username</label>
                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full p-2 border-b-2 focus:outline-0 text-base" />
                </div>
                <div>
                    <label htmlFor="first-name" class="mt-1 block text-base font-medium ">Password</label>
                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full p-2 border-b-2 focus:outline-0 text-base" />
                </div>
                <div className="mt-5 flex">
                    <p className="basis-1/2 text-center">
                        <p>Daftar</p>
                        <p>Lupa Password</p>
                    </p>
                    <div className="basis-1/2 text-end" >
                        <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default Login;