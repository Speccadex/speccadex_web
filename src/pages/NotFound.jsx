import { Link } from "react-router-dom";
import PagePlaceholder from "../components/PagePlaceholder.jsx";

export default function NotFound() {
  return (
    <PagePlaceholder title="404, az oldal nem található">
      Ez a cím nem létezik.{" "}
      <Link to="/" className="text-brand-accent underline">
        Vissza a főoldalra
      </Link>
    </PagePlaceholder>
  );
}
