import React from "react";
import styled from "styled-components";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";
// import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const [burgerStatus, setburgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  return (
    <Container>
      <a href="#">
        <img src="/images/logo.svg" alt="" />
      </a>

      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="#">
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#"> Tesla Account</a>
        <p onClick={() => setburgerStatus(true)}>Menu</p>
        {/* <CustomMenu/> */}
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <p onClick={() => setburgerStatus(false)}>Close</p>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href="#">{car}</a>
            </li>
          ))}
        <li>
          <a href="#">Existig Inventory</a>
        </li>
        <li>
          <a href="#">Use Inventory</a>
        </li>
        <li>
          <a href="#">Trade-i n</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Semi</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  top: 0;
  right: 0;
  left: 0;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: nowrap;
  }
`;
const BurgerNav = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  text-align: left;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in-out;
  p {
    justify-self: flex-end;
    cursor: pointer;
  }
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;
/* 
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
 */
export default Header;
