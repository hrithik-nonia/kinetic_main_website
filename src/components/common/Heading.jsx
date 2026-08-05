export default function Heading({ title, para }) {
  return (
    <>
      <div>
        <h1 className="text-3xl font-semibold">{title}</h1>
        {para ? <p className="text-sm font-light">{para}</p> : null}
      </div>
    </>
  );
}
