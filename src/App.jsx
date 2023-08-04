import styles from "./style"

const App = () => (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          Navbar
        </div>
      </div>

      <div className={`${styles.flexStart} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          Hero
        </div>
      </div>

      <div className={`${styles.flexStart} ${styles.paddingX} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          Hero
        </div>
      </div>

    </div>
  );


export default App