import { AboutMe, Experince, Projects, Skills } from './components';
import { HeroSection } from './components/HeroSection';

const page = () => {
    return (
        <>
            <HeroSection />
            <AboutMe />
            <Skills />
            <Experince />
            <Projects />
        </>
    );
};

export default page;
