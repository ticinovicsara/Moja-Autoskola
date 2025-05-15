import { School } from "@/types/school";
import c from "./SchoolCard.module.css";
import Star from "@/assets/svgs/star.svg";
import { useState } from "react";
import { ConfirmationPopup } from "../ConfirmationPopup/ConfirmationPopup";
import useSendEnrollmentRequest from "@/api/enrollment/useSendEnrollmentRequest";
import { useAuth } from "@/hooks";
import { EnrollmentPostRequest } from "@/types/enrollmentPostRequest";

type SchoolCardProps = {
    school: School;
};

export const SchoolCard = ({ school }: SchoolCardProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isConfirmPopupOpen, setIsConfirmPopupOpen] =
        useState<boolean>(false);

    const { user } = useAuth();
    const { sendEnrollmentRequest } = useSendEnrollmentRequest();

    const toggleConfirmPopup = () => {
        setIsConfirmPopupOpen((prev) => !prev);
    };

    const handleConfirm = () => {
        if (!user) {
            return;
        }
        const enrollmentReq: EnrollmentPostRequest = {
            candidateId: user.id,
            schoolId: school.id,
        };
        sendEnrollmentRequest(enrollmentReq);
        toggleConfirmPopup();
    };

    const toggleDetails = () => {
        setIsOpen((prev) => !prev);
    };
    return (
        <div className={c.cardWrapper}>
            <div className={c.card} onClick={toggleDetails}>
                <div className={c.logoAndName}>
                    <div className={c.imageWrapper}>
                        <img src={school.imageUrl || ""} alt="school photo" />
                    </div>
                    <h3 className={c.name}>{school.name}</h3>
                </div>
                <div className={c.ratingContainer}>
                    <p>{school.rating}/5</p>
                    <img src={Star} alt="star icon" />
                </div>
            </div>
            {isOpen && (
                <div className={c.infoWrapper}>
                    <div className={c.info}>
                        <p>
                            {school.city}, {school.address}
                        </p>
                        <p className={c.details}>
                            <span className={c.infoMark}>Cijena </span>
                            {school.enrollmentFee}€
                        </p>
                        <p className={c.details}>
                            <span className={c.infoMark}>Kontakt </span>
                            {school.contactNumber}
                        </p>
                        <p className={c.details}>
                            <span className={c.infoMark}>Email </span>
                            {school.email}
                        </p>
                        <a
                            target="_blank"
                            className={`${c.details} ${c.link}`}
                            href={school.websiteUrl || ""}
                        >
                            <span className={c.infoMark}>Naš web </span>
                            {school.name}
                        </a>
                    </div>
                    <button
                        className={`authBtn ${c.sendReqBtn}`}
                        onClick={toggleConfirmPopup}
                    >
                        Pošalji zahtjev
                    </button>
                </div>
            )}
            {isConfirmPopupOpen && (
                <ConfirmationPopup
                    prompt="Jesi li siguran da želiš poslati zahtjev za upis u ovu autoškolu?"
                    handleConfirm={handleConfirm}
                    togglePopup={toggleConfirmPopup}
                />
            )}
        </div>
    );
};
