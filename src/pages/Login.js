import { StyledTextInput, StyledFormButton, StyledFormArea, StyledLabel, colors, Styled, StyledTitle, Avatar, ButtonGroup, ExtraText, TextLink, CopyrightText } from './../components/Styles';

import Logo from './../assets/logo.png';

// Formik imoprts
import { Formik, Form } from 'formik';
import { TextInput } from '../components/FormLib';
import * as Yup from 'yup';



import BeatLoader from "react-spinners/BeatLoader";
// Icons
import { FiMail, FiLock } from 'react-icons/fi';
import { GridLoader, HashLoader, PacmanLoader } from 'react-spinners';

// Import Hasher




const Login = () =>
{
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo}></Avatar>
                <StyledTitle size={30} color={colors.theme} >Member Login</StyledTitle>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    validationSchema={
                        Yup.object({
                            email: Yup.string().email("invalid email address")
                                .required("Required"),
                            password: Yup.string().min(8, "Password is too short")
                                .max(30, "Password is too long")
                                .required("Required"),
                        })
                    }
                    onSubmit={(values, { setSubmitting }) =>
                    {
                        console.log(values);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>

                            <TextInput
                                name="email"
                                type="text"
                                label="Email Address"
                                placeholder="siame@example.com"
                                icon={<FiMail />}>


                            </TextInput>

                            <TextInput
                                name="password"
                                type="password"
                                label="password"
                                placeholder="***********"
                                icon={<FiLock />}>


                            </TextInput>

                            <ButtonGroup>

                                {!isSubmitting && (<StyledFormButton
                                    type="submit">Login
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
                    New here?<TextLink to="/signup">Signup</TextLink>
                </ExtraText>
            </StyledFormArea>
            <CopyrightText>
                All rights reserved | @ULI 2022
            </CopyrightText>
        </div>
    )

}

export default Login;