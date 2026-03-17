import styles from './Banner.module.css';

function HeroBanner() {
  return (
    <div
      className={`bg-green-200 flex-1 ${styles.banner} flex justify-center items-center p-16`}
    >
      <div className="flex items-center h-10/12 w-10/12 bg-gray-900/50">
        <h1 className="text-white text-4xl font-bold pt-20 pl-10">
          Welcome to Fuego Libre
        </h1>
      </div>
    </div>
  );
}

export default HeroBanner;
