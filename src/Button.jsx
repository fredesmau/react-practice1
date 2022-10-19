import "./button.css";



export function Button({ text }) {
  return (
    <>
      <button class="button" type="submit"><span>{text}</span></button>
    </>
  );
}
