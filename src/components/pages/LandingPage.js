import LoginModal from '../auth/LoginModal';

const LandingPage = () => {

    return(
        <>
        <div className="landing-page">
            <LoginModal />
            <h1 className="lp-header">Welcome to the Island of Misfit Techies</h1>
            <p className="lp-p">A place for badass womxn and underrepresented people in technology.</p>
        </div>
        </>
    );
};

export default LandingPage;