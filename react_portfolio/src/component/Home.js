import Banner from './Banner';
import UpdateDate from './UpdateDate';
import HomeFE from './HomeFE';
import '../css/Hd.css'

function Home(){
    return(
        <section id="home" class="">
            <Banner></Banner>
            <UpdateDate></UpdateDate>
            <HomeFE></HomeFE>
        </section>
)}

export default Home;