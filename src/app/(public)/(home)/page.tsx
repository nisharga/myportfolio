import { AboutMe, Skills } from './components';
import { HeroSection } from './components/HeroSection';

const page = () => {
    return (
        <>
            <HeroSection />
            <AboutMe />
            <Skills />
        </>
    );
};

export default page;
