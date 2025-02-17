import '../styles/ItemDeleteButton.css'
import { DeleteButtonParams } from "../types/DeleteButton";

export default function DeleteButton({ item, deleter } : DeleteButtonParams) {
    return (
    <label className="itemDeleteButton">
        <input type="button" onClick={() => { deleter(item) }} />
        <span
        // This element is purely decorative so
        // we hide it for screen readers
        aria-hidden="true"
        >
        </span>
    </label>
    );
}