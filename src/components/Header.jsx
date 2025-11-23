import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import styles from "./header.module.css";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [user, setUser] = useState(null);

  // 🔐 Get auth session
  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user || null);
    };

    getSession();

    // Listen for login/logout changes
    supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setOpenMenu(false);
  };

  return (
    <>
      <header className={styles.headerContainer}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          MarketHub
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/About"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            About
          </NavLink>

          <NavLink
            to="/Marketplace"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Marketplace
          </NavLink>

          <NavLink
            to="/Community"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Community
          </NavLink>

          {user && (
            <NavLink
              to="/Dashboard"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              Dashboard
            </NavLink>
          )}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className={styles.authButtons}>
          {!user ? (
            <>
              <Link to="/Auth">
                <button className={styles.loginBtn}>Login</button>
              </Link>

              <Link to="/Registration">
                <button className={styles.registerBtn}>Join</button>
              </Link>
            </>
          ) : (
            <button onClick={handleLogout} className={styles.loginBtn}>
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={styles.menuButton}
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <FiX /> : <FiMenu />}
        </button>
      </header>

      {/* ======================
          Mobile Dropdown Menu
      ======================= */}
      {openMenu && (
        <div className={styles.mobileMenu}>
          <Link to="/" onClick={() => setOpenMenu(false)}>
            Home
          </Link>
          <Link to="/About" onClick={() => setOpenMenu(false)}>
            About
          </Link>
          <Link to="/Marketplace" onClick={() => setOpenMenu(false)}>
            Marketplace
          </Link>
          <Link to="/Community" onClick={() => setOpenMenu(false)}>
            Community
          </Link>
          {user && (
            <Link to="/Dashboard" onClick={() => setOpenMenu(false)}>
              Dashboard
            </Link>
          )}

          <div className={styles.mobileAuth}>
            {!user ? (
              <>
                <Link to="/Auth" onClick={() => setOpenMenu(false)}>
                  <button className={styles.loginBtn}>Login</button>
                </Link>

                <Link to="/Registration" onClick={() => setOpenMenu(false)}>
                  <button className={styles.registerBtn}>Join</button>
                </Link>
              </>
            ) : (
              <button className={styles.loginBtn} onClick={handleLogout}>
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
