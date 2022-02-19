import './_Signin.scss'




const Signin = () => {
    return(
        <div className='e-Signin__wrapper o-responsiveWrapper'>
            <div className='b-Signin o-responsiveBlock'>
                <div className='e-Signin__container'>
                    <h1>SIGNIN</h1>
                    <form>
                        <section>
                            <label>Email</label>
                            <input type='email' autoComplete='off'/>
                        </section>

                        <section>
                            <label>Password</label>
                            <input type='password' autoComplete='off'/>
                        </section>

                        <button>SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    )
}




export default Signin