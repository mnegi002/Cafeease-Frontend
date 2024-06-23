import classes from "./Map.module.css";
const Map = () => {
  return (
    <div className={classes.mapdiv}>
      <h1 className={classes.loc}>Location</h1>
      <iframe
        className={classes.map}
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1750.5082285637195!2d77.3385677!3d28.6592259!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfae76c95d1a9%3A0x8f1c968b10f81605!2sIpec%20Cafeteria!5e0!3m2!1sen!2sin!4v1698781121755!5m2!1sen!2sin"
        // width="500"
        height="420"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};
export default Map;
