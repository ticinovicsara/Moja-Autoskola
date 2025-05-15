import { FC, useState } from "react";
import styles from "./ChooseInstructorMenu.module.css";
import { Cross } from "@/assets/svgs";
import CandidateCard from "../CandidateCard/CandidateCard";
import { User } from "@/types";
import { InputFieldWithFilter } from "../InputFieldWithFilter/InputFieldWithFiler";

interface ChooseInstructorMenuProps {
    toggleChooseInstructorMenu: () => void;
    instructors: User[];
    onSelectInstructor: (instructor: User) => void;
}

const ChooseInstructorMenu: FC<ChooseInstructorMenuProps> = ({
    toggleChooseInstructorMenu,
    instructors,
    onSelectInstructor,
}) => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredInstructors = instructors.filter((instructor) => {
        const fullName =
            `${instructor.firstName} ${instructor.lastName}`.toLowerCase();
        return fullName.includes(searchTerm.toLowerCase());
    });

    return (
        <div className={styles.menuContainer}>
            <div className={`${styles.menu} container`}>
                <div className={styles.header}>
                    <h2>Dodaj instruktora</h2>
                    <img
                        src={Cross}
                        alt="close"
                        onClick={toggleChooseInstructorMenu}
                    />
                </div>

                <InputFieldWithFilter
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                    searchTitle="Pretraži instruktore"
                />

                <div className={styles.slotList}>
                    {filteredInstructors.length > 0 ? (
                        filteredInstructors.map((instructor) => (
                            <div
                                key={instructor.id}
                                onClick={() => onSelectInstructor(instructor)}
                            >
                                <CandidateCard
                                    firstName={instructor.firstName}
                                    lastName={instructor.lastName}
                                />
                            </div>
                        ))
                    ) : (
                        <p>Trenutno nema dostupnih instruktora.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChooseInstructorMenu;
