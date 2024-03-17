import Mem from "../img/mem.svg";
function TeamMemb(props) {
  return (
    <div className="teammembox1 teammembox">
      <div className="logo">
        <img src={Mem} />
      </div>
      <div className="teammemdetail">
        <h1>{props.name}</h1>
        <h2>{props.reg}</h2>
      </div>
    </div>
  );
}

export default TeamMemb;
