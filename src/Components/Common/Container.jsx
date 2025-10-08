import styles from "../modeuleCss/Container.module.css";
const Container = (props) => {
  let color = props.color;
  let transition = props.transition;

  let position = props.position;
  let zIndex = props.zIndex;
  return (
    <div
      className={styles.box}
      style={{
        backgroundColor: color,
        position: position,
        transition: transition,
        zIndex: zIndex,
      }}
    >
      {props.children}
    </div>
  );
};
export default Container;
