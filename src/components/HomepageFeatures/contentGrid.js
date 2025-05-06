import React from 'react';
import Link from '@docusaurus/Link';
import styles from './contentGrid.module.css';

export default function ContentGrid() {
    return (
        <>
        <div className={styles.section}>
          <div>
            <h3 className={styles.sectionTitle}>Вступ</h3>
            <div className={styles.grid}>
              <Link to="/docs/js/hello"><span className={styles.itemNumber}>1.1</span> Привіт, світ!</Link>
              <Link to="/docs/js/structure">2.2 Структура коду</Link>
              <Link to="/docs/js/strict-mode">2.3 Сучасний режим, "use strict"</Link>
              <Link to="/docs/js/variables">2.4 Змінні</Link>
              <Link to="/docs/js/types">2.5 Типи даних</Link>
              <Link to="/docs/js/interaction">2.6 Взаємодія: alert, prompt, confirm</Link>
              <Link to="/docs/js/conversion">2.7 Перетворення типу</Link>
              <Link to="/docs/js/math">2.8 Базові оператори, математика</Link>
              <Link to="/docs/js/comparison">2.9 Оператори порівняння</Link>
              <Link to="/docs/js/if">2.10 Умовні розгалуження: if, ?</Link>
            </div>
            <div className={styles.bottomLine} />
          </div>
        </div>

        <div className={styles.section}>
          <div>
            <h3 className={styles.sectionTitle}>Вступ</h3>
            <div className={styles.grid}>
              <Link to="/docs/js/hello"><span className={styles.itemNumber}>1.1</span> Привіт, світ!</Link>
              <Link to="/docs/js/structure">2.2 Структура коду</Link>
              <Link to="/docs/js/strict-mode">2.3 Сучасний режим, "use strict"</Link>
              <Link to="/docs/js/variables">2.4 Змінні</Link>
              <Link to="/docs/js/types">2.5 Типи даних</Link>
              <Link to="/docs/js/interaction">2.6 Взаємодія: alert, prompt, confirm</Link>
              <Link to="/docs/js/conversion">2.7 Перетворення типу</Link>
              <Link to="/docs/js/math">2.8 Базові оператори, математика</Link>
              <Link to="/docs/js/comparison">2.9 Оператори порівняння</Link>
              <Link to="/docs/js/if">2.10 Умовні розгалуження: if, ?</Link>
            </div>
            <div className={styles.bottomLine} />
          </div>
        </div>

        <div className={styles.section}>
          <div>
            <h3 className={styles.sectionTitle}>Вступ</h3>
            <div className={styles.grid}>
              <Link to="/docs/js/hello"><span className={styles.itemNumber}>1.1</span> Привіт, світ!</Link>
              <Link to="/docs/js/structure">2.2 Структура коду</Link>
              <Link to="/docs/js/strict-mode">2.3 Сучасний режим, "use strict"</Link>
              <Link to="/docs/js/variables">2.4 Змінні</Link>
              <Link to="/docs/js/types">2.5 Типи даних</Link>
              <Link to="/docs/js/interaction">2.6 Взаємодія: alert, prompt, confirm</Link>
              <Link to="/docs/js/conversion">2.7 Перетворення типу</Link>
              <Link to="/docs/js/math">2.8 Базові оператори, математика</Link>
              <Link to="/docs/js/comparison">2.9 Оператори порівняння</Link>
              <Link to="/docs/js/if">2.10 Умовні розгалуження: if, ?</Link>
            </div>
            <div className={styles.bottomLine} />
          </div>
        </div>

        <div className={styles.section}>
          <div>
            <h3 className={styles.sectionTitle}>Вступ</h3>
            <div className={styles.grid}>
              <Link to="/docs/js/hello"><span className={styles.itemNumber}>1.1</span> Привіт, світ!</Link>
              <Link to="/docs/js/structure">2.2 Структура коду</Link>
              <Link to="/docs/js/strict-mode">2.3 Сучасний режим, "use strict"</Link>
              <Link to="/docs/js/variables">2.4 Змінні</Link>
              <Link to="/docs/js/types">2.5 Типи даних</Link>
              <Link to="/docs/js/interaction">2.6 Взаємодія: alert, prompt, confirm</Link>
              <Link to="/docs/js/conversion">2.7 Перетворення типу</Link>
              <Link to="/docs/js/math">2.8 Базові оператори, математика</Link>
              <Link to="/docs/js/comparison">2.9 Оператори порівняння</Link>
              <Link to="/docs/js/if">2.10 Умовні розгалуження: if, ?</Link>
            </div>
          </div>
        </div>
        </>
      );
      
}
