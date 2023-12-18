import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.about}>
          <h3>회사 정보</h3>
          <p>회사 소개글, 위치, 연락처 정보 등</p>
        </div>
        <div className={styles.navigation}>
          <h3>네비게이션</h3>
          <Link href="/">홈</Link>
          <Link href="/about">회사 소개</Link>
          <Link href="/contact">연락처</Link>
          {/* 기타 링크 추가 */}
        </div>
        <div className={styles.socialMedia}>
          <h3>소셜 미디어</h3>
          {/* 소셜 미디어 아이콘 및 링크 */}
        </div>
        <div className={styles.legal}>
          <h3>법적 정보</h3>
          <Link href="/privacy">개인정보 보호정책</Link>
          <Link href="/terms">이용 약관</Link>
        </div>
        <div className={styles.newsletter}>
          <h3>뉴스레터 구독</h3>
          {/* 구독 폼 */}
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} 회사명. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
