import { useSpring, a } from '@react-spring/web';
import '../styles/Checkbox.css'
import { CheckBox } from "../types/CheckBox";
import { useLayoutEffect } from 'react';

// Acceible custom Checkbox inspired from Tom Dohnal
// https://tomdohnal.com/posts/custom-checkbox-in-react-animated-and-accessible

export default function Checkbox({ checked, setChecked} : CheckBox) {

    const [ buttonStyle, setButtonStyle] = useSpring( () => ({
        height: checked ? "30px" : "0px",
        width: checked ? "30px" : "0px"
    }));

    useLayoutEffect( () => {
        setButtonStyle.start({
            height: checked ? "30px" : "0px",
            width: checked ? "30px" : "0px"
        })
    }, [checked, setButtonStyle])

    // const [topDiskPop, setTopDiskPop] = useSpring(() => ({ right: '10em'}))

    return (
    <label className="checkboxLabel">
        <input type="checkbox" onChange={() => { setChecked(!checked) }} />
        <span
        className={"checkbox"}
        // This element is purely decorative so
        // we hide it for screen readers
        aria-hidden="true"
        >
            {/* @ts-ignore */}
            <a.span style={buttonStyle}>
            </a.span>
        </span>
    </label>
    );
}