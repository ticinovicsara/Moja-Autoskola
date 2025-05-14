import { InputField, LogoAndText, PaymentPopup } from "@/components";
import c from "./payment.module.css";
import { useState } from "react";

export const PaymentPage = () => {
  const [cardNum, setCardNum] = useState<string>("");
  const [owner, setOwner] = useState<string>("");
  const [expireDate, setExpireDate] = useState<string>("");
  const [CVV, setCVV] = useState<string>("");
  return (
    <>
      <PaymentPopup
        action="Plaćanje je u tijeku"
        actionColor="#84cdee"
        description="Proces može potrajati neko vrijeme...
Molimo te da ne zatvaraš stranicu dok proces traje!"
      />
      <PaymentPopup
        action="PLAĆANJE JE USPJELO"
        actionColor="#b1cf86"
        description="Registriramo te kao kandidata...
Molimo te da ne zatvaraš stranicu dok proces traje!"
      />
      <div className={`${c.paymentContainer} container`}>
        <LogoAndText />
        <div className={c.cardInfo}>
          <InputField
            placeholder="Broj kartice: XXXX XXXX XXXX XXXX"
            type="text"
            value={cardNum}
            onChange={setCardNum}
          />
          <div className={c.detailsWrapper}>
            <InputField
              placeholder="Vrijedi do (08/26)"
              type="text"
              value={expireDate}
              onChange={setExpireDate}
            />
            <InputField
              placeholder="CVV"
              type="text"
              value={CVV}
              onChange={setCVV}
            />
          </div>
          <InputField
            placeholder="Vlasnik kartice"
            type="text"
            value={owner}
            onChange={setOwner}
          />
        </div>
        <button className="authBtn">Plati</button>
      </div>
    </>
  );
};
