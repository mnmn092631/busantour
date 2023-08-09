import React from "react";
import { ModalMenu, ModalMenuContainer } from "styles/components/modal";

interface SubpageModalMenuProps {
  selectMenu: string;
  setSelectMenu: React.Dispatch<React.SetStateAction<string>>;
}

const SubpageModalMenu = ({ selectMenu, setSelectMenu }: SubpageModalMenuProps) => {
  const menuName = ["상세정보", "이용안내", "댓글"];

  return (
    <ModalMenuContainer>
      {menuName.map((name, idx) => (
        <ModalMenu key={idx} $active={selectMenu === name} onClick={() => setSelectMenu(name)}>
          {name}
        </ModalMenu>
      ))}
    </ModalMenuContainer>
  );
};

export default SubpageModalMenu;
