import { AboutMe, Experince, Skills } from './components';
import { HeroSection } from './components/HeroSection';

const page = () => {
    return (
        <>
            <HeroSection />
            <AboutMe />
            <Skills />
            <Experince />
        </>
    );
};

export default page;
