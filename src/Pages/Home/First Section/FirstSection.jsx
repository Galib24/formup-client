import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import { Link } from 'react-router-dom';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const FirstSection = () => {
    return (
        <>
            <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 my-20'>

                <div style={{width: '600px',}} className='w-50% border-r-8 border-violet-500 lg:ml-52'>


                    <AutoplaySlider
                        play={true}
                        cancelOnInteraction={false} // should stop playing on user interaction
                        interval={1500}
                        
                        
                    >
                        <div data-src="https://media.istockphoto.com/id/1408439145/photo/autumn-skincare-and-autumn-makeup-concept-with-beauty-products-on-table.jpg?s=2048x2048&w=is&k=20&c=OanHc1MH-y256GLbPXt2y3PI7GCsTtpvGm_qFbMA8_4=" />

                        <div data-src="https://media.istockphoto.com/id/1440458000/photo/young-girl-with-hands-near-skin-face.jpg?s=2048x2048&w=is&k=20&c=oQgGbzQ8A-9-xJ-kfpkjRlFqO4ji1qoe72K1glaI2Ck=" />

                        <div data-src="https://media.istockphoto.com/id/1421359949/photo/jewelry-on-window-display.jpg?s=2048x2048&w=is&k=20&c=hYK6BzsEQPNS9oYOhxja1BcdTU9iDNKG6adn-i-hOw0=" />

                        <div data-src="https://media.istockphoto.com/id/1446881146/photo/young-woman-wearing-nightgown-writing-on-notebook-at-bedroom.jpg?s=2048x2048&w=is&k=20&c=Auwc1iu66RiZvHZ2P8ru3uLJPClztJR4kXencx7nIYM=" />


                    </AutoplaySlider>



                </div>
                <div className='w-50% ml-20'>
                    <h1 className='text-5xl font-bold normal-case'>Form Up <br /> Which is great for you! <br />Best of Luck</h1>
                    <Link className="btn btn-ghost bg-violet-400 text-white mt-5" to={`/bioform`}>Get Start!</Link>
                </div>
            </div>
        </>
    );
};

export default FirstSection;