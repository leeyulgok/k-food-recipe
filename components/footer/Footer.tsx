import React from "react";
import FooterSection from "./FooterSection";
import styles from "./Footer.module.css";
import INGREDIENT from "@/utils/constants/ingredientList";
import COOKING_METHOD from "@/utils/constants/cookingMethodList";
import FOOTER_CONTENTS from "@/utils/constants/footerContents";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <FooterSection title={INGREDIENT.TITLE} contents={INGREDIENT.LIST} />
        <FooterSection
          title={COOKING_METHOD.TITLE}
          contents={COOKING_METHOD.LIST}
        />
        <FooterSection
          title={FOOTER_CONTENTS.HM_FOOD.TITLE}
          contents={FOOTER_CONTENTS.HM_FOOD.CONTENTS}
        />
        <FooterSection
          title={FOOTER_CONTENTS.PROJECT_DES.TITLE}
          contents={FOOTER_CONTENTS.PROJECT_DES.CONTENTS}
        />
      </div>
    </footer>
  );
};

export default Footer;
