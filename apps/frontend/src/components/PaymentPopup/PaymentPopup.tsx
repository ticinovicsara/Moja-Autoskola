import c from "./paymentPopup.module.css";

type PaymentPageProps = {
  action: string;
  description: string;
  actionColor: string;
};

export const PaymentPopup = ({
  action,
  actionColor,
  description,
}: PaymentPageProps) => {
  return (
    <div className={c.popup}>
      <p className={c.action} style={{ color: actionColor }}>
        {action}
      </p>
      <p className={c.description}>{description}</p>
    </div>
  );
};
