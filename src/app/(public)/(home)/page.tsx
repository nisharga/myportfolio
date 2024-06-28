import {
    AboutMe,
    Experince,
    Projects,
    Skills,
    Recommendations,
    ContactForm
} from './components';
import { HeroSection } from './components/HeroSection';

const page = () => {
    return (
        <>
            <HeroSection />
            <AboutMe />
            <Skills />
            <Experince />
            <Projects />
            <Recommendations />
            <ContactForm />
        </>
    );
};

export default page;
