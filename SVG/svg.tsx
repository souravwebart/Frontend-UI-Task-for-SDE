interface Props {
  width?: string;
  height?: string;
  color?: string;
}
export function Hamburger(props: Props) {
  const { color, width, height } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "24"}
      height={height ? height : "24"}
      viewBox="0 0 24 24"
    >
      <path data-name="Path 77005" d="M0 0h24v24H0z" fill="none" />
      <path
        data-name="Path 77006"
        d="M4.007 17.743h16.114a.979.979 0 1 0 0-1.957H4.007a.979.979 0 1 0 0 1.957zm0-4.893h16.114a.979.979 0 1 0 0-1.957H4.007a.979.979 0 1 0 0 1.957zM3 6.979a1 1 0 0 0 1.007.979h16.114a.979.979 0 1 0 0-1.957H4.007A1 1 0 0 0 3 6.979z"
        transform="translate(-.064 .129)"
        fill={color ? color : "#fff"}
      />
    </svg>
  );
}
