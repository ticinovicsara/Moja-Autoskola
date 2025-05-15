import { AddSlotMenu, ArrowBack, Calendar, SessionList } from "@/components";
import styles from "./InstructorCalendarPage.module.css";
import { Plus } from "@/assets/svgs";
import { getIdFromToken, getUpcomingMonday } from "@/utils";
import { useState } from "react";
import useUserSessions from "@/api/session/useSession";
import useInstructorSlot from "@/api/instructor/useInstructorSlot";
import { InstructorSlot, Session } from "@/types";

const CandidateCalendarPage = () => {
    const {
        sessions,
        isLoading: areSessionsLoading,
        error: sessionsError,
    } = useUserSessions(getIdFromToken() ?? "");
    const {
        slots,
        isLoading: areSlotsLoading,
        error: slotsError,
    } = useInstructorSlot();
    const [isAddSlotMenuOpen, setIsAddSlotMenuOpen] = useState(false);

    const upcomingSessions: (InstructorSlot | Session)[] =
        getUpcomingSessions();

    function getUpcomingSessions() {
        const upcomingSessions = sessions?.filter((session) => {
            const now = new Date();
            const monday = getUpcomingMonday(now);

            return session.startTime >= now && session.startTime <= monday;
        });
        const upcomingSlots = slots?.filter((session) => {
            const now = new Date();
            const monday = getUpcomingMonday(now);

            return session.startTime >= now && session.startTime <= monday;
        });

        return [...upcomingSessions, ...upcomingSlots].sort((a, b) => {
            return a.startTime.getTime() - b.startTime.getTime();
        });
    }

    const toggleAddSlotMenu = () => {
        setIsAddSlotMenuOpen((prev) => !prev);
    };

    return (
        <div className={styles.page}>
            {areSessionsLoading || areSlotsLoading ? (
                <p>Učitavanje...</p>
            ) : (
                <>
                    <div className={`${styles.calendarHeader} container`}>
                        <ArrowBack />
                        <h2>KALENDAR</h2>
                    </div>
                    <Calendar sessions={[...sessions, ...slots]} />{" "}
                    <div className={`${styles.upcomingContainer} container`}>
                        <div className={styles.upcomingHeader}>
                            <h3>Nadolazeći termini ovaj tjedan</h3>
                            <img
                                src={Plus}
                                alt="plus"
                                onClick={toggleAddSlotMenu}
                            />
                        </div>
                        {upcomingSessions.length > 0 ? (
                            <SessionList sessions={upcomingSessions} />
                        ) : (
                            <p>Nemaš nadolazećih termina ovaj tjedan!</p>
                        )}
                    </div>
                </>
            )}
            {(sessionsError || slotsError) && (
                <p className="errorMessage">
                    <p>Došlo je do pogreške prilikom učitavanja sesija.</p>
                </p>
            )}
            {isAddSlotMenuOpen && (
                <AddSlotMenu toggleAddSlotMenu={toggleAddSlotMenu} />
            )}
        </div>
    );
};

export default CandidateCalendarPage;
