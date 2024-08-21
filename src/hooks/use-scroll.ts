import { useMotionValue, useScroll } from "framer-motion";

export const useScrollTo = () => {
    const scrollToSection = (sectionID: string) => {
        const element = document.getElementById(sectionID);
        element?.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
    }

    return scrollToSection;
}
