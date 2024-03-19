type TitleSectionProps = {
  title: string;
};
export const TitleSection = ({ title }: TitleSectionProps) => {
  return (
    <div className="mx-auto max-w-7xl px-2 mb-6">
      <h3 className="font-bold text-3xl">{title}</h3>
    </div>
  );
};
