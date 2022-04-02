import { StyledTextInput, StyledFormButton, StyledFormArea, StyledLabel, colors, Styled, StyledTitle, Avatar, ButtonGroup, ExtraText, TextLink, CopyrightText } from '../components/Styles';

import Logo from './../assets/logo.png';

// Formik imoprts
import { Formik, Form } from 'formik';
import { TextInput } from '../components/FormLib';
import * as Yup from 'yup';



import BeatLoader from "react-spinners/BeatLoader";
// Icons
import { FiMail, FiLock, FiCalendar, FiHome, FiUser } from 'react-icons/fi';
import { GridLoader, HashLoader, PacmanLoader } from 'react-spinners';

// Import Hasher




const Signup = () =>
{
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo}></Avatar>
                <StyledTitle size={30} color={colors.theme} >Member Signup</StyledTitle>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                        repeatPassword: "",
                        dateOfBirth: "",
                        name: "",
                        institution: ""
                    }}
                    validationSchema={
                        Yup.object({
                            email: Yup.string().email("invalid email address")
                                .required("Required"),
                            password: Yup.string().min(8, "Password is too short")
                                .max(30, "Password is too long")
                                .required("Required"),
                            name: Yup.string().required("Required"),
                            dateOfBirth: Yup.string().required("Required"),
                            repeatPassword: Yup.string().required("Required").oneOf([Yup.ref("password")], "Passwords must much"),
                            institution: Yup.string().required("Required")
                        })
                    }
                    onSubmit={(values, { setSubmitting }) =>
                    {
                        console.log(values);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            {/* Email address */}
                            <TextInput
                                name="email"
                                type="text"
                                label="Email Address"
                                placeholder="siame@example.com"
                                icon={<FiMail />}>


                            </TextInput>

                            {/* password */}
                            <TextInput
                                name="password"
                                type="password"
                                label="password"
                                placeholder="***********"
                                icon={<FiLock />}>


                            </TextInput>
                            {/* Repeat password */}
                            <TextInput
                                name="repeatPassword"
                                type="Password"
                                label="Repeat password"
                                placeholder="***********"
                                icon={<FiLock />}>


                            </TextInput>


                            {/* Username */}
                            <TextInput
                                name="name"
                                type="text"
                                label="Full name"
                                placeholder="Brian Bumper"
                                icon={<FiUser />}>


                            </TextInput>


                            {/* Name of institution */}
                            <TextInput
                                name="institution"
                                type="text"
                                label="Institution name"
                                placeholder="The Copperbelt University"
                                icon={<FiHome />}>


                            </TextInput>

                            {/* Date of birth */}
                            <TextInput
                                name="dateOfBirth"
                                type="date"
                                label="Date Of Birth"
                                icon={<FiCalendar />}>


                            </TextInput>

                            <ButtonGroup>

                                {!isSubmitting && (<StyledFormButton
                                    type="submit">Signup
                                </StyledFormButton>
                                )}
                                {isSubmitting && (
                                    <HashLoader
                                        color={colors.theme}
                                        height={49}
                                        width={100}>

                                    </HashLoader>
                                )}

                            </ButtonGroup>
                        </Form>

                    )}

                </Formik>
                <ExtraText>
                    Already have an Account ?<TextLink to="/Login">Login</TextLink>
                </ExtraText>
            </StyledFormArea>
            <CopyrightText>
                All rights reserved | @ULI 2022
            </CopyrightText>
        </div>
    )

}

export default Signup;