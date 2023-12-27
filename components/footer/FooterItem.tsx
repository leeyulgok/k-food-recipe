import { FC } from "react";
import Link from "next/link";
import { getTitlePath } from "@/utils/func/getTitlePath";

type FooterItemProps = {
  title: string;
  content: string;
};

const FooterItem: FC<FooterItemProps> = ({ title, content }) => {
  const linkHref = `/list/${getTitlePath(title)}/${content}`;

  return <Link href={linkHref}>{content}</Link>;
};

export default FooterItem;
