import styles from "./page.module.css";

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.gridBg}></div>

      {/* Blobs */}
      <div className={`${styles.blob} ${styles.blob1}`}></div>
      <div className={`${styles.blob} ${styles.blob2}`}></div>
      <div className={`${styles.blob} ${styles.blob3}`}></div>

      <div className={styles.content}>
        {/* Hero Section */}
        <main>
          <div className={styles.hero}>
            <h1 className={styles.title}>
              Welcome to{" "}
              <span className={styles.titleGradient}>create-app-setup</span>
            </h1>

            <p className={styles.subtitle}>
              Your project is ready. Build fast. Ship faster.
            </p>
          </div>

          {/* Features */}
          <div className={styles.featuresGrid}>
            {/* Card 1 */}
            <div className={styles.card}>
              <div className={`${styles.iconBox} ${styles.iconBlue}`}>
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Preconfigured tooling</h3>
              <p className={styles.cardText}>
                ESLint, Prettier, and TypeScript configured out of the box.
                Start coding without the setup hassle.
              </p>
            </div>

            {/* Card 2 */}
            <div className={styles.card}>
              <div className={`${styles.iconBox} ${styles.iconPurple}`}>
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Best-practice folder structure</h3>
              <p className={styles.cardText}>
                Organized, scalable architecture that grows with your project.
                Components, utils, and types ready to go.
              </p>
            </div>

            {/* Card 3 */}
            <div className={styles.card}>
              <div className={`${styles.iconBox} ${styles.iconPink}`}>
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>TypeScript-first setup</h3>
              <p className={styles.cardText}>
                Full type safety from the start. Catch errors early and enjoy
                better IDE support throughout development.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
