import { useField } from "formik";
import { StyledLabel, StyledTextInput, StyledIcon, StyledIcon1, ErrorMsg } from "./Styles";
import { useState } from "react";
// Eye icon
import { FiEyeOff, FiEye } from 'react-icons/fi';


export const TextInput = ({ icon, ...props }) =>
{
    const [field, meta] = useField(props);
    const [show, setShow] = useState(false);

    return (
        <div style={{ position: "relative" }}>
            <StyledLabel htmlFor={props.name}>
                {props.label}
            </StyledLabel>
            {props.type !== "password" && <StyledTextInput
                invalid={meta.touched && meta.error}
                {...props}
                {...field}>
            </StyledTextInput>}
            {/* When the password should be shown or hidden */}
            {props.type === "password" && (
                <StyledTextInput
                    invalid={meta.touched && meta.error}
                    {...field} {...props}
                    type={show ? "text" : "password"}>
                </StyledTextInput>
            )}


            <StyledIcon>{icon}</StyledIcon>





            {
                props.type === "password" &&
                <StyledIcon1 onClick={() => setShow(!show)}>
                    {show && <FiEye></FiEye>}
                    {!show && <FiEyeOff></FiEyeOff>}
                </StyledIcon1>

            }

            {meta.touched && meta.error ? (
                <ErrorMsg>{meta.error}</ErrorMsg>
            ) : (
                <ErrorMsg style={{ visibility: "hidden" }}>.</ErrorMsg>
            )}
        </div >
    )
}