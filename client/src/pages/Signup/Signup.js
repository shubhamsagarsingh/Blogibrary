import './_Signup.scss'




const Signup = () => {
    return(
        <div className='e-Signup__wrapper o-responsiveWrapper'>
            <div className='b-Signup o-responsiveBlock'>
                <div className='e-Signup__container'>
                    <h1>Signup Page</h1>
                    <form>
                        <section>
                            <label>Name</label>
                            <input type='text'/>
                        </section>

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





export default Signup