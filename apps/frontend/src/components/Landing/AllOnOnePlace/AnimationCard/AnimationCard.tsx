import c from "./animationCard.module.css";

type AnimationCardProps = {
  title: string;
  iconUrl: string;
};

export const AnimationCard = ({ title, iconUrl }: AnimationCardProps) => {
  return (
    <div className={c.card}>
      <img src={iconUrl} alt={`${title} icon`} />
      <h3>{title}</h3>
    </div>
  );
};
