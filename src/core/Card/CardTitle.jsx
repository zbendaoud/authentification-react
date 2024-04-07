export default function CardTitle({ title1, title2, title3 }) {
  return (
    <div className="text-center">
      <div>{title1}</div>
      <div>
        <b>{title2} </b>
      </div>
      <div>{title3}</div>
    </div>
  );
}
