export default function Header(props) {
  return (
    <div className="flex justify-center mb-5">
      <div className="w-fit">
        <div className="bg-gold h-1 w-8 rounded-full"></div>
        <h1 className="text-xl font-spaceMono font-bold">{props.children}</h1>
      </div>
    </div>
  );
}
