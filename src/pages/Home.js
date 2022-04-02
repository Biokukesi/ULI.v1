import { StyledTitle, StyledSubTitle, Avatar, StyledButton, ButtonGroup } from "./../components/Styles";



// Logo
import logo from "./../assets/logo.png"



const Home = () =>
{
    return (
        <div>
            <div
             style = {{
                position: "absolute",
                top: 0,
                left: 0,
                backgroundColor: "transparent",
                width: "100%",
                padding: "15%",
                display: "flex",
                justifyContent: "flex-start",
            }}>
               
                <Avatar image={logo}></Avatar>
            </div>
            <StyledTitle size={65}>
                Welcome to ULI
            </StyledTitle>
            <StyledSubTitle>
                Explore available boarding houses from the comfort of your home
            </StyledSubTitle>
            <ButtonGroup>
                <StyledButton to="/login"> Login   </StyledButton>
                <StyledButton to="/signup"> Signup   </StyledButton></ButtonGroup>
        </div>
    )


}

export default Home;