import styles from './nav.module.css';

export const Nav = () => {
   const navItems = [
      { label: 'Об Алатау', href: '/about' },
      { label: 'Инвесторам', href: '/investors' },
      { label: 'Для СМИ', href: '/media' },
      { label: 'Галерея', href: '/gallery' },
      { label: 'Контакты', href: '/contacts' },
   ];

   return (
      <nav className={styles.nav}>
         <ul className={styles.list}>
            {navItems.map((item) => (
               <li key={item.href} className={styles.item}>
                  <a href={item.href} className={styles.link}>
                     {item.label}
                  </a>
               </li>
            ))}
         </ul>
      </nav>
   );
};