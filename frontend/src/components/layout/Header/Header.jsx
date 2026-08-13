// 


import { useState } from "react";

import Container from "../../ui/Container/Container";
import MegaMenu from "./MegaMenu/MegaMenu";

import styles from "./Header.module.scss";
import { getAssetUrl } from "../../../services/utils";

const Header = ({ navigation }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] =
        useState(false);

    const [activeMegaMenu, setActiveMegaMenu] =
        useState(null);

    const [expandedMobileItem, setExpandedMobileItem] =
        useState(null);

    const { logo, items, cta } = navigation;

    const activeItem = items.find(
        (item) => item.id === activeMegaMenu
    );

    const isNavExpanded =
        isMobileMenuOpen || activeItem?.type === "mega-menu";

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setExpandedMobileItem(null);
    };

    return (
        <header className={styles.header}>
            <Container>

                <div className={`${styles.navbar} ${isNavExpanded ? styles.navbarExpanded : ""
                    }`}>
                    {/* Logo */}
                    <a
                        href={logo.href}
                        className={styles.logo}
                        aria-label="MetaTech home"
                    >
                        <img
                            src={getAssetUrl(logo.image)}
                            alt={logo.text}
                        />
                    </a>

                    {/* =====================
              Desktop navigation
          ====================== */}

                    <nav
                        className={styles.desktopNav}
                        aria-label="Main navigation"
                    >
                        {items.map((item) => {
                            if (item.type === "mega-menu") {
                                return (
                                    <button
                                        key={item.id}
                                        type="button"
                                        className={`${styles.navLink} ${activeMegaMenu === item.id
                                                ? styles.activeNavLink
                                                : ""
                                            }`}
                                        onMouseEnter={() =>
                                            setActiveMegaMenu(item.id)
                                        }
                                        aria-expanded={
                                            activeMegaMenu === item.id
                                        }
                                    >
                                        {item.label}
                                    </button>
                                );
                            }

                            return (
                                <a
                                    key={item.id}
                                    href={item.href}
                                    className={styles.navLink}
                                >
                                    {item.label}
                                </a>
                            );
                        })}
                    </nav>

                    {/* Desktop CTA */}
                    <a
                        href={cta.href}
                        className={styles.desktopCta}
                    >
                        {cta.label}
                    </a>

                    {/* =====================
              Mobile trigger
          ====================== */}

                    <button
                        type="button"
                        className={`${styles.menuButton} ${isMobileMenuOpen ? styles.menuOpen : ""
                            }`}
                        aria-label="Toggle navigation"
                        aria-expanded={isMobileMenuOpen}
                        onClick={() =>
                            setIsMobileMenuOpen((prev) => !prev)
                        }
                    >
                        <span />
                        <span />
                    </button>
                </div>

                {/* =====================
            Desktop Mega Menu
        ====================== */}

                {activeItem?.type === "mega-menu" && (
                    <div
                        className={styles.desktopMegaMenu}
                        onMouseLeave={() =>
                            setActiveMegaMenu(null)
                        }
                    >
                        <MegaMenu items={activeItem.children} />
                    </div>
                )}

                {/* =====================
            Mobile navigation
        ====================== */}

                {isMobileMenuOpen && (
                    <nav
                        className={styles.mobileNav}
                        aria-label="Mobile navigation"
                    >
                        {items.map((item) => {
                            if (item.type === "mega-menu") {
                                const expanded =
                                    expandedMobileItem === item.id;

                                return (
                                    <div
                                        key={item.id}
                                        className={styles.mobileNavGroup}
                                    >
                                        <button
                                            type="button"
                                            className={styles.mobileNavLink}
                                            aria-expanded={expanded}
                                            onClick={() =>
                                                setExpandedMobileItem(
                                                    expanded ? null : item.id
                                                )
                                            }
                                        >
                                            {item.label}

                                            <span aria-hidden="true">
                                                {expanded ? "−" : "+"}
                                            </span>
                                        </button>

                                        {expanded && (
                                            <div
                                                className={
                                                    styles.mobileSubmenu
                                                }
                                            >
                                                {item.children.map(
                                                    (child) => (
                                                        <a
                                                            key={child.id}
                                                            href={child.href}
                                                            onClick={
                                                                closeMobileMenu
                                                            }
                                                        >
                                                            {child.title}
                                                        </a>
                                                    )
                                                )}
                                            </div>
                                        )}
                                    </div>
                                );
                            }

                            return (
                                <a
                                    key={item.id}
                                    href={item.href}
                                    className={styles.mobileNavLink}
                                    onClick={closeMobileMenu}
                                >
                                    {item.label}
                                </a>
                            );
                        })}

                        <a
                            href={cta.href}
                            className={styles.mobileCta}
                            onClick={closeMobileMenu}
                        >
                            {cta.label}
                        </a>
                    </nav>
                )}
            </Container>
        </header>
    );
};

export default Header;