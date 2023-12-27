import React from "react";
import FooterSection from "./FooterSection";
import styles from "./Footer.module.css";
import INGREDIENT from "@/utils/constants/ingredientList";
import COOKING_METHOD from "@/utils/constants/cookingMethodList";

const Footer = () => {
  const HMFood = {
    TITLE: "How to Make K-Food",
    CONTENTS: `Do you like Korean food?\nNow make it simple at home.\nMake it lightly with a video without difficulty.`,
  };

  const ProjectDes = {
    TITLE: "Project Description",
    CONTENTS: `© ${new Date().getFullYear()} Project. All rights reserved.`,
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <FooterSection title={INGREDIENT.TITLE} contents={INGREDIENT.LIST} />
        <FooterSection title={COOKING_METHOD.TITLE} contents={COOKING_METHOD.LIST} />
        <FooterSection title={HMFood.TITLE} contents={HMFood.CONTENTS} />
        <FooterSection title={ProjectDes.TITLE} contents={ProjectDes.CONTENTS} />
      </div>
    </footer>
  );
};

export default Footer;
