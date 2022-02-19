import './_Signup.scss'




const Signup = () => {
    return(
        <div className='e-Signup__wrapper o-responsiveWrapper'>
            <div className='b-Signup o-responsiveBlock'>
                <div className='e-Signup__container'>
                    <h1>SIGNUP</h1>
                    <form>
                        <section>
                            <label>Name</label>
                            <input type='text' autoComplete='off'/>
                        </section>

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





export default Signup