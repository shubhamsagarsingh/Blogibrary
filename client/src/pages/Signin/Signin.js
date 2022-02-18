import './_Signin.scss'




const Signin = () => {
    return(
        <div className='e-Signin__wrapper o-responsiveWrapper'>
            <div className='b-Signin o-responsiveBlock'>
                <div className='e-Signin__container'>
                    <h1>Signin Page</h1>
                    <form>
                        <section>
                            <label>Email</label>
                            <input type='email'/>
                        </section>

                        <section>
                            <label>Password</label>
                            <input type='password'/>
                        </section>
                    </form>
                </div>
            </div>
        </div>
    )
}




export default Signin