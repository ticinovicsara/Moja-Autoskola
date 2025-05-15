import { ReactNode } from "react";
import c from "./SectionWrapper.module.css";
type SectionWrapperProps = {
    title: string;
    children: ReactNode;
};

export const SectionWrapper = ({ title, children }: SectionWrapperProps) => {
    return (
        <section className={c.section}>
            <h2 className={c.sectionHeader}>{title}</h2>
            {children}
        </section>
    );
};
