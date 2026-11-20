type IconProps = {
  iconName: string;
  width?: number;
  height?: number;
  className?: string;
};

export default function Icon({
  iconName,
  width = 20,
  height = 20,
  className,
}: IconProps) {
  return (
    <svg aria-hidden="true" width={width} height={height} className={className}>
      <use href={`/icons/sprite.svg#${iconName}`}></use>
    </svg>
  );
}
