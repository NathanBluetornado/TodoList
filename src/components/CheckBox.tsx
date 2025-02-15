import '../styles/Checkbox.css'
import { CheckBox } from "../types/CheckBox";

// Acceible custom Checkbox inspired from Tom Dohnal
// https://tomdohnal.com/posts/custom-checkbox-in-react-animated-and-accessible

export default function Checkbox({ checked, setChecked} : CheckBox) {
    return (
    <label>
        <input type="checkbox" onChange={() => { setChecked(!checked); }} />
        <span
        className={`checkbox ${checked ? "checkbox--active" : ""}`}
        // This element is purely decorative so
        // we hide it for screen readers
        aria-hidden="true"
        >
        </span>
    </label>
    );
}