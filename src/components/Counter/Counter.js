import classes from './Counter.module.css';

const Counter = () => {
  return (
    <div className={classes.counter}>
      <span className={classes.amount}>2</span>
    </div>
  );
};

export default Counter;