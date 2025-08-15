import { alignProperty } from "@mui/material/styles/cssUtils";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <div className={styles.hero_section_container}>
      <div className={styles.left_container}>
        <div className="text-black">
          <span>GET YOUR PERFECT RIDE</span>
          <span>Anytime in Minutes</span>
        </div>

        <div className="text-black mt-10 ml-2 text-[0.9rem] flex flex-col gap-4 w-[32em] px-8 py-4 relative  rounded-4xl border border-[#ffffff0d]  shadow-[2px_2px_15px_#000000a5]">
          <span>List Your Car and Earn</span>
          <p className="text-center  leading-7">
            Want to turn your car into an earning asset? It's simple! List your
            car on our platform and start earning by renting it out to trusted
            drivers.
          </p>
        </div>

        <div className="text-black mt-10 ml-2 text-[0.9rem] flex flex-col w-[32em] max-w-full px-8 py-6 relative rounded-4xl border border-[#ffffff0d] shadow-[2px_2px_15px_#000000a5] translate-x-[3.75rem]">
          <p className="text-center leading-7">
            Discover the best deals on car rentals near you, or turn your idle
            car into extra income. Whether you're looking to drive or list,
            we've got you covered.
          </p>
          <div className="h-1 w-[8em] absolute bottom-0 left-1/2 -translate-x-1/2 bg-black " />
        </div>
      </div>
      <img src="hero_car.png" className={styles.car_board} />
      {/* <div className={styles.car_board}>
        
      </div> */}
      <div className={styles.car_board_behind}></div>

      <div className={styles.right_container}>
        {/* <div className="pr-[4.5em] flex flex-col gap-[1.7em] pt-[2em] h-full"/> */}
        {/* <div className="flex h-10 w-2xl"/> */}
        <div className="text-black  text-2xl text-center ml-2 text-[0.9rem] flex flex-col w-[32em] max-w-full px-8 py-6 relative rounded-4xl border border-[#ffffff0d] shadow-[2px_2px_15px_#000000a5] translate-x-[3.75rem]">
          <p>Wide Collection of Cars </p>
        </div>

        <div className={styles.hero_map_container}>
          <div className="text-black">
            <img src="hero_map.svg" />
          </div>
          <div>
            <p className="text-black">
              Use our map feature to find the car nearest to you{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
