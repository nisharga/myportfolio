import {
    AboutMe,
    Experince,
    Projects,
    Skills,
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
            <ContactForm />
        </>
    );
};

export default page;
